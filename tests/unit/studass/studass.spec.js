import { mount, shallowMount } from "@vue/test-utils";
import QueueList from "@/components/queue/QueueList";
import QueueCardDetails from "@/components/queue/QueueCardDetails";

describe("QueueList renders correctly", () => {
  test("Empty queue renders message", () => {
    const $store = {
      state: {
        userInfo: {
          role: "Studass",
        },
        subjectQueues: [],
      },
    };
    const wrapper = shallowMount(QueueList, {
      global: {
        mocks: {
          $store,
        },
      },
    });

    const expectedMessage = "Køen er tom!";
    const emptyQueueMessage = wrapper.find("#emptyQueue");

    expect(emptyQueueMessage.exists()).toBe(true);
    expect(emptyQueueMessage.text()).toEqual(expectedMessage);
  });

  test("Empty message does not render", () => {
    const $store = {
      state: {
        userInfo: {
          role: "Studass",
        },
        subjectQueues: [1, 2],
      },
    };
    const wrapper = mount(QueueList, {
      global: {
        mocks: {
          $store,
        },
      },
    });

    const emptyQueueMessage = wrapper.find("#emptyQueue");

    console.log(wrapper.vm.isEmpty);
    expect(emptyQueueMessage.exists()).toBe(false);
  });
});
