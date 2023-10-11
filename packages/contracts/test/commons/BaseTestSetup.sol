pragma solidity 0.8.19;

import {Test} from "forge-std/Test.sol";
import {KPITokensManager1} from "carrot/kpi-tokens-managers/KPITokensManager1.sol";
import {DefiLlamaOracle} from "src/DefiLlamaOracle.sol";
import {MockKPIToken} from "test/mocks/MockKPIToken.sol";
import {OraclesManager1} from "carrot/oracles-managers/OraclesManager1.sol";
import {KPITokensFactory} from "carrot/KPITokensFactory.sol";

/// SPDX-License-Identifier: GPL-3.0-or-later
/// @title Base test setup
/// @dev Test hook to set up a base test environment for each test.
/// @author Federico Luzzi - <federico.luzzi@protonmail.com>
abstract contract BaseTestSetup is Test {
    string internal constant TRUSTED_ORACLE_SPECIFICATION = "foo";
    address internal constant ANSWERER = address(1000000001);
    uint256 internal constant MINIMUM_ELAPSED_TIME = 30;
    uint256 internal constant EXPIRATION_BUFFER_TIME = 30;

    address internal feeReceiver;
    KPITokensFactory internal factory;
    KPITokensManager1 internal kpiTokensManager;
    DefiLlamaOracle internal defiLlamaOracleTemplate;
    MockKPIToken internal mockKPIToken;
    OraclesManager1 internal oraclesManager;

    function setUp() external {
        feeReceiver = address(400);
        factory = new KPITokensFactory(address(1), address(1), feeReceiver);

        mockKPIToken = new MockKPIToken();
        kpiTokensManager = new KPITokensManager1(address(factory));
        kpiTokensManager.addTemplate(address(mockKPIToken), "test-specification");

        defiLlamaOracleTemplate = new DefiLlamaOracle(ANSWERER, MINIMUM_ELAPSED_TIME, EXPIRATION_BUFFER_TIME);
        oraclesManager = new OraclesManager1(address(factory));
        oraclesManager.addTemplate(address(defiLlamaOracleTemplate), TRUSTED_ORACLE_SPECIFICATION);

        factory.setKpiTokensManager(address(kpiTokensManager));
        factory.setOraclesManager(address(oraclesManager));
    }
}
