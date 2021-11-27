## Explain in a very simple way what you'd like your project to do.

A simple in-browser game (format TBD) which generates a reward (event or maybe NFT in the future) on an EVM compatible chain (or ETH testnet) for achievements or rewards. The idea is for a very basic in-metaverse social proof of work/skill to develop with the ability for these rewards to be the basis for additional value in or out of game, similar to how players collect "achievements" today.

## Walk through a single workflow for the future user of your project.
A user will go through the following process:
1. Log into front-end via metamask to access the game
2. Play the game, with a rolling counter of the high score achieved during the session
3. Whenever wanted, the player can check the current leaderboard which formats information stored in the leaderboard.sol contract
4. When the player wants to upload the global leaderboard, she can click "Upload High Score"
5. This creates a transaction where the player interacts with the deployed leaderboard function and submits a transaction with a newScore payload
6. The contract then verifies this is a valid submission through internal anti-cheat logic (TBD), and if valid, updates its array of up to 20 addresses

## Functions brainstorm

function isActive (address _player) {
    // registers player via MetaMask
}

function checkCheater (address _player) {
    // to check whether current address is flagged as a cheater
}

function submitScore () {
    // This is how the JS front end creates a txn for submitting a transaction to the contract
}

## Additional functionality for future development
Subresource integrity checks in index for js game files and prevent unauthorized edits / man in the middle attacks.
Internal script logic checks for whether game score is achieved within the possible time a snake is "alive" for, if outside the bounds, hidden flag set which when sending a txn to the scoreboard, deletes the score instead.


## Appendix references
https://mozillacampusclubs.github.io/HTML-5-Game-Development/Game-Development.html
https://www.trufflesuite.com/tutorial
https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/
https://jeancvllr.medium.com/solidity-tutorial-all-about-structs-b3e7ca398b1e