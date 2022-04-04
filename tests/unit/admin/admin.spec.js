import { mount } from "@vue/test-utils";
import HomeAdminLayout from "@/views/HomeAdminLayout";
import router from "@/router";
import AdminSubjectCard from "@/components/AdminSubjectCard";
import store from "@/store";

describe("Test router-links", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(HomeAdminLayout, {
      global: {
        plugins: [store, router],
      },
    });
  });

  test("Router link 'Opprett fag' renders", () => {
    const message = "Opprett fag";
    const routerLink = wrapper.get("#addSubject");

    expect(routerLink.exists()).toBe(true);
    expect(routerLink.text()).toEqual(message);
  });

  test("Router link 'Se fag' renders", () => {
    const message = "Se fag";
    const routerLink = wrapper.get("#showSubjects");

    expect(routerLink.exists()).toBe(true);
    expect(routerLink.text()).toEqual(message);
  });
});

describe("Admin Subjectcard renders", () => {
  test("Admin Subjectcard renders when it should", () => {
    const wrapper = mount(AdminSubjectCard, {
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
    const subjectCard = wrapper.find(".subjectCardContainer");

    expect(subjectCard.exists()).toBe(true);
  });
});
