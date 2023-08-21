import { execSync } from "child_process";

execSync("forge install foundry-rs/forge-std --no-commit");
execSync("forge install carrot=carrot-kpi/contracts --no-commit");
execSync("forge install openzeppelin-contracts-upgradeable=OpenZeppelin/openzeppelin-contracts-upgradeable --no-commit");
execSync("forge install openzeppelin-contracts=OpenZeppelin/openzeppelin-contracts --no-commit");
execSync("forge install carrot-trusted-oracle=carrot-kpi/trusted-oracle-contract --no-commit");

console.log("Foundry dependencies installed");
