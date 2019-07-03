// import Hello from '../components/HelloWorld.vue'

export default [
    {
      path: '/',
      name: 'login',
      meta: {
        title: 'Login - 登录',
        hideInMenu: true
      },
      component: () => import('@/components/HelloWorld.vue')
    },
]