import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/";
import iView from 'iview';
import "iview/dist/styles/iview.css";

// import { Button, Table, Submenu, MenuGroup, Menu, RadioGroup, MenuItem, Row, Col, Icon, Radio, Layout, Sider, Tag, Breadcrumb, BreadcrumbItem } from "iview";


// Vue.component("Button", Button);
// Vue.component("Table", Table);
// Vue.component("RadioGroup", RadioGroup);
// Vue.component("Menu", Menu);
// Vue.component("Submenu", Submenu);
// Vue.component("MenuItem", MenuItem);
// Vue.component("Menu-group", MenuGroup);
// Vue.component("Row", Row);
// Vue.component("i-col", Col);
// Vue.component("Icon", Icon);
// Vue.component("Radio", Radio);
// Vue.component("tags-nav", Tag);
// Vue.component("Sider", Sider);
// Vue.component("Layout", Layout);
// Vue.component("Breadcrumb", Breadcrumb);
// Vue.component("Breadcrumb-item", BreadcrumbItem);

Vue.config.productionTip = false;
Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
