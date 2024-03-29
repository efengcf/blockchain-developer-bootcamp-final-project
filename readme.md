## Deployed Front-End ##
https://efengcf.github.io/blockchain-developer-bootcamp-final-project/
Please note if locally testing the front-end, you'll need to run npx http-server or something similar in terminal to serve the content correctly including integrating with Metamask.

## Directory and application structure: ##
Very straightforward, project front-end interface with web3 is found in index.html, while the game portion that's loaded is in snake.js (there's nothing web3 about that), while you can find Leaderboard.sol in /contracts and leaderboard.js which is where the unit tests are in /test. Other items to flag would be the requirement for the project to be compiled with 0.6.0 as noted elsewhere (as part of the reduction in attack surface). Lastly, please note the truffle tests can take awhile (~10-15 seconds) when run given there are a few transactions that update state and then verify correct processing.

Instructions: I was able to run my unit tests successfully using truffle on both Windows and MacOS machines, and tested the full application locally as well as on the github pages frontend.

## NFT Public Address ##
0xa51EFF3178fCC9eA855bDaA6701e9203f2b89b22
## Loom Video Walkthrough ##
https://www.loom.com/share/16b6f7dcb17d42748ebfc642d1fd50e0

## Explain in a very simple way what you'd like your project to do.
A simple in-browser snake game which allows users to upload their high score to the blockchain for open recordkeeping. The idea is for a very basic in-metaverse social proof of work/skill to develop with the ability for these rewards to be the basis for additional value in or out of game, similar to how players collect "achievements" today, extensible to many games int he future.

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
I thought about implementing more robust security / authentication of players themselves to only allow 1 submission at a time (and prompt for permission to delete another existing score stored in the contract) by tying addresses into the logic, but felt that was hard to incorporating in a way that didn't feel like even more friction which could drive players away.

## Appendix references of some sources used
https://mozillacampusclubs.github.io/HTML-5-Game-Development/Game-Development.html
https://www.trufflesuite.com/tutorial
https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/
https://jeancvllr.medium.com/solidity-tutorial-all-about-structs-b3e7ca398b1e
https://dev.to/jacobedawson/send-react-web3-dapp-transactions-via-metamask-2b8ncd
https://livecodestream.dev/post/interacting-with-smart-contracts-from-web-apps/
https://consensys.net/developers/onboarding-step-3/
https://www.oreilly.com/library/view/hands-on-smart-contract/9781492045250/ch04.html