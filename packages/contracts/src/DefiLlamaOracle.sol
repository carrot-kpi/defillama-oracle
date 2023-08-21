pragma solidity 0.8.19;

import {TrustedOracle} from "carrot-trusted-oracle/TrustedOracle.sol";
import {InitializeOracleParams} from "carrot/commons/Types.sol";

/// SPDX-License-Identifier: GPL-3.0-or-later
/// @title DefiLlama oracle
/// @dev An oracle template implementation leveraging a trustesd oracle
/// to bring DefiLlama data on-chain. The smart contract solution is extremely
/// simple and just allows an external, trusted data source to post data on-chain,
/// so 100% of the data fetching logic is actually off-chain.
/// @author Federico Luzzi - <federico.luzzi@protonmail.com>
contract DefiLlamaOracle is TrustedOracle {
    string public specification;

    error InvalidSpecification();

    /// @dev Initializes the trusted oracle system.
    /// @param _answerer The address of the trusted entitity that will be allowed to
    /// post answers.
    constructor(address _answerer) TrustedOracle(_answerer) {}

    /// @dev Internal initialization logic.
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
    function _initialize(InitializeOracleParams memory _params) internal override {
        string memory _specification = abi.decode(_params.data, (string));

        if (bytes(_specification).length == 0) revert InvalidSpecification();
        specification = _specification;
    }

    /// @dev View function returning all the most important data about the oracle, in
    /// an ABI-encoded structure.
    /// @return The ABI-encoded data.
    function data() external view override returns (bytes memory) {
        return abi.encode(answerer, specification);
    }
}
