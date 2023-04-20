import { createRouter, createWebHistory } from 'vue-router'
import PostJob from './components/PostJob'
const routes = [
  {
    path: '/',
    name: 'postjob',
    component: PostJob,
  },
  {

    path: '/viewjob/:userName',
    name: 'viewjob',
    component:()=>import('./components/ViewJob.vue')
  }
]
  
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router