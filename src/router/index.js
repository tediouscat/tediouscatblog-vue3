import Index from "@/frontend/index.vue";
import {createRouter,createWebHashHistory} from "vue-router";

const routes = [
    {
        path: "/",
        component: Index,
        meta: {
            title: 'tediouscatblog首页'
        }
    }
]

const routers =createRouter({
    history: createWebHashHistory(),
    routes,
})

export default routers;