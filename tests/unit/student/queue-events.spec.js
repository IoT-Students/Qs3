import SubjectQueueForm from "@/views/SubjectQueueForm";
import HomeLayout from "@/views/HomeLayout";
import { mount, shallowMount } from "@vue/test-utils";
import router from "@/router";
import SubjectCard from "@/components/SubjectCard";

describe("Testing subjectqueueform", () => {
  test("Form is rendered", () => {
    const $store = {
      state: {
        assignments: [1, 2],
      },
    };
    const wrapper = mount(SubjectQueueForm, {
      global: {
        mocks: {
          $store,
        },
      },
    });

    const form = wrapper.find(".form-container");

    expect(form.exists()).toBe(true);
  });

  test("Form is not submitted correctly", () => {
    const $store = {
      state: {
        assignments: [1, 2],
      },
    };
    const wrapper = mount(SubjectQueueForm, {
      global: {
        mocks: {
          $store,
        },
      },
    });

    wrapper.trigger("submit");
    const submittedFormCalls = wrapper.emitted("formSubmitted");
    expect(submittedFormCalls).toBeUndefined();
  });
});

describe("HomeLayout renders correct components", function () {
  test("Message 'I kø' renders when in queue", () => {
    const $store = {
      state: {
        userInQueue: true,
        subjects: [Object, Object],
      },
    };
    const wrapper = shallowMount(HomeLayout, {
      global: {
        mocks: {
          $store,
        },
        plugins: [router],
      },
    });

    const inQueueMessage = wrapper.find(".inQueue");
    expect(inQueueMessage.exists()).toBe(true);
  });

  test("Message 'I kø' does not render when user not in queue", () => {
    const $store = {
      state: {
        userInQueue: false,
        subjects: [Object, Object],
      },
    };
    const wrapper = shallowMount(HomeLayout, {
      global: {
        mocks: {
          $store,
        },
        plugins: [router],
      },
    });

    const inQueueMessage = wrapper.find(".inQueue");
    expect(inQueueMessage.exists()).toBe(false);
  });
});

describe("Emitting events", () => {
  test("Emitting events works as expected", () => {
    const wrapper = shallowMount(SubjectCard, {
      props: {
        subject: {
          assignmentAmount: 7,
          queueSize: 0,
          requiredAssignments: 6,
          subjectCode: "IDATT2105",
          subjectId: 42,
          subjectName: "Fullstack",
        },
      },
    });

    wrapper.vm.goToQueue();
    console.log(wrapper.emitted());
    const submittedEvent = wrapper.emitted("go-to-queue");
    const payload = 42;

    expect(submittedEvent).toHaveLength(1);
    expect(wrapper.emitted("go-to-queue")[0][0]).toStrictEqual(payload);
  });
});
