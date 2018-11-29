
import {setToken , getToken} from "../../util/tools"
import AllRoutesData from "../../router/fullRouter"
import router from "../../router/index.js"
import { getRoutePermission, extendRoutes } from "../../util/menu.js"
import  UserApi from "../../api/user"

let userApi = new UserApi()

export default{
    state:{
        userName: "",
        access:[],
        menuList:[]  
    },
    getters:{
    },
    mutations:{
        setUserName(state, userName){
            state.userName = userName
            setToken(userName)
        },
        setAccess(state, access){
            state.access = access
        },
        setMenuList(state, menus) {
            let menu = getRoutePermission(menus)
            let menuData = extendRoutes(menu, AllRoutesData)
            debugger
            state.menuList = menuData
            router.addRoutes(menuData.concat([{
                path: '*',
                redirect: '/404'
            }]));
        }
    },
    actions: {
        getUserMenu ({ commit, rootState }) {
          
         return new Promise((resolve, reject) => {
            userApi.getUserInfo({id:"11111"}, function(res, err){
                if(!err){
                    debugger
                   commit("setMenuList", res.data)
                   debugger
                   resolve(res.data)
                }else{
                   reject(err)
                }
           })

         }) 
        }
      }
    
}

