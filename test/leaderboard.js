const Leaderboard = artifacts.require("Leaderboard");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Leaderboard", function (User) {
  // checks for correct User struct by testing function return is an object
  it("verify User struct object creation", async function () {
    const instance = await Leaderboard.deployed();
    let myStructResult = await instance.leaderboard(0);
      return assert.isTrue(typeof myStructResult ==='object');
  });
    
  // tests for existence of a constructor function successfully executed, 3rd place should be Craig
  it("constructor initialization should populate with 3 names", async function () {
    const instance = await Leaderboard.deployed();
    const thirdplace = await instance.leaderboard(2);
    const thirdtext = JSON.stringify(thirdplace);
    const result = thirdtext.includes('Craig');
      return assert.isTrue(result);
  });


  // built-in getter function should work with any random integer from a distribution
  it("native getter test", async function () {
    const inputvalue = Math.floor(Math.random()*9999);
    const instance = await Leaderboard.deployed();
    const response = await instance.leaderboard(inputvalue);
        return assert.isTrue(typeof response ==='object');
  });

  // submitting a new best score should result in the username being findable from the getter function immediately afterward
  it("scoreboard add test", async function () {
    const userName = "Addition";
    const sentScore = 150;
    const instance = await Leaderboard.deployed();
    const scorePackage = await instance.addScore(userName, sentScore);
    const newfirstplace = await instance.leaderboard(0);
    const newfirsttext = JSON.stringify(newfirstplace);
    const result = newfirsttext.includes(userName);
      return assert.isTrue(result);
  });

  // submitting a new additional score (incremental to the fourth test) should result in the previously third best score being the 4th best.
  it("scoreboard reorder test", async function () {
    const userName = "Second New";
    const sentScore = 99;
    const instance = await Leaderboard.deployed();
    const scorePackage = await instance.addScore(userName, sentScore);
    const fifthplace = await instance.leaderboard(4);
    const fifthtext = JSON.stringify(fifthplace);
    const result = fifthtext.includes('Craig');
      return assert.isTrue(result);
  });
});

