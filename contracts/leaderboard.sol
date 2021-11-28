// SPDX-License-Identier: MIT
pragma solidity 0.6.0;

/// @title A backend scoreboard management contract associated with a JS snake game.
/// @author Evan Feng
/// @notice This is NOT intended to be a fully articulated game, but rather a proof of concept for the ConsenSys course.
/// @dev  Please keep in mind when testing locally to allow for extra time for the transaction-based functions to execute before calls occur. It should take ~10-15 seconds to run truffle test.

contract Leaderboard {
  /// @notice This contract will have native getter and an AddScore function.
  /// @dev The person who deploys contract is the owner, though we allow anyone to update the contract (so it's not permissioned).
  address owner;

  /// @dev This chooses to limit the list to the below # of valid names. This is an arbitrary number but I wanted something where there's room for competition (space is scarce), but also not too limiting.
  uint leaderboardLength = 16;

  /// @dev Creates an array of Users. Note that because of the way mapping works in ETH, there is not a limit to the leaderboard object itself (which we use as part of a unit test as well)
  mapping (uint => User) public leaderboard;
    
  /// @dev Each user has a username and score
  struct User {
    string user;
    uint score;
  }

  /// @dev For purposes of seeding the scoreboard, I've set up the constructor function here to set an initial scoreboard with some famous cryptonative names.
  constructor() public{
    owner = msg.sender;
    leaderboard[0] = User("Satoshi", 100);
    leaderboard[1] = User("Buterin", 50);
    leaderboard[2] = User("Craig S. Wright", 1);
    
  }


  /// @dev This is the most important function, which the user calls to update leaderboard with whatever their current high score (a local variable in the JS frontend) is. 
  function addScore(string memory user, uint score) public returns (bool) {
    /// @dev If the score is too low, don't update
    if (leaderboard[leaderboardLength-1].score >= score) return false;

    /// @dev Loop through the leaderboard
    for (uint i=0; i<leaderboardLength; i++) {
      /// @dev Find where to insert the new score
      if (leaderboard[i].score < score) {

        /// @dev Shift leaderboard
        User memory currentUser = leaderboard[i];
        for (uint j=i+1; j<leaderboardLength+1; j++) {
          User memory nextUser = leaderboard[j];
          leaderboard[j] = currentUser;
          currentUser = nextUser;
        }

        /// @dev insert new score
        leaderboard[i] = User({
          user: user,
          score: score
        });

        /// @dev Delete last score from the list
        delete leaderboard[leaderboardLength];

        return true;
        
      }
    }
  }
}