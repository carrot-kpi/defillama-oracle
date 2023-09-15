pragma solidity 0.8.19;

import {BaseTestSetup} from "./commons/BaseTestSetup.sol";
import {DefiLlamaOracle} from "../src/DefiLlamaOracle.sol";
import {IOraclesManager1} from "carrot/interfaces/oracles-managers/IOraclesManager1.sol";
import {Template} from "carrot/interfaces/IBaseTemplatesManager.sol";
import {InitializeOracleParams} from "carrot/commons/Types.sol";
import {ClonesUpgradeable} from "oz-upgradeable/proxy/ClonesUpgradeable.sol";
import {Constraint} from "carrot/presets/oracles/ConstrainedOracle.sol";
import {INVALID_ANSWER} from "carrot/commons/Constants.sol";

/// SPDX-License-Identifier: GPL-3.0-or-later
/// @title DefiLlama oracle intialization test
/// @dev Tests initialization in the DefiLlama oracle template.
/// @author Federico Luzzi - <federico.luzzi@protonmail.com>
contract InitializeTest is BaseTestSetup {
    function testZeroAddressKpiToken() external {
        DefiLlamaOracle oracleInstance = DefiLlamaOracle(ClonesUpgradeable.clone(address(defiLlamaOracleTemplate)));
        Template memory _template = oraclesManager.template(1);
        vm.expectRevert(abi.encodeWithSignature("ZeroAddressKPIToken()"));
        vm.prank(address(oraclesManager));
        oracleInstance.initialize(
            InitializeOracleParams({
                creator: address(this),
                kpiToken: address(0),
                templateId: _template.id,
                templateVersion: _template.version,
                data: abi.encode(uint256(1))
            })
        );
    }

    function testInvalidConstraint() external {
        DefiLlamaOracle oracleInstance = DefiLlamaOracle(ClonesUpgradeable.clone(address(defiLlamaOracleTemplate)));
        Template memory _template = oraclesManager.template(1);
        vm.expectRevert();
        vm.prank(address(oraclesManager));
        oracleInstance.initialize(
            InitializeOracleParams({
                creator: address(this),
                kpiToken: address(1),
                templateId: _template.id,
                templateVersion: _template.version,
                data: abi.encode("fake-spec", block.timestamp + 60, 2_000, 10, 0)
            })
        );
    }

    function initializeWithConstraintAndExpectRevertWithData(
        Constraint _constraint,
        uint256 _value0,
        uint256 _value1,
        bytes memory _expectedRevertData
    ) internal {
        DefiLlamaOracle oracleInstance = DefiLlamaOracle(ClonesUpgradeable.clone(address(defiLlamaOracleTemplate)));
        vm.expectRevert(_expectedRevertData);
        vm.prank(address(oraclesManager));
        oracleInstance.initialize(
            InitializeOracleParams({
                creator: address(this),
                kpiToken: address(1),
                templateId: 1,
                templateVersion: 1,
                data: abi.encode("fake-spec", block.timestamp + 60, _constraint, _value0, _value1)
            })
        );
    }

    function testInvalidConstraintValues() external {
        // value0 is the invalid answer
        initializeWithConstraintAndExpectRevertWithData(
            Constraint.Between, INVALID_ANSWER, 0, abi.encodeWithSignature("InvalidValues()")
        );

        // value1 is the invalid answer
        initializeWithConstraintAndExpectRevertWithData(
            Constraint.Between, 0, INVALID_ANSWER, abi.encodeWithSignature("InvalidValues()")
        );

        // both values are the invalid answer
        initializeWithConstraintAndExpectRevertWithData(
            Constraint.Between, 0, INVALID_ANSWER, abi.encodeWithSignature("InvalidValues()")
        );
    }

    function testRangedConstraintsInvalidValues() external {
        initializeWithConstraintAndExpectRevertWithData(
            Constraint.Between, 1, 0, abi.encodeWithSignature("InvalidRangeBounds()")
        );
        initializeWithConstraintAndExpectRevertWithData(
            Constraint.Between, 0, 0, abi.encodeWithSignature("InvalidRangeBounds()")
        );

        initializeWithConstraintAndExpectRevertWithData(
            Constraint.NotBetween, 10, 4, abi.encodeWithSignature("InvalidRangeBounds()")
        );
        initializeWithConstraintAndExpectRevertWithData(
            Constraint.NotBetween, 10, 10, abi.encodeWithSignature("InvalidRangeBounds()")
        );

        initializeWithConstraintAndExpectRevertWithData(
            Constraint.Range, 1_000_000, 254_718, abi.encodeWithSignature("InvalidRangeBounds()")
        );
        initializeWithConstraintAndExpectRevertWithData(
            Constraint.Range, 18_881, 18_881, abi.encodeWithSignature("InvalidRangeBounds()")
        );
    }

    function testGreaterThanConstraintInvalidValues() external {
        initializeWithConstraintAndExpectRevertWithData(
            Constraint.GreaterThan,
            INVALID_ANSWER - 1,
            0,
            abi.encodeWithSignature("InvalidGreaterThanConstraintValue()")
        );
    }

    function testLowerThanConstraintInvalidValues() external {
        initializeWithConstraintAndExpectRevertWithData(
            Constraint.LowerThan, 0, 0, abi.encodeWithSignature("InvalidLowerThanConstraintValue()")
        );
    }

    function initializeOracleAndAssert(
        string memory _specification,
        uint256 _measurementTimestamp,
        Constraint _constraint,
        uint256 _value0,
        uint256 _value1,
        bytes memory _expectedRevertData
    ) internal {
        DefiLlamaOracle oracleInstance = DefiLlamaOracle(ClonesUpgradeable.clone(address(defiLlamaOracleTemplate)));
        Template memory _template = oraclesManager.template(1);
        address kpiToken = address(1);
        vm.mockCall(kpiToken, abi.encodeWithSignature("expiration()"), abi.encode(2 ** 128));
        if (_expectedRevertData.length > 0) vm.expectRevert(_expectedRevertData);
        vm.prank(address(oraclesManager));
        oracleInstance.initialize(
            InitializeOracleParams({
                creator: address(this),
                kpiToken: kpiToken,
                templateId: _template.id,
                templateVersion: _template.version,
                data: abi.encode(_specification, _measurementTimestamp, _constraint, _value0, _value1)
            })
        );
        if (_expectedRevertData.length > 0) return;

        assertFalse(oracleInstance.finalized());

        Template memory _onChainTemplate = oracleInstance.template();
        assertEq(_onChainTemplate.id, _template.id);
        assertEq(_onChainTemplate.version, _template.version);
        assertEq(_onChainTemplate.addrezz, _template.addrezz);
        assertEq(_onChainTemplate.specification, _template.specification);

        assertOracleData(oracleInstance, _specification, _measurementTimestamp, _constraint, _value0, _value1);

        vm.clearMockedCalls();
    }

    function assertOracleData(
        DefiLlamaOracle _oracleInstance,
        string memory _specification,
        uint256 _measurementTimestamp,
        Constraint _constraint,
        uint256 _value0,
        uint256 _value1
    ) internal {
        (
            address _onChainAnswerer,
            Constraint _onChainConstraint,
            uint256 _onChainValue0,
            uint256 _onChainValue1,
            string memory _onChainSpecification,
            uint256 _onChainMeasurementTimestamp,
            uint256 _onChainResult
        ) = abi.decode(_oracleInstance.data(), (address, Constraint, uint256, uint256, string, uint256, uint256));
        assertEq(_onChainAnswerer, ANSWERER);
        assertEq(uint256(_onChainConstraint), uint256(_constraint));
        assertEq(_onChainValue0, _value0);
        assertEq(_onChainValue1, _value1);
        assertEq(_onChainSpecification, _specification);
        assertEq(_onChainMeasurementTimestamp, _measurementTimestamp);
        assertEq(_onChainResult, 0);
    }

    function testNoSpecification() external {
        initializeOracleAndAssert(
            "", block.timestamp + 60, Constraint.Equal, 10, 0, abi.encodeWithSignature("InvalidSpecification()")
        );
    }

    function testMeasurementTimestampTooClose() external {
        initializeOracleAndAssert(
            "fake-spec",
            block.timestamp + 2,
            Constraint.Equal,
            10,
            0,
            abi.encodeWithSignature("MeasurementTimestampTooClose()")
        );
    }

    function testMeasurementTimestampAfterKPITokenExpiration() external {
        // the kpi token expiration is set to be 2 ** 128 in the mocked call in the initializeOracleAndAssert function
        initializeOracleAndAssert(
            "fake-spec",
            2 ** 128 + 1,
            Constraint.Equal,
            10,
            0,
            abi.encodeWithSignature("MeasurementTimestampAfterKPITokenExpiration()")
        );
    }

    function testSuccessByConstraint() external {
        initializeOracleAndAssert("fake-spec", block.timestamp + 60, Constraint.Equal, 10, 0, bytes(""));
        initializeOracleAndAssert("fake-spec", block.timestamp + 70, Constraint.NotEqual, 10, 0, bytes(""));
        initializeOracleAndAssert("fake-spec", block.timestamp + 80, Constraint.GreaterThan, 20, 0, bytes(""));
        initializeOracleAndAssert("fake-spec", block.timestamp + 100, Constraint.LowerThan, 16, 0, bytes(""));
        initializeOracleAndAssert("fake-spec", block.timestamp + 100, Constraint.Between, 16, 19, bytes(""));
        initializeOracleAndAssert("fake-spec", block.timestamp + 100, Constraint.NotBetween, 20, 22, bytes(""));
        initializeOracleAndAssert("fake-spec", block.timestamp + 120, Constraint.Range, 90, 126, bytes(""));
    }
}
