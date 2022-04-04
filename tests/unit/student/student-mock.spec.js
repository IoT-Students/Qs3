import AssignmentList from "@/views/AssignmentList";
import { mount } from "@vue/test-utils";
import axios from "axios";
import { getAssignments, getSubjects } from "@/service/apiservice";

jest.mock("axios");

describe("Mock api-calls", () => {
  test("Mock fetching assignments", async () => {
    const $store = {
      state: {
        assignments: [
          {
            assignmentId: -1,
            subjectId: -1,
            assignmentNumber: -1,
            status: false,
          },
        ],
        currentSubjectId: -1,
      },
    };
    mount(AssignmentList, {
      global: {
        mocks: {
          $store,
        },
      },
    });

    const expectedResponse = {
      assignmentId: -1,
      subjectId: -1,
      assignmentNumber: -1,
      status: false,
    };

    axios.get.mockImplementation(() =>
      Promise.resolve({ data: expectedResponse })
    );

    const response = await getAssignments(-1, -1, "token");
    expect(response).toEqual(expectedResponse);
  });

  test("Mock fetching subjects", async () => {
    const expectedResponse = {
      subjectId: -1,
      subjectCode: "TEST1234",
      subjectName: "Testfag",
      assignmentAmount: 5,
      requiredAssignments: 4,
      queueSize: 0,
    };

    axios.get.mockImplementation(() =>
      Promise.resolve({ data: expectedResponse })
    );
    const response = await getSubjects(-1, "token");

    expect(response).toEqual(expectedResponse);
  });
});
