import Vue from "vue";
import Router from "vue-router";
import routes from "./router.js";
import {getToken} from "../util/tools"

Vue.use(Router);

const LOGIN_PAGE_NAME = "login"
const router = new Router({ 
  // mode: "history",
  routes
});

// router.beforeEach((to, from, next) => {
//   // iView.LoadingBar.start()
//   const token = getToken()
//   if (!token && to.name !== LOGIN_PAGE_NAME) {
//     // 未登录且要跳转的页面不是登录页
//     next({
//       name: LOGIN_PAGE_NAME // 跳转到登录页
//     })
//   } else if (!token && to.name === LOGIN_PAGE_NAME) {
//     // 未登陆且要跳转的页面是登录页
//     next() // 跳转
//   } else if (token && to.name != LOGIN_PAGE_NAME) {
//     // 已登录且要跳转的页面是登录页
//     next()
//   } else {
//     // if (store.state.user.hasGetInfo) {
//     //   turnTo(to, store.state.user.access, next)
//     // } else {
//       // debugger
//       // store.dispatch('getUserInfo').then(user => {
//       //   // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
//       //   turnTo(to, user.access, next)
//       // }).catch(() => {
//       //   debugger
//       //   setToken('')
//       //   next({
//       //     name: 'login'
//       //   })
//       // })
//     // }
//   }
// })


export default router


