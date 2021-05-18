import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Subjecselected from "../views/SubjectSelected.vue"
import AboutSubject from "../views/AboutSubject.vue"
import ProfileUser from "../views/Profile_private.vue"
import StudyPlan from "../views/studyPlan.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/subject_selected",
    name: "subject_selected",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/SubjectSelected.vue"),
    component: Subjecselected
  },
  {
    path: "/about_subject",
    name: "about_subject",
    component: AboutSubject
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutSubject.vue"),
  },
  {
    path: "/profile",
    name: "profile_user",
    component: ProfileUser
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Profile_private.vue"),
  },
  {
    path: "/subject_cal",
    name: "subject_cal",
    component: () => import("../components/SubjectCal.vue"),
  },
  {
    path: "/dataSubjectdiagram",
    name: "diagram_dataSubject",
    component: () => import("../components/DataSubject.vue"),
  },
  {
    path: "/Hello",
    name: "hello",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HelloWorld.vue"),
  },
  
  {
    path: "/newsAll",
    name: "newsall",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/NewsAll.vue"),
  },
  {
    path: "/tabletime",
    name: "tabletime",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/TableStudent.vue"),
  },
  {
    path: "/studyplan",
    name: "StudyPlan",
    component: StudyPlan
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
