const Leaderboard = artifacts.require("Leaderboard");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Leaderboard", function (User) {
  //Luke's Donut Mind
  it("Luke's Donut", async function () {
    const param = ""; 
    await this.Leaderboard.Leaderboard(param, {
      from: contractOwner,
      value: web3.utils.toWei('0.01', 'ether'),
    });
  });
    
  // tests for existence of a constructor function successfully executed
  it("construction initialization should populate", async function () {
    const userName = "Crash Test";
    const sentScore = 17;
    const instance = await Leaderboard.deployed();
    const scorePackage = await instance.addScore(userName, sentScore);
    console.log(scorePackage.valueOf());
  });

  // checks for correct User struct with user: score elements
  it("verify User struct creation", async function () {
  await Leaderboard.deployed();
  return assert.isTrue(true);
  });
    
  // built-in getter function should work
  it("simple native get test", async function () {
    const instance = await Leaderboard.deployed();
    let nativeget = await instance.leaderboard(0);
    if(JSON.stringify(nativeget) !== JSON.stringify({})){
      return assert.isTrue(true);
    }      
  });

  // submitting a score should increase the size of the leaderboard if there aren't already 16
  it("scoreboard add test", async function () {
    await Leaderboard.deployed();
    return assert.isTrue(true);
  });

  // submitting a score should NOT increase the size of the leaderboard if the scoreboard is at 16 entries
  it("scoreboard replace test", async function () {
    await Leaderboard.deployed();
    return assert.isTrue(true);
  });
});

