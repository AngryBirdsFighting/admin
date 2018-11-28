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
    }]
  }]
}];