import { createRouter, createWebHashHistory } from 'vue-router' 
import LandingPageView from '@/views/LandingPageView.vue'
import TermsOfUseView from '@/views/TermsOfUseView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPageView,
    },
    {
      path: '/termos',
      name: 'termos',
      component: TermsOfUseView,
    },
    {
      path: '/politica',
      name: 'politica',
      component: PrivacyPolicyView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

export default router
