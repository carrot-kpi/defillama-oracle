import { createRequire } from "module";
import { fileURLToPath } from "url";
import { getContract, parseUnits } from "viem";

const require = createRequire(fileURLToPath(import.meta.url));

export const setupFork = async ({ nodeClient, walletClient }) => {
    // deploy template
    const {
        abi: templateAbi,
        bytecode: { object: templateBytecode },
    } = require(`../out/DefiLlamaOracle.sol/DefiLlamaOracle.json`);

    const { contractAddress: templateAddress } =
        await nodeClient.getTransactionReceipt({
            hash: await walletClient.deployContract({
                abi: templateAbi,
                bytecode: templateBytecode,
                args: [walletClient.account?.address, 30, 30],
            }),
        });

    // FIXME: This ONLY works because the ERC20 KPI token template manually adds the tokens on the default token list when running in dev mode.
    // It relies on a dev-only logic present in another template.

    // deploy test erc20 tokens
    const {
        abi: erc20Abi,
        bytecode: { object: erc20Bytecode },
    } = require("../out/ERC20PresetMinterPauser.sol/ERC20PresetMinterPauser.json");
    const { contractAddress: tst1Address } =
        await nodeClient.getTransactionReceipt({
            hash: await walletClient.deployContract({
                abi: erc20Abi,
                bytecode: erc20Bytecode,
                args: ["Test token 1", "TST1"],
            }),
        });
    const tst1Contract = getContract({
        abi: erc20Abi,
        address: tst1Address,
        publicClient: nodeClient,
        walletClient: walletClient,
    });

    const { contractAddress: tst2Address } =
        await nodeClient.getTransactionReceipt({
            hash: await walletClient.deployContract({
                abi: erc20Abi,
                bytecode: erc20Bytecode,
                args: ["Test token 2", "TST2"],
            }),
        });
    const tst2Contract = getContract({
        abi: erc20Abi,
        address: tst2Address,
        publicClient: nodeClient,
        walletClient: walletClient,
    });

    // mint some test erc20 tokens to signer
    await tst1Contract.write.mint([
        walletClient.account.address,
        parseUnits("100", 18),
    ]);
    await tst2Contract.write.mint([
        walletClient.account.address,
        parseUnits("100", 18),
    ]);

    return {
        templateAddress,
        customContracts: [
            {
                name: "ERC20 1",
                address: tst1Address,
            },
            {
                name: "ERC20 2",
                address: tst2Address,
            },
        ],
        frontendGlobals: {
            CCT_ERC20_1_ADDRESS: tst1Address,
            CCT_ERC20_2_ADDRESS: tst2Address,
        },
    };
};
