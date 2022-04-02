import axios from "axios";
import { doLogin } from "../../src/service/apiservice";
import { shallow } from "enzyme";
import Button from "./Button";

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
    const loginResponse = await doLogin(loginRequest);

    //  check response
    //  note that even if wrong username and password are used, mock is configured to return Success
    expect(loginResponse).toEqual(expectedLoginRespone);
  }),
    it("Check if button can be clicked properly", async () => {
      const mockCallBack = jest.fn();

      const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
      button.find("loginButton").simulate("click");
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});
