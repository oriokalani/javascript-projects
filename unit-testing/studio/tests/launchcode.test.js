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
  test("check programs", () => {
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });
});