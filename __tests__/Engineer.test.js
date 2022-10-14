const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "nick";
    const employeeInstance = new Engineer("nick", 2, "nick@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "nick";
    const employeeInstance = new Engineer("nick", 2, "nick@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("nick", 2, "nick@gmail.com", "nick");
    expect(employeeInstance.getRole()).toBe(returnValue);
});