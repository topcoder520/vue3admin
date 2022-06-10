import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    //元数据
    meta:{
      requiresAuth:true //必须授权才能访问
    }
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
    meta:{
      requiresAuth:false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//前置守卫
//权限控制
router.beforeEach((to,from,next)=>{
  let isLogin = false; //是否登录
  if(to.meta.requiresAuth && !isLogin){
    next({name:'LoginView'});
  }else{
    next();
  }
})

export default router
