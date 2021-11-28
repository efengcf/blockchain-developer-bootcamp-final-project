## Design Patterns Used ##
## SWC-135 Code With No Effects ##
The brevity of Leaderboard.sol is intentional given the functionality we want to enable is very limited in scope on purpose, namely for a user to get the current scoreboard, and add their own high score for submission to be codified on the blockchain. I do not include extraneous functions (such as anything that has to do with the snake game itself) on-chain.

## SWC-131 Unused Variables ##
There are no unused variables in Leaderboard.sol.
## Upgradeability ##
The design here with a self-contained leaderboard is to not be upgradeable. Future version for addition games and revisions can be ported over and initialized (via constructor function) to map and ensure continuity of data, and the front-end can be reconfigured to point to the new smart contract without requiring it to be engineered to be initially upgradeable.
