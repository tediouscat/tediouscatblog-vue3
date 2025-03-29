import router from '@/router/index'
import {hidePageLoading, showMessage, showPageLoading} from "@/composables/util.js";
import {getToken} from "@/composables/cookie.js";


// 全局路由前置守卫
router.beforeEach((to, from, next) => {
    console.log('==> 全局路由前置守卫')

    // 展示页面加载 Loading
    showPageLoading()

    let token = getToken()

    if (!token && to.path.startsWith('/admin')) {
        // 省略...
    } else if (token && to.path == '/login') {
        // 若用户已经登录，且重复访问登录页
        showMessage('请勿重复登录', 'warning')
        // 跳转后台首页
        next({ path: '/admin/index' })
    } else {
        next()
    }
})

// 全局路由后置守卫
router.afterEach((to, from) => {
    // 动态设置页面 Title
    let title = (to.meta.title ? to.meta.title : '') + ' - Tediouscatblog'
    document.title = title

    // 隐藏页面加载 Loading
    hidePageLoading()
})

