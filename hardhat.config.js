require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, SEPOLIA_RPC } = process.env;

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: { optimizer: { enabled: true, runs: 200 } },
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: SEPOLIA_RPC || "https://rpc.ankr.com/eth_sepolia",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
};
