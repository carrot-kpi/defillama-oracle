pragma solidity 0.8.19;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {DefiLlamaOracle} from "../src/DefiLlamaOracle.sol";

/// SPDX-License-Identifier: GPL-3.0-or-later
/// @title Deploy
/// @dev Deploys the template on a target network.
/// @author Federico Luzzi - <federico.luzzi@protonmail.com>
contract Deploy is Script {
    error ZeroAddressAnswerer();

    function run(address _answerer, uint256 _minimumElapsedTime) external {
        if (_answerer == address(0)) revert ZeroAddressAnswerer();

        vm.startBroadcast();

        console2.log("Template deployed at address", address(new DefiLlamaOracle(_answerer, _minimumElapsedTime)));

        vm.stopBroadcast();
    }
}
