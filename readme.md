## Deployed Front-End Address ##
https://efengcf.github.io/blockchain-developer-bootcamp-final-project/

## Public NFT address ##
0xa51EFF3178fCC9eA855bDaA6701e9203f2b89b22

## Explain in a very simple way what you'd like your project to do.
A simple in-browser game (format TBD) which generates a reward (event or maybe NFT in the future) on an EVM compatible chain (or ETH testnet) for achievements or rewards. The idea is for a very basic in-metaverse social proof of work/skill to develop with the ability for these rewards to be the basis for additional value in or out of game, similar to how players collect "achievements" today.

## Walk through a single workflow for the future user of your project.
A user will go through the following process:
1. Log into front-end via metamask to access the full game, though the player can actually play without signing in.
2. Play the game, with a rolling counter of the high score achieved during the session as kept in local storage.
3. Whenever desired, the player can check the current leaderboard which formats information stored in the deployed Leaderboard.sol contract, using the native getter function. 
4. When the player wants to upload the global leaderboard, she can click to upload the current high score, resetting the count.
5. This creates a transaction where the player interacts with the deployed Leaderboard.sol smart contract.
6. The contract then runs through internal logic to rank where the new score would fit within the array (of 16), and will update the list for the new score if so, else drop the submitted score.

## Functions Brainstorm / Overview
constructor() public{
    owner = msg.sender;
    leaderboard[0] = User("Satoshi", 100);
    leaderboard[1] = User("Buterin", 50);
    leaderboard[2] = User("Craig S. Wright", 1);
    // this seeds the leaderboard when the contract is first deployed, acting as an aspirational goal for players    
  }

function addScore(string memory user, uint score) public returns (bool) {
    // This is how the JS front end creates a txn for submitting a transaction to the contract, and runs through the logic of where to append the new score using ordering logic, insertions and deletions given it's not possible to easily push to an array in Solidity like other languages.
}
function checkCheater (address _player) {
    // to check whether current address is flagged as a cheater; note in the interest of time I was not able to complete this implementation but of course it's important in the future
}

## Additional functionality for future development
Subresource integrity checks in index for js game files and prevent unauthorized edits / man in the middle attacks.
Internal script logic checks for whether game score is achieved within the possible time a snake is "alive" for, if outside the bounds, hidden flag set which when sending a txn to the scoreboard, deletes the score instead.


## Appendix references
https://mozillacampusclubs.github.io/HTML-5-Game-Development/Game-Development.html
https://www.trufflesuite.com/tutorial
https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/
https://jeancvllr.medium.com/solidity-tutorial-all-about-structs-b3e7ca398b1e
https://dev.to/jacobedawson/send-react-web3-dapp-transactions-via-metamask-2b8ncd
https://livecodestream.dev/post/interacting-with-smart-contracts-from-web-apps/
https://consensys.net/developers/onboarding-step-3/