import Index from "@/pages/frontend/index.vue";
import {createRouter,createWebHashHistory} from "vue-router";
import Login from "@/pages/admin/login.vue";

const routes = [
    {
        path: "/",
        component: Index,
        meta: {
            title: 'TediouscatBlog首页'
        }
    },
    // 省略...
    {
        path: '/login', // 登录页
        component: Login,
        meta: {
            title: 'TediouscatBlog登录页'
        }
    },
]

const routers =createRouter({
    history: createWebHashHistory(),
    routes,
})

export default routers;
