export default [
    {
        inputs: [
            {
                internalType: "address",
                name: "_answerer",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "Forbidden",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidSpecification",
        type: "error",
    },
    {
        inputs: [],
        name: "ZeroAddressAnswerer",
        type: "error",
    },
    {
        inputs: [],
        name: "ZeroAddressKpiToken",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "result",
                type: "uint256",
            },
        ],
        name: "Finalize",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "kpiToken",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "templateId",
                type: "uint256",
            },
        ],
        name: "Initialize",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        inputs: [],
        name: "answerer",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "data",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_result",
                type: "uint256",
            },
        ],
        name: "finalize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "finalized",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "creator",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "kpiToken",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "templateId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint128",
                        name: "templateVersion",
                        type: "uint128",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct InitializeOracleParams",
                name: "_params",
                type: "tuple",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "kpiToken",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "specification",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "template",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "addrezz",
                        type: "address",
                    },
                    {
                        internalType: "uint128",
                        name: "version",
                        type: "uint128",
                    },
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "specification",
                        type: "string",
                    },
                ],
                internalType: "struct Template",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
] as const;
