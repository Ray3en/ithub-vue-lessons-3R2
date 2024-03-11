import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import PublicPage from '../pages/PublicPage.vue'
import PrivatePage from '../pages/PrivatePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/public',
      component: PublicPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/private',
      component: PrivatePage,
      // beforeEnter: (to, from, next) => {
      //   if (!getAuth()){
      //     next('/login')
      //   } else {
      //     next()
      //   }
      // }
    }
  ]
})

function getAuth(){
  const password = localStorage.getItem('password')
  return password === 'admin'
}

router.beforeEach((to, from, next) => {
  let isAuth = getAuth()
  if (to.path === '/private' && !isAuth){
    next('/login')
  } else {
    next()
  }
})

export default router
