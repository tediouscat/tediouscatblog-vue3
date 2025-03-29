import Index from "@/pages/frontend/index.vue";
import {createRouter,createWebHashHistory} from "vue-router";
import Login from "@/pages/admin/login.vue";
import AdminIndex from "@/pages/admin/index.vue"
import Admin from "@/layouts/admin/admin.vue";
import AdminCategoryList from "@/pages/admin/category-list.vue"
import AdminArticleList from "@/pages/admin/article-list.vue"
import AdminTagList from "@/pages/admin/tag-list.vue";
import AdminBlogSetting from "@/pages/admin/blog-settings.vue"
import ArchiveList from '@/pages/frontend/archive-list.vue'
import CategoryList from "@/pages/frontend/category-list.vue";

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
        path: "/admin", // 后台首页
        component: Admin,
        // 使用到 admin.vue 布局的，都需要放置在其子路由下面
        children: [
            {
                path: "/admin/index",
                component: AdminIndex,
                meta: {
                    title: '仪表盘'
                }
            },
            {
                path: "/admin/article/list",
                component: AdminArticleList,
                meta: {
                    title: '文章管理'
                }
            },
            {
                path: "/admin/category/list",
                component: AdminCategoryList,
                meta: {
                    title: '分类管理'
                }
            },
            {
                path: "/admin/tag/list",
                component: AdminTagList,
                meta: {
                    title: '标签管理'
                }
            },
            {
                path: "/admin/blog/setting",
                component: AdminBlogSetting,
                meta: {
                    title: '博客设置'
                }
            },
        ]

    },
    {
        path: '/archive/list', // 归档页
        component: ArchiveList,
        meta: { // meta 信息
            title: 'Weblog 归档页'
        }
    },
    {
        path: '/category/list', // 分类页
        component: CategoryList,
        meta: { // meta 信息
            title: 'Weblog 分类页'
        }
    },
]

const routers =createRouter({
    history: createWebHashHistory(),
    routes,
})


export default routers;
