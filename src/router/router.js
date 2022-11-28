import { createRouter,createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Provedor from '../pages/Provedor.vue'
import Producto from '../pages/Producto.vue'
import Targetas from '../pages/Targetas.vue'
import Login_in from '../pages/Login_in.vue'

const routes = [
  {
    path :'/',
    component: Login_in
  },
   {
    path :'/home',
    component: Home
  },

  {
    path :'/provedor',
    component: Provedor
  },
  {
    path :'/producto',
    component: Producto
  },
    {
    path :'/targetas',
    component: Targetas
  }


]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router