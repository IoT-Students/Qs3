import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SubjectQueueForm from "../views/SubjectQueueForm";
import Login from "../views/Login";
import StudentView from "@/components/home/StudentView";
import StudAssView from "@/components/home/StudAssView";
import Archived from "@/components/home/Archived";
import Queue from "@/views/Queue";
import HomeAdmin from "@/views/HomeAdmin";

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
  },
  {
    path: "/homeadmin",
    name: "home ",
    component: HomeAdmin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
