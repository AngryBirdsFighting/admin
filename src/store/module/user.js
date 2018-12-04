
import { setToken, getToken } from "../../util/tools"
import AllRoutesData from "../../router/fullRouter"
import router from "../../router/index.js"
import { getRoutePermission, extendRoutes } from "../../util/menu.js"
import UserApi from "../../api/user"
let userApi = new UserApi()
export default {
    state: {
        userId: "",
        access: [],
        menuList: [],
        resource: {},
    },
    getters: {
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId
            setToken("userId", userId)
        },
        setAccess(state, access) {
            state.access = access
        },
        setResource(state, resource){
            state.resource = resource
        },
        setMenuList(state, menus) {
            
            let menu = getRoutePermission(menus)
            let menuData = extendRoutes(menu, AllRoutesData)
            state.menuList = menuData
            router.addRoutes(menuData.concat([{
                path: '*',
                redirect: '/404'
            }]));
        }
    },
    actions: {
        getUserMenu({ commit, state, rootState }) {
            
            if (!state.userId) {
                let userId = getToken("userId")
                commit("setUserId", userId)
            }
            return new Promise((resolve, reject) => {
                userApi.getUserInfo({ id: state.userId }, function (res, err) {
                    if (!err) {
                        commit("setMenuList", res.data)
                        commit("setResource", res.data.resource)
                        resolve(res.data)
                    } else {
                        reject(err)
                    }
                })
            })
        }
    }

}

