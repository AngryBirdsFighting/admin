import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/";
import iView from 'iview';
import "iview/dist/styles/iview.css";


Vue.directive('has', {
  bind (el, binding, vnode) {
    debugger
      let name = vnode.context.$route.name;
      debugger
      if (!store.state.user.resource[name].includes(binding.value)) {
          el.parentNode.removeChild(el);
      }
  }
});
Vue.config.productionTip = false;
Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
