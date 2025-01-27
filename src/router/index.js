import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToExperiences from '@/views/ExpView.vue'
import ToFormation from '@/views/FormationView.vue'
import ToSkills from '@/views/SkillsView.vue'
import ToContact from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: ToExperiences
    },
    {
      path: '/formation',
      name: 'formation',
      component: ToFormation
    },
    {
      path: '/contact',
      name: 'contact',
      component: ToContact
    },
    {
      path: '/competences',
      name: 'competences',
      component: ToSkills
    }
  ]
})

export default router
