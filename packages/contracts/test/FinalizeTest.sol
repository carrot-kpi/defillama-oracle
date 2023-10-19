pragma solidity 0.8.21;

import {BaseTestSetup} from "./commons/BaseTestSetup.sol";
import {DefiLlamaOracle} from "../src/DefiLlamaOracle.sol";
import {Template} from "carrot/interfaces/IBaseTemplatesManager.sol";
import {InitializeOracleParams} from "carrot/commons/Types.sol";
import {Constraint} from "carrot/presets/oracles/ConstrainedOracle.sol";
import {INVALID_ANSWER, UNIT} from "carrot/commons/Constants.sol";
import {MockKPIToken, OracleData} from "./mocks/MockKPIToken.sol";

/// SPDX-License-Identifier: GPL-3.0-or-later
/// @title DefiLlama oracle finalization test
/// @dev Tests finalization in the DefiLlama oracle template.
/// @author Federico Luzzi - <federico.luzzi@carrot-labs.xyz>
contract FinalizeTest is BaseTestSetup {
    function initializeKPITokenOracle(
        string memory _specification,
        uint256 _measurementTimestamp,
        Constraint _constraint,
        uint256 _value0,
        uint256 _value1
    ) internal returns (MockKPIToken, DefiLlamaOracle) {
        bytes memory realityV3OracleInitializationData =
            abi.encode(_specification, _measurementTimestamp, _constraint, _value0, _value1);
        OracleData[] memory _oracleDatas = new OracleData[](1);
        _oracleDatas[0] = OracleData({templateId: 1, data: realityV3OracleInitializationData});
        bytes memory _oraclesInitializationData = abi.encode(_oracleDatas);

        string memory _description = "test";
        address _predictedKpiTokenAddress = kpiTokensManager.predictInstanceAddress(
            address(this), 1, _description, block.timestamp + 60, abi.encode(""), _oraclesInitializationData
        );

        factory.createToken(1, _description, block.timestamp + 60, abi.encode(""), _oraclesInitializationData);

        MockKPIToken _kpiToken = MockKPIToken(_predictedKpiTokenAddress);

        return (_kpiToken, DefiLlamaOracle(_kpiToken.oracles()[0]));
    }

    function testMeasurementTimestampNotReached() external {
        (, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", block.timestamp + 60, Constraint.Equal, 10, 0);
        vm.expectRevert(abi.encodeWithSignature("TooSoonToFinalize()"));
        _oracle.finalize(1);
    }

    function testForbiddenAnswerer() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Equal, 10, 0);
        vm.warp(_measurementTimestamp);
        vm.prank(address(0xdeadbeef));
        vm.expectRevert(abi.encodeWithSignature("Forbidden()"));
        _oracle.finalize(1);
    }

    function testSuccessEqualConstraintWrongFinalValue() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Equal, 10, 0);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (0)));
        _oracle.finalize(11);
        assertTrue(_oracle.finalized());
    }

    function testSuccessEqualConstraintExactFinalValue() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Equal, 10, 0);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (UNIT)));
        _oracle.finalize(10);
        assertTrue(_oracle.finalized());
    }

    function testSuccessNotEqualConstraintWrongFinalValue() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.NotEqual, 10, 0);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (0)));
        _oracle.finalize(10);
        assertTrue(_oracle.finalized());
    }

    function testSuccessNotEqualConstraintExactFinalValue() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.NotEqual, 10, 0);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (UNIT)));
        _oracle.finalize(20);
        assertTrue(_oracle.finalized());
    }

    function testSuccessGreaterThanConstraintWrongFinalValue() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.GreaterThan, 20, 0);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (0)));
        _oracle.finalize(1);
        assertTrue(_oracle.finalized());
    }

    function testSuccessGreaterThanConstraintTargetFinalValue() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.GreaterThan, 20, 0);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (0)));
        _oracle.finalize(20);
        assertTrue(_oracle.finalized());
    }

    function testSuccessGreaterThanConstraintCorrectFinalValue() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.GreaterThan, 20, 0);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (UNIT)));
        _oracle.finalize(100);
        assertTrue(_oracle.finalized());
    }

    function testSuccessLowerThanConstraintWrongFinalValue() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.LowerThan, 100, 0);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (0)));
        _oracle.finalize(153);
        assertTrue(_oracle.finalized());
    }

    function testSuccessLowerThanConstraintTargetFinalValue() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.LowerThan, 100, 0);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (0)));
        _oracle.finalize(100);
        assertTrue(_oracle.finalized());
    }

    function testSuccessLowerThanConstraintCorrectFinalValue() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.LowerThan, 100, 0);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (UNIT)));
        _oracle.finalize(32);
        assertTrue(_oracle.finalized());
    }

    function testSuccessBetweenConstraintFinalValueBelowLowerBound() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Between, 110, 145);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (0)));
        _oracle.finalize(100);
        assertTrue(_oracle.finalized());
    }

    function testSuccessBetweenConstraintFinalValueAtLowerBound() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Between, 110, 145);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (0)));
        _oracle.finalize(110);
        assertTrue(_oracle.finalized());
    }

    function testSuccessBetweenConstraintFinalValueAboveUpperBound() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Between, 110, 145);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (0)));
        _oracle.finalize(180);
        assertTrue(_oracle.finalized());
    }

    function testSuccessBetweenConstraintFinalValueAtUpperBound() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Between, 110, 145);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (0)));
        _oracle.finalize(145);
        assertTrue(_oracle.finalized());
    }

    function testSuccessBetweenConstraintFinalValueInRange() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Between, 110, 145);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (UNIT)));
        _oracle.finalize(129);
        assertTrue(_oracle.finalized());
    }

    function testSuccessRangeConstraintFinalValueBelowLowerBound() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Range, 100, 120);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (0)));
        _oracle.finalize(85);
        assertTrue(_oracle.finalized());
    }

    function testSuccessRangeConstraintFinalValueAtLowerBound() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Range, 100, 120);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (0)));
        _oracle.finalize(100);
        assertTrue(_oracle.finalized());
    }

    function testSuccessRangeConstraintFinalValueAboveUpperBound() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Range, 100, 120);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (UNIT)));
        _oracle.finalize(925);
        assertTrue(_oracle.finalized());
    }

    function testSuccessRangeConstraintFinalValueAtUpperBound() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Range, 100, 120);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (UNIT)));
        _oracle.finalize(120);
        assertTrue(_oracle.finalized());
    }

    function testSuccessRangeConstraintFinalValueInRange1() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Range, 100, 120);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (450_000)));
        _oracle.finalize(109);
        assertTrue(_oracle.finalized());
    }

    function testSuccessRangeConstraintFinalValueInRange2() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Range, 100, 1000);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (37_777)));
        _oracle.finalize(134);
        assertTrue(_oracle.finalized());
    }

    function testSuccessRangeConstraintFinalValueInRange3() external {
        uint256 _measurementTimestamp = block.timestamp + 60;
        (MockKPIToken _kpiToken, DefiLlamaOracle _oracle) =
            initializeKPITokenOracle("fake-spec", _measurementTimestamp, Constraint.Range, 100, 1000);
        vm.warp(_measurementTimestamp);
        vm.prank(ANSWERER);
        vm.expectCall(address(_kpiToken), abi.encodeCall(_kpiToken.finalize, (635_555)));
        _oracle.finalize(672);
        assertTrue(_oracle.finalized());
    }
}
