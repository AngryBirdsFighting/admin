import Routers from "../../router/router";
import { getMenuListByRouter } from "../../util/menu";

export default{
    state:{
        
    },
    getters:{
        menuList: () => getMenuListByRouter(Routers)
    }
}

