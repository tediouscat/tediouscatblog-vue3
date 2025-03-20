import Index from "@/pages/frontend/index.vue";
import {createRouter,createWebHashHistory} from "vue-router";
import Login from "@/pages/admin/login.vue";
import AdminIndex from "@/pages/admin/index.vue"
import Admin from "@/layouts/admin/admin.vue";

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
    {
        path: "/admin/index", // 后台首页
        component: Admin,
        meta: {
            title: 'Admin 后台首页'
        }
    },
    {
        path: "/admin", // 后台首页
        component: Admin, // 对应 admin.vue 布局文件
        // 使用到 admin.vue 布局的，都需要放置在其子路由下面
        children: [
            {
                path: "/admin/index",
                component: AdminIndex, // 主内容区域，具体需要渲染的页面
                meta: {
                    title: 'Admin 后台首页'
                }
            }
        ]

    }
]

const routers =createRouter({
    history: createWebHashHistory(),
    routes,
})


export default routers;
