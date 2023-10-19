pragma solidity 0.8.21;

import {BaseTestSetup} from "./commons/BaseTestSetup.sol";
import {DefiLlamaOracle} from "../src/DefiLlamaOracle.sol";
import {Template} from "carrot/interfaces/IBaseTemplatesManager.sol";
import {InitializeOracleParams} from "carrot/commons/Types.sol";
import {Constraint} from "carrot/presets/oracles/ConstrainedOracle.sol";
import {INVALID_ANSWER} from "carrot/commons/Constants.sol";

/// SPDX-License-Identifier: GPL-3.0-or-later
/// @title DefiLlama oracle instantiation test
/// @dev Tests the instantiation of the DefiLlama oracle template.
/// @author Federico Luzzi - <federico.luzzi@carrot-labs.xyz>
contract InitializeTest is BaseTestSetup {
    function instantiateKPITokenOracle(
        address _answerer,
        uint256 _minimumElapsedTimestamp,
        uint256 _expirationBufferTime
    ) internal returns (DefiLlamaOracle) {
        return new DefiLlamaOracle(
                _answerer,
                _minimumElapsedTimestamp,
                _expirationBufferTime
            );
    }

    function testZeroAddressAnswerer() external {
        vm.expectRevert(abi.encodeWithSignature("ZeroAddressAnswerer()"));
        instantiateKPITokenOracle(address(0), 1, 1);
    }

    function testInvalidMinimumElapsedTime() external {
        vm.expectRevert(abi.encodeWithSignature("InvalidMinimumElapsedTime()"));
        instantiateKPITokenOracle(address(1), 0, 1);
    }

    function testInvalidExpirationBufferTime() external {
        vm.expectRevert(abi.encodeWithSignature("InvalidExpirationBufferTime()"));
        instantiateKPITokenOracle(address(1), 1, 0);
    }

    function testSuccess() external {
        instantiateKPITokenOracle(address(1), 1, 1);
    }
}
