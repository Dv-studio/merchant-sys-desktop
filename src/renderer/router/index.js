import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '示例', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '表格', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '树', icon: 'tree' }
      }
    ]
  },
  {
    path: '/sale',
    component: Layout,
    redirect: '/sale/order',
    name: 'Sale',
    meta: { title: '销售管理', icon: 'example' },
    children: [
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/sale/index'),
        meta: { title: '销售订单', icon: 'table' }
      },
      {
        path: 'createOrder',
        name: 'CreateOrder',
        component: () => import('@/views/sale/operate'),
        meta: { title: '创建订单', icon: 'tree' }
      }
    ]
  },
  {
    path: '/supplier',
    component: Layout,
    redirect: '/supplier/list',
    name: 'Supplier',
    meta: { title: '供应商管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/supplier/index'),
        meta: { title: '供应商', icon: 'table' }
      },
      {
        path: 'createOrder',
        name: 'CreateOrder',
        component: () => import('@/views/supplier/operate'),
        meta: { title: '创建供应商', icon: 'tree' }
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product/list',
    name: 'Produt',
    meta: { title: '产品管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/supplier/index'),
        meta: { title: '产品列表', icon: 'table' }
      },
      {
        path: 'createOrder',
        name: 'CreateOrder',
        component: () => import('@/views/supplier/operate'),
        meta: { title: '创建产品', icon: 'tree' }
      }
    ]
  },
  {
    path: '/stock',
    component: Layout,
    redirect: '/stock/list',
    name: 'Stock',
    meta: { title: '进货管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/stock/index'),
        meta: { title: '进货订单', icon: 'table' }
      },
      {
        path: 'createOrder',
        name: 'CreateOrder',
        component: () => import('@/views/stock/operate'),
        meta: { title: '创建进货单', icon: 'tree' }
      }
    ]
  },
  {
    path: '/return',
    component: Layout,
    redirect: '/return/list',
    name: 'Return',
    meta: { title: '退货管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/return/index'),
        meta: { title: '退货订单', icon: 'table' }
      },
      {
        path: 'createOrder',
        name: 'CreateOrder',
        component: () => import('@/views/return/operate'),
        meta: { title: '创建退货单', icon: 'tree' }
      }
    ]
  },
  {
    path: '/finance',
    component: Layout,
    redirect: '/finance/list',
    name: 'Finance',
    meta: { title: '财务管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/finance/index'),
        meta: { title: '财务', icon: 'table' }
      }
    ]
  },
  {
    path: '/staff',
    component: Layout,
    redirect: '/staff/list',
    name: 'Staff',
    meta: { title: '员工管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/staff/index'),
        meta: { title: '员工列表', icon: 'table' }
      },
      {
        path: 'createStaff',
        name: 'createStaff',
        component: () => import('@/views/staff/operate'),
        meta: { title: '添加员工', icon: 'tree' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

