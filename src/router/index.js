import Vue from 'vue'
import Router from 'vue-router'
import routes from './router.js'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
});

export default router;

// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from '../components/HelloWorld.vue'

// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//   ]
// })
