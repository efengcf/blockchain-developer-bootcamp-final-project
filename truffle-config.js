const HDWalletProvider = require('@truffle/hdwallet-provider');
const dotenv = require('dotenv');
dotenv.config();
const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/5602dc569e764b9f9bc1e97a1ed1bcb4`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
  }
  // // To run contract with the latest compiler, uncomment lines 10-14 below:
  // compilers: { 
  //   solc: {
  //     version: "^0.8",    // Fetch latest 0.8.x Solidity compiler 
  //   }
  // }
};