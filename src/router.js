import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import productDetail from './components/productDetail/productDetail.vue'
import overView from './components/homePage/overView.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'overView',
      component:() => import(/* webpackChunkName: "about" */ './components/homePage/overView.vue')
    },
     {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
