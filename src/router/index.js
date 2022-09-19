import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  //  登录页
  {
    path: '/login',
    name: '/Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/login')
  },
  //布局页面-首页
    {
        path: '/',
        name: '/',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        redirect:'/users',
        component: () => import('../ layout'),
        children: [
            //首页列表
            {
                path: 'users',
                name: 'users',
                component: () => import('@/views/users/index.vue')
            },
            //类别
            {
                path: 'categories',
                name: 'categories',
                component: () => import('@/views/categories/index.vue')
            },
            //商品
            {
                path: 'goods',
                name: 'goods',
                component: () => import('@/views/goods/index.vue')
            },
            //表单
            {
                path: 'from',
                name: 'from',
                component: () => import('@/views/from/index.vue')
            },
            //设置
            {
                path: 'params',
                name: 'params',
                component: () => import('@/views/params/index.vue')
            },
            {
                path: 'reports',
                name: 'reports',
                component: () => import('@/views/reports/index.vue')
            },
            {
                path: 'rights',
                name: 'rights',
                component: () => import('@/views/rights/index.vue')
            },
            //用户列表
            {
                path: 'roles',
                name: 'roles',
                component: () => import('@/views/roles/index.vue')
            }
        ]
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
