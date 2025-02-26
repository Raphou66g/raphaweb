import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';
import NotFound from '@/views/NotFound.vue';
import TBD from '@/views/TBD.vue';
import ProjectDetail from '@/views/ProjectDetail.vue';
import Test from '@/views/Test.vue';
import Contact from '@/views/Contact.vue';

const routes = [
  { path: '/', redirect: '/accueil' },
  { path: '/accueil', component: Home },
  { path: '/test', component: Test },
  { path: '/about', component: TBD },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/TBD', component: TBD },
  { path: '/:pathMatch(.*)*', component: NotFound },
  { path: '/projects/:id', component: ProjectDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;