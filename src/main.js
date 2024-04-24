import './assets/css/global.less'
// 引入动画库
import "animate.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
