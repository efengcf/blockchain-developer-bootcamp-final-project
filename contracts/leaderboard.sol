// SPDX-License-Identier: MIT

pragma solidity 0.6.0;

contract Leaderboard {

  // person who deploys contract is the owner
  address owner;

  // lists top 16 users
  uint leaderboardLength = 16;

  // create an array of Users
  mapping (uint => User) public leaderboard;
    
  // each user has a username and score
  struct User {
    string user;
    uint score;
  }

  // constructor function sets initial scoreboard  
  constructor() public{
    owner = msg.sender;
    leaderboard[0] = User("Satoshi", 100);
    leaderboard[1] = User("Buterin", 50);
    leaderboard[2] = User("Craig S. Wright", 1);
    
  }


  // user calls to update leaderboard
  function addScore(string memory user, uint score) public returns (bool) {
    // if the score is too low, don't update
    if (leaderboard[leaderboardLength-1].score >= score) return false;

    // loop through the leaderboard
    for (uint i=0; i<leaderboardLength; i++) {
      // find where to insert the new score
      if (leaderboard[i].score < score) {

        // shift leaderboard
        User memory currentUser = leaderboard[i];
        for (uint j=i+1; j<leaderboardLength+1; j++) {
          User memory nextUser = leaderboard[j];
          leaderboard[j] = currentUser;
          currentUser = nextUser;
        }

        // insert
        leaderboard[i] = User({
          user: user,
          score: score
        });

        // delete last from list
        delete leaderboard[leaderboardLength];

        return true;
        
      }
    }
  }

}