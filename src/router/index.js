import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SubjectQueueForm from "../views/SubjectQueueForm";
import Login from "../views/Login";
import StudentView from "@/components/home/StudentView";
import StudAssView from "@/components/home/StudAssView";
import Queue from "@/views/Queue";
import QueueCardDetails from "@/components/queue/QueueCardDetails";
import QueueList from "@/components/queue/QueueList";
import QueuePosition from "@/components/queue/QueuePosition";
import QueueListLayout from "@/components/queue/QueueListLayout";
import HomeAdmin from "@/views/HomeAdmin";
import AddSubject from "@/components/AddSubject";
import AdminSubjectView from "@/components/home/AdminSubjectView";
import AddStudent from "@/components/AddStudent";

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
    path: "/subjectQueueForm",
    name: "SubjectQueueForm",
    component: SubjectQueueForm,
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
    component: Queue,
    children: [
      {
        path: "",
        name: "QueuePosition",
        component: QueuePosition,
      },
      {
        path: "",
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

    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
