import { Fetch } from "../fetch/"

class User extends Fetch {
    constructor(){
        super()
    }
    login(data, callback){
        let pramas = {
            url: "/login",
            data: data
        }
        this.fetchAjax(pramas, callback)
    }
    getUserInfo(data, callback){
        let pramas = {
            url: "/getUserInfo1",
            method:"Post",
            data: data
        }
        this.fetchAjax(pramas, callback)
    }
}
export default User