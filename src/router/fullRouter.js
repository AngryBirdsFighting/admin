import Main from '../components/main/main.vue'

export default [{
  path: '/',
  name: '首页',
//   component: (resolve) => require(['../views/index.vue'], resolve),
  children: [{
    path: '/roles',
    name: 'roles',
    meta: {
        icon: 'logo-buffer',
        title: '平台-角色管理'
    },
    // component: (resolve) => require(['../views/roles.vue'], resolve)
  }, {
    path: '/accounts',
    name: 'accounts',
    meta: {
        icon: 'logo-buffer',
        title: '平台-账号管理'
    },
    // component: (resolve) => require(['../views/accounts.vue'], resolve)
  }, {
    path: '/goods',
    name: 'goods',
    meta: {
        icon: 'logo-buffer',
        title: '商品管理'
    },
    component: Main,
    children: [{
      path: 'list',
      name: 'list',
      meta: {
        title: '商品信息'
      },
      component: () => import('../view/menu1/menu1.vue')
    },
    {
      path: 'list2',
      name: 'list2',
      meta: {
        title: '商品信息'
      },
      component: () => import('../view/menu1/menu1.vue')
    }]
  }, {
    path: '/orders',
    name: 'orders',
    meta: {
        icon: 'logo-buffer',
        title: '订单管理'
    },
    component: Main,
    children: [{
      path: 'orders1',
      name: 'orders1',
      meta: {
        title: '订单信息'
      },
      component: () => import('../view/menu1/menu1.vue')
    },
    {
      path: 'orders2',
      name: 'orders2',
      meta: {
        title: '订单信息'
      },
      component: () => import('../view/menu1/menu1.vue')
    }]
  }]
}];