import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SubjectQueueForm from "../views/SubjectQueueForm";
import Login from "../views/Login";
import StudentView from "@/components/home/StudentView";
import StudAssView from "@/components/home/StudAssView";
import Archived from "@/components/home/Archived";
import Queue from "@/views/Queue";
import QueueCardDetails from "@/components/queue/QueueCardDetails";
import QueueList from "@/components/queue/QueueList";
import QueuePosition from "@/components/queue/QueuePosition";
import QueueListLayout from "@/components/queue/QueueListLayout";
import HomeAdmin from "@/views/HomeAdmin";
import AddSubject from "@/components/AddSubject";

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
      {
        path: "",
        name: "Archived",
        component: Archived,
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
        path: "/",
        name: "AddSubject",
        component: AddSubject,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
