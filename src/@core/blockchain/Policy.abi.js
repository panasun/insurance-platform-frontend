export const PolicyAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "policyId",
        "type": "uint64"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "claim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "exchange",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "policyId",
        "type": "uint64"
      }
    ],
    "name": "getPolicyCoverageTokenId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "policyId",
        "type": "uint64"
      }
    ],
    "name": "getPolicyMultiplier",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "policyId",
        "type": "uint64"
      }
    ],
    "name": "getPolicyPremiumTokenId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "policyId",
        "type": "uint64"
      }
    ],
    "name": "getPolicySettlementToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_exchange",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_policyToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_underwrite",
        "type": "address"
      }
    ],
    "name": "init",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isInit",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "policyId",
        "type": "uint64"
      },
      {
        "internalType": "address[]",
        "name": "buyers",
        "type": "address[]"
      },
      {
        "internalType": "address[]",
        "name": "sellers",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "buyersAmount",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "sellersAmount",
        "type": "uint256[]"
      },
      {
        "internalType": "uint8",
        "name": "totalBuyer",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "totalSeller",
        "type": "uint8"
      }
    ],
    "name": "issueOpenInterest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "underwriteId",
        "type": "uint64"
      },
      {
        "internalType": "uint256",
        "name": "expiryTimestamp",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "settlementToken",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "policyURI",
        "type": "string"
      },
      {
        "internalType": "uint32",
        "name": "multiplier",
        "type": "uint32"
      }
    ],
    "name": "issuePolicy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC1155BatchReceived",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC1155Received",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "name": "policies",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "underwriteId",
        "type": "uint64"
      },
      {
        "internalType": "uint256",
        "name": "issueTimestamp",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "expiryTimestamp",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "settlementToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "premiumTokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "coverageTokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "openInterest",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "policyURI",
        "type": "string"
      },
      {
        "internalType": "uint32",
        "name": "multiplier",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "policyToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalPolicy",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "underwrite",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "policyId",
        "type": "uint64"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
