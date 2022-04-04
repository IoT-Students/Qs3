import { shallowMount } from "@vue/test-utils";
import store from "@/store";
import router from "@/router";
import LoginComponent from "../../../src/components/LoginComponent";

describe("LoginComponent.vue", () => {
  it("check that LoginComponent renders", () => {
    const wrapper = shallowMount(LoginComponent, {
      global: {
        plugins: [store, router],
      },
    });
    expect(wrapper.exists()).toBeTruthy();
  });
    it("page title is rendered with the correct text", () => {
      const wrapper = shallowMount(LoginComponent, {
        global: {
          plugins: [store, router],
        },
      });
      const title = wrapper.find("#loginTitle");
      expect(title.exists()).toBeTruthy();
      expect(title.text()).toContain("Velkommen");
    });
  it("data is being modified correctly", async () => {
    const wrapper = shallowMount(LoginComponent, {
      global: {
        plugins: [store, router],
      },
    });
    // get loginstatusLabel element
    const statusId = wrapper.find("#loginstatusLabel");
    // change loginStatus data and check that loginstatusLabel element is updated accordingly
    await wrapper.setData({
      userInfo: {
        loginStatus: "Success",
      },
    });
    expect(statusId.element.textContent).toBe("Success");
    await wrapper.setData({
      userInfo: {
        loginStatus: "Failed",
      },
    });
    expect(statusId.element.textContent).toBe("Failed");
  });
});
