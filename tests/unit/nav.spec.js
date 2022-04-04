import App from "@/App";
import { shallowMount } from "@vue/test-utils";
import router from "@/router";
import home from "@/views/Home";

describe("Test navbar rendering with mock $store", () => {
  test("Correct user is displayed", () => {
    const $store = {
      state: {
        userInfo: {
          name: "Hans Hansen",
        },
      },
    };

    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
        mocks: {
          $store,
        },
      },
    });

    const expectedName = "Hans Hansen";
    const nameTitle = wrapper.find("#nameTitle");

    expect(nameTitle.exists()).toBe(true);
    expect(nameTitle.text()).toStrictEqual(expectedName);
  });

  test("Navbar buttons renders", () => {
    const $store = {
      state: {
        userInfo: {
          name: "Hans Hansen",
          role: "Student",
        },
      },
    };

    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
        mocks: {
          $store,
        },
      },
    });

    const homeButton = wrapper.find("[data-testid='studentHome']");
    const logoutButton = wrapper.find("[data-testid='studentLogout']");

    expect(homeButton.exists()).toBe(true);
    expect(logoutButton.exists()).toBe(true);
  });
});
