import axios from "axios";
import { doLoginWithToken } from "../../src/service/apiservice";

//Initializing jest to mock api calls
jest.mock("axios");

describe("testing mocking of apiutil.vue", () => {
  it("check that login is successful - against mock", async () => {
    // mock api response on POST call (once)
    const expectedLoginRespone = { loginStatus: "Success" };
    axios.post.mockImplementation(() =>
      Promise.resolve({ data: expectedLoginRespone })
    );

    // do the call
    const loginRequest = { username: "user1", password: "pass1" };
    const loginResponse = await doLoginWithToken(loginRequest);

    //  check response
    //  note that even if wrong username and password are used, mock is configured to return Success
    expect(loginResponse).toEqual(expectedLoginRespone);
  });
});
