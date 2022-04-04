import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SubjectQueueForm from "../views/SubjectQueueForm";
import Login from "../views/Login";
import StudentView from "@/components/home/StudentView";
import StudAssView from "@/components/home/StudAssView";
import Queue from "@/views/Queue";
import QueueCardDetails from "@/components/queue/QueueCardDetails";
import QueueList from "@/components/queue/QueueList";
import QueuePositionList from "../components/queue/QueuePositionList";
import QueueListLayout from "@/components/queue/QueueListLayout";
import HomeAdmin from "@/views/HomeAdmin";
import AddSubject from "@/components/AddSubject";
import AdminSubjectView from "@/components/home/AdminSubjectView";
import AddStudent from "@/components/AddStudent";
import StudentsView from "@/components/StudentsView";
import AddStudass from "@/components/AddStudass";
import NotFoundPage from "@/views/NotFoundPage";
import AssignmentList from "../views/AssignmentList";
import AssignmentStudent from "@/components/AssignmentStudent";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/subject-queue-form",
    name: "SubjectQueueForm",
    props: true,
    component: SubjectQueueForm,
  },
  {
    path: "/assignments",
    name: "AssignmentList",
    props: true,
    component: AssignmentList,
  },

  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: "StudentView",
        component: StudentView,
      },
      {
        path: "",
        name: "StudAssView",
        component: StudAssView,
      },
    ],
  },
  {
    path: "/queue",
    name: "Queue",
    props: true,
    component: Queue,
    children: [
      {
        path: "/queue/position",
        name: "QueuePositionList",
        component: QueuePositionList,
      },
      {
        path: "/queue/layout",
        name: "QueueListLayout",
        component: QueueListLayout,
        children: [
          {
            path: "/queue/list",
            name: "QueueList",
            component: QueueList,
          },
          {
            path: "/queue/list/details/",
            name: "QueueCardDetails",
            props: true,
            component: QueueCardDetails,
          },
        ],
      },
    ],
  },
  {
    path: "/home/admin",
    name: "HomeAdmin",
    component: HomeAdmin,
    children: [
      {
        path: "/home/admin/add",
        name: "AddSubject",
        component: AddSubject,
      },
      {
        path: "/home/admin/subject",
        name: "AdminSubjectView",
        component: AdminSubjectView,
      },
      {
        path: "/home/admin/addStudent",
        name: "AddStudent",
        props: true,
        component: AddStudent,
      },
      {
        path: "/home/admin/addStudass",
        name: "AddStudass",
        props: true,
        component: AddStudass,
      },
      {
        path: "/home/admin/students",
        name: "StudentsView",
        component: StudentsView,
      },
      {
        path: "/home/admin/student/assignment",
        name: "AssignmentStudent",
        component: AssignmentStudent,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
