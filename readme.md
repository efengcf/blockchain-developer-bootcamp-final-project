## Explain in a very simple way what you'd like your project to do.

A simple in-browser game (format TBD) which generates a reward (event or maybe NFT in the future) on an EVM compatible chain (or ETH testnet) for achievements or rewards. The idea is for a very basic in-metaverse social proof of work/skill to develop with the ability for these rewards to be the basis for additional value in or out of game, similar to how players collect "achievements" today.

## Walk through a single workflow for the future user of your project.
A user will go through the following process:
1. Log into front-end via metamask to access, but have the option just to play for reward or not
2. Play the game and try to beat a high score / time requirement
3. If they fail before the final level, the user does NOT earn the NFT
4. If they complete the final level, the user earns an NFT, but only if the address that's authenticated has not earned it before (1x only)
5. Ideas for managing minting costs: ETH L2 (Arbitrum, Optimism, sidechains like Polygon), deferred minting costs etc. Though the implementation for this project will be on ETH testnet

## Functions brainstorm

function register (address _player) {
    // registers player via MetaMask after opting into playing for NFTs;
}

modifier earnable () {
    // checks whether player is eligble to earn an award

function checkPastWinner (address _player) {
    // to check whether current player is a past winner explicitly
}

function gameComplete () {
    // listens for the frontend to tell smart contract a game has completed and checks logic if whether reward is earned
}

function rewardPlayer () {
    // emits an event and other appropriate responses to a player successfully completing the game
    
}

## Appendix references
https://mozillacampusclubs.github.io/HTML-5-Game-Development/Game-Development.html


