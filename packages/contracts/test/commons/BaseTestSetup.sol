pragma solidity 0.8.21;

import {Test} from "forge-std/Test.sol";
import {KPITokensManager} from "carrot/KPITokensManager.sol";
import {DefiLlamaOracle} from "src/DefiLlamaOracle.sol";
import {MockKPIToken} from "test/mocks/MockKPIToken.sol";
import {OraclesManager} from "carrot/OraclesManager.sol";
import {KPITokensFactory} from "carrot/KPITokensFactory.sol";
import {ERC1967Proxy} from "oz/proxy/ERC1967/ERC1967Proxy.sol";
import {BaseTemplatesManager} from "carrot/BaseTemplatesManager.sol";

/// SPDX-License-Identifier: GPL-3.0-or-later
/// @title Base test setup
/// @dev Test hook to set up a base test environment for each test.
/// @author Federico Luzzi - <federico.luzzi@carrot-labs.xyz>
abstract contract BaseTestSetup is Test {
    string internal constant TRUSTED_ORACLE_SPECIFICATION = "foo";
    address internal constant ANSWERER = address(1000000001);
    uint256 internal constant MINIMUM_ELAPSED_TIME = 30;
    uint256 internal constant EXPIRATION_BUFFER_TIME = 30;

    address internal owner;
    address internal feeReceiver;
    KPITokensFactory internal factory;
    KPITokensManager internal kpiTokensManager;
    DefiLlamaOracle internal defiLlamaOracleTemplate;
    MockKPIToken internal mockKPIToken;
    OraclesManager internal oraclesManager;

    function setUp() external {
        feeReceiver = address(400);
        owner = address(this);
        factory = initializeKPITokensFactory(address(1), address(1), feeReceiver);
        factory.setPermissionless(true);

        mockKPIToken = new MockKPIToken();
        kpiTokensManager = initializeKPITokensManager(address(factory));
        kpiTokensManager.addTemplate(address(mockKPIToken), "test-specification");

        defiLlamaOracleTemplate = new DefiLlamaOracle(ANSWERER, MINIMUM_ELAPSED_TIME, EXPIRATION_BUFFER_TIME);
        oraclesManager = initializeOraclesManager(address(factory));
        oraclesManager.addTemplate(address(defiLlamaOracleTemplate), TRUSTED_ORACLE_SPECIFICATION);

        factory.setKpiTokensManager(address(kpiTokensManager));
        factory.setOraclesManager(address(oraclesManager));
    }

    function initializeKPITokensFactory(address _kpiTokensManager, address _oraclesManager, address _feeReceiver)
        internal
        returns (KPITokensFactory)
    {
        KPITokensFactory _factory = new KPITokensFactory();
        ERC1967Proxy _proxy =
        new ERC1967Proxy(address(_factory), abi.encodeWithSelector(KPITokensFactory.initialize.selector, owner, _kpiTokensManager, _oraclesManager, _feeReceiver));
        return KPITokensFactory(address(_proxy));
    }

    function initializeOraclesManager(address _factory) internal returns (OraclesManager) {
        OraclesManager _manager = new OraclesManager();
        ERC1967Proxy _proxy =
        new ERC1967Proxy(address(_manager), abi.encodeWithSelector(BaseTemplatesManager.initialize.selector, owner, _factory));
        return OraclesManager(address(_proxy));
    }

    function initializeKPITokensManager(address _factory) internal returns (KPITokensManager) {
        KPITokensManager _manager = new KPITokensManager();
        ERC1967Proxy _proxy =
        new ERC1967Proxy(address(_manager), abi.encodeWithSelector(BaseTemplatesManager.initialize.selector, owner, _factory));
        return KPITokensManager(address(_proxy));
    }
}
