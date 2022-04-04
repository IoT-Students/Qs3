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
});
