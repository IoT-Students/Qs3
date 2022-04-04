const {doLoginWithToken} = require("../../../src/service/apiservice");


describe("testing apiservice.js", () => {
  it("test API call utility function - login Success", async () => {
    const loginRequest = { username: "simen2312", password: "simen2312" };
    const loginResponse = await doLoginWithToken(loginRequest);
    const expectedLoginRespone = {
        email: "simenk2312@gmail.com",
        jwtoken: loginResponse.jwtoken,
        loginStatus: "Success",
        name: "Simen",
        role: "Student",
        userID: 1,
    };
    expect(loginResponse).toEqual(expectedLoginRespone);
  });
    it("test API call utility function - login Fail", async () => {
      const loginRequest = { username: "userx", password: "passx" };
      const loginResponse = await doLoginWithToken(loginRequest);
      const expectedLoginRespone = { jwtoken:"Access denied, wrong credentials...." ,loginStatus: "Fail", userID: 0 };
      expect(loginResponse).toEqual(expectedLoginRespone);
    });
});
