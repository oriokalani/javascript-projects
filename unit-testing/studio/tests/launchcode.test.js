// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("testing launchcode", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("check executive directory", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
});