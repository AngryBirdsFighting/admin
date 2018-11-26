import Main from '../components/main/main.vue'

/**
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中.
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/',
    name: 'home',
    redirect: '/menu1',
    component: Main,
    meta: {
      title: 'L',
      hideInMenu: true
    },
    // component: () => import('')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    // component: () => import('')
  },
  {
    path: '/menu1',
    name: 'menu1',
    component: Main,
    meta: {
      icon: 'logo-buffer',
      title: '菜单1'
    },
    children: [
      {
        path: 'menu1-1',
        name: 'menu1-1',
        meta: {
          icon: '_qq',
          title: '菜单1-1'
        },
        component: () => import('../view/menu1/menu1.vue')
      },
      {
        path: 'menu1-2',
        name: 'menu1-2',
        meta: {
          icon: '_qq',
          title: '菜单1-2'
        },
        // component: () => import('')
      },
      {
        path: 'menu1-3',
        name: 'menu1-3',
        meta: {
          icon: '_qq',
          title: '菜单1-3'
        },
        // component: () => import('')
      }
    ]
  },
  {
    path: '/menu2',
    name: 'menu2',
    component: Main,
    meta: {
      icon: 'logo-buffer',
      title: '菜单2'
    },
    children: [
      {
        path: 'menu2-1',
        name: 'menu2-1',
        meta: {
          icon: '_qq',
          title: '菜单2-1'
        },
        component: () => import('../view/menu2/menu2.vue')
      },
      {
        path: 'menu2-2',
        name: 'menu2-2',
        meta: {
          icon: '_qq',
          title: '菜单2-2'
        },
        // component: () => import('')
      },
      {
        path: 'menu2-3',
        name: 'menu2-3',
        meta: {
          icon: '_qq',
          title: '菜单2-3'
        },
        // component: () => import('')
      }
    ]
  }
]
