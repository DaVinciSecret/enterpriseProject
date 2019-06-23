import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

//主页概览
import overView from './components/homePage/overView.vue'
//商品
import productDetail from './components/product/productDetail.vue'
import productManage from './components/product/productManage.vue'
import productType from './components/product/productType.vue'
import productEdit from './components/product/productEdit.vue'
import personType from './components/product/personType.vue'
import product from './components/product/product.vue'
//other
import other from './components/other/otherPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'overView',
      component:overView
    },
     {
      path: '/product',
      component:product,
      children:[
        {
          path:'productDetail',
          component:productDetail
        },{
          path:'productManage',
          component:productManage
        },{
          path:'productType',
          component:productType
        },{
          path:'personType',
          component:personType
        },{
          path:'productEdit',
          name:'productEdit',
          component:productEdit
        },
      ],
      redirect:'/product/productDetail'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
      path: '/account',
      name: 'accountList',
      component: () => import(/* webpackChunkName: "about" */ './components/accountOperate/accountList.vue')
    },
    {
      path: '/addAccount',
      name: 'addAccount',
      component: () => import(/* webpackChunkName: "about" */ './components/accountOperate/addAccount.vue')
    },
    {
      path: '/other',
      name: 'otherPage',
      component:other
    },
  ]
})
