import Routers from "../../router/router";
import { getMenuListByRouter } from "../../util/menu";

export default{
    state:{
        menuList:[]
    },
    getters:{
        menuList: (state,getters,rootState) => getMenuListByRouter(Routers, rootState.user.access)
    }
}

