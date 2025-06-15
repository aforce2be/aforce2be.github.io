import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  {
    path: '/project-detail',
    name: 'ProjectDetail',
    component: ProjectDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
