import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './axios'
import "bootstrap/dist/css/bootstrap.css";
import './style.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'


createApp(App)
.use(router)
.use(bootstrap)
.mount('#app')



