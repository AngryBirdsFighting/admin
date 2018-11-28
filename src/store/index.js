import Vuex from "vuex";
import Vue from 'vue';
import menu from './module/menu'
import user from './module/user'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{

    },
    getters:{

    },
    mutations:{

    },
    actions:{

    },
    modules:{
      menu,
      user
    }

})