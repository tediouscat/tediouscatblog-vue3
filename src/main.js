import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import '@/permission'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'animate.css';
import 'nprogress/nprogress.css'





const app = createApp(App)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
