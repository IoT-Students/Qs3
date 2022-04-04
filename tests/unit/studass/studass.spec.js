import { shallowMount } from "@vue/test-utils";
import QueueList from "@/components/queue/QueueList";
import { createStore } from "vuex";

describe("QueueList renders correctly", () => {
  test("Empty queue renders message", () => {
    const store = createStore({
      state() {
        return {
          userInfo: {
            role: "Studass",
          },
          subjectQueues: [],
        };
      },
    });

    const wrapper = shallowMount(QueueList, {
      props: {
        user: {
          position: 1,
          assignment: 5,
          name: "Hans",
          status: false,
        },
      },
      global: {
        plugins: [store],
      },
    });

    const expectedMessage = "Køen er tom!";
    const emptyQueueMessage = wrapper.find("#emptyQueue");

    expect(emptyQueueMessage.exists()).toBe(true);
    expect(emptyQueueMessage.text()).toEqual(expectedMessage);
  });

  test("Empty message does not render", () => {
    const store = createStore({
      state() {
        return {
          userInfo: {
            role: "Studass",
          },
          subjectQueues: [1, 2],
        };
      },
    });
    const wrapper = shallowMount(QueueList, {
      props: {
        user: {
          position: 1,
          assignment: 5,
          name: "Hans",
          status: false,
        },
      },
      global: {
        plugins: [store],
      },
    });

    const emptyQueueMessage = wrapper.find("#emptyQueue");

    expect(emptyQueueMessage.exists()).toBe(false);
  });
});
