export default [
    {
        inputs: [
            {
                internalType: "address",
                name: "_answerer",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_minimumElapsedTime",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_expirationBufferTime",
                type: "uint256",
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
        name: "InvalidConstraint",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidExpirationBufferTime",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidGreaterThanConstraintValue",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidLowerThanConstraintValue",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidMinimumElapsedTime",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidRangeBounds",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidSpecification",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidTemplateId",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidTemplateVersion",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidValues",
        type: "error",
    },
    {
        inputs: [],
        name: "MeasurementTimestampAfterKPITokenExpirationMinusBuffer",
        type: "error",
    },
    {
        inputs: [],
        name: "MeasurementTimestampTooClose",
        type: "error",
    },
    {
        inputs: [],
        name: "TooSoonToFinalize",
        type: "error",
    },
    {
        inputs: [],
        name: "ZeroAddressAnswerer",
        type: "error",
    },
    {
        inputs: [],
        name: "ZeroAddressKPIToken",
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
        inputs: [],
        name: "expirationBufferTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
        name: "measurementTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "minimumElapsedTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "result",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
