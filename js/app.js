
/* we're loading the web3 libraries here */
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'script.js';
script.src = 'https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js';
script.src = 'https://cdn.ethers.io/lib/ethers-5.2.umd.min.js';
document.head.appendChild(script);

// metamask initialization
async function initWeb3() {
  if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
  }
}


async function loadContract() {
  return await new window.web3.eth.Contract([
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "user",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          }
        ],
        "name": "addScore",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "leaderboard",
        "outputs": [
          {
            "internalType": "string",
            "name": "user",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ], '0x87ecdd7c82b3039e48fa8e463c53969ef187dfb3');
  }

async function showLeaderboard() {
  const firstplace = await window.contract.methods.leaderboard(0).call();
  console.log('This is the result: ', firstplace)
  window.alert(firstplace);
}

async function load() { // livecodestream section
  await initWeb3();
  window.contract = await loadContract();
}

load();

/** loads the actual contract details per json and address
async function loadContract() {
  return await new window.web3.eth.Contract(['src/abi/Leaderboard.json'], contractAddress);
} **/

// getting leaderboard data
