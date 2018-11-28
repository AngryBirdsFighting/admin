import Routers from "../../router/router";
import {setToken , getToken} from "../../util/tools"

export default{
    state:{
        userName: "",
        access:[],
        permission:[]  
    },
    getters:{
    },
    mutations:{
        setUserName(state, userName){
            state.userName = userName
            setToken(userName)
        },
        setAccess(state, access){
            debugger
            state.access = access
        },
        setPermission(state, permission){
            debugger
            state.permission = permission
        }
    }
}

