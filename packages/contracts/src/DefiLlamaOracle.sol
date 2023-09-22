pragma solidity 0.8.19;

import {BaseOracle} from "carrot/presets/oracles/BaseOracle.sol";
import {ConstantAnswererTrustedOracle} from "carrot/presets/oracles/ConstantAnswererTrustedOracle.sol";
import {ConstrainedOracle, Constraint} from "carrot/presets/oracles/ConstrainedOracle.sol";
import {InitializeOracleParams} from "carrot/commons/Types.sol";
import {IKPIToken} from "carrot/interfaces/kpi-tokens/IKPIToken.sol";

/// SPDX-License-Identifier: GPL-3.0-or-later
/// @title DefiLlama oracle
/// @dev An oracle template implementation leveraging a trustesd oracle
/// to bring DefiLlama data on-chain. The smart contract solution is extremely
/// simple and just allows an external, trusted data source to post data on-chain,
/// so 100% of the data fetching logic is actually off-chain.
/// @author Federico Luzzi - <federico.luzzi@protonmail.com>
contract DefiLlamaOracle is BaseOracle, ConstrainedOracle, ConstantAnswererTrustedOracle {
    uint256 public immutable minimumElapsedTime;

    uint256 public measurementTimestamp;
    string public specification;
    uint256 public result;

    error InvalidSpecification();
    error MeasurementTimestampTooClose();
    error MeasurementTimestampAfterKPITokenExpiration();
    error TooSoonToFinalize();

    event Initialize(address indexed kpiToken, uint256 indexed templateId);
    event Finalize(uint256 result);

    /// @dev Initializes the trusted oracle system.
    /// @param _answerer The address of the trusted entitity that will be allowed to post answers.
    /// @param _minimumElapsedTime The minimum time that must elapse from the instantiation
    /// of an oracle to when the final measurement should be taken. If for example we have a
    /// `_minimumElapsedTime` with value 30, and oracle created at t0 must have a measurement
    /// timestamp of at least t30.
    constructor(address _answerer, uint256 _minimumElapsedTime) ConstantAnswererTrustedOracle(_answerer) {
        minimumElapsedTime = _minimumElapsedTime;
    }

    /// @dev Initializes the oracle.
    /// @param _params The params are passed in a struct and are:
    /// - `creator`: the address of the entity creating the KPI token.
    /// - `kpiToken`: the address of the KPI token to which the oracle must be linked to.
    ///   This address is also used to know to which contract to report results back to.
    /// - `templateId`: the id of the template.
    /// - `data`: an ABI-encoded structure forwarded by the created KPI token from the KPI token
    ///   creator, containing the initialization parameters for the oracle template.
    ///   In particular the structure is formed in the following way:
    ///     - `string memory specification`: an IPFS cid that points to the specification for
    ///       the DefiLlama query. The specification is a structured JSON that describes which
    ///       data to bring on-chain from DefiLlama and how, so that the answerer bot can act
    ///       as expected.
    ///     - `uint256 measurementTimestamp`: a timestamp that indicates when the final measurement
    ///       should be taken and posted on-chain.
    ///     - `Constraint constraint`: since this is a constrained oracle, this is used to specify
    ///       the constraint type.
    ///     - `uint _value0`: since this is a constrained oracle, this is used to specify the first
    ///       value of the constraint.
    ///     - `uint _value1`: since this is a constrained oracle, this is used to specify the second
    ///       value of the constraint.
    function initialize(InitializeOracleParams memory _params) external payable override initializer {
        __BaseOracle_init(_params.kpiToken, _params.templateId, _params.templateVersion);

        (
            string memory _specification,
            uint256 _measurementTimestamp,
            Constraint _constraint,
            uint256 _value0,
            uint256 _value1
        ) = abi.decode(_params.data, (string, uint256, Constraint, uint256, uint256));

        __ConstrainedOracle_init(_constraint, _value0, _value1);

        if (bytes(_specification).length == 0) revert InvalidSpecification();
        if (_measurementTimestamp < block.timestamp + minimumElapsedTime) revert MeasurementTimestampTooClose();
        if (_measurementTimestamp > IKPIToken(_params.kpiToken).expiration()) {
            revert MeasurementTimestampAfterKPITokenExpiration();
        }

        specification = _specification;
        measurementTimestamp = _measurementTimestamp;

        emit Initialize(_params.kpiToken, _params.templateId);
    }

    /// @dev Oracle finalization logic. This checks if the measurement timestamp has been reached and
    /// if the answerer is allowed to post an answer, and if it is, it converts the raw answer value
    /// to a goal completion percentage according to how the constraint was set in this instance at
    /// initialization time.
    function finalize(uint256 _result) external {
        if (finalized) revert Forbidden();
        if (block.timestamp < measurementTimestamp) revert TooSoonToFinalize();
        _checkAnswerer();
        finalized = true;
        result = _result;
        IKPIToken(kpiToken).finalize(_toCompletionPercentage(_result));
        emit Finalize(_result);
    }

    /// @dev View function returning all the most important data about the oracle, in
    /// an ABI-encoded structure.
    /// @return The ABI-encoded data.
    function data() external view override returns (bytes memory) {
        return abi.encode(answerer, constraint, value0, value1, specification, measurementTimestamp, result);
    }
}
