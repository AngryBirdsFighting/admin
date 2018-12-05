import Vue from "vue";
import Router from "vue-router";
import routes from "./router.js";
import { getToken } from "../util/tools";
import store from "../store/";
import iView from 'iview'

Vue.use(Router);

const LOGIN_PAGE_NAME = "login"
const router = new Router({
  // mode: "history",
  routes
});
router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start()
  const token = getToken("userId")
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name == LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next()
  } else {
    if (store.state.user.userId) {
      next()
    } else {
      store.dispatch('getUserMenu').then(res => {
        if (to.name) {
          next()
        } else {
          next({ path: to.path })
        }
      }).catch(() => {
        setToken('userId', "")
        next({
          name: 'login'
        })
      })
    }
  }
})
router.afterEach(to => {
  // iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})


export default router


