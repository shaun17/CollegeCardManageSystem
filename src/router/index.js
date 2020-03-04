import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'


Vue.use(VueRouter)
const routes = [{
    path: '/home',
    name: 'home',
    alias: '/homePage',
    redirect: to => '/weclomeAlias',
    component: Home,
    children: [{
        path: '/welcome',
        name: 'welcome',
        alias: '/weclomeAlias',
        component: Welcome
    }, {
        path: '/users',
        name: 'user',
        component: () => import('../views/user/User.vue')
    }, {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    }, {
        path: '/parent',
        name: 'parent',
        component: () => import('../views/Parent.vue')
    }]
}, {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
}]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 挂载全局路由导航守卫
// to：将要访问的路径
// from: 代表从哪个路径跳转而来
// next: 是一个函数，表示放行
// next() 放行 next('/login') 强制跳转
router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) {
        return next({ name: 'login' })
    } else {
        next()
    }
})

export default router