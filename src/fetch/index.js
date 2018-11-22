import Config from "../config"
class Fetch {
    constructor(){
        this.baseUrl = Config.baseUrl;
        this.reqConfig = {
            credentials: 'include',
            method: "",
            headers: {
              'Accept': 'application/json',
              'Content-Type' : 'application/json'
            },
            mode: "cors",
            cache: "force-cache"
          }
    }
    async request(param, callback){
        debugger
        this.reqConfig.method = param.type || "Get";
        this.reqConfig.body = JSON.stringify(param.data)
        try {
            var res = await fetch(this.baseUrl + param.url, this.reqConfig);
            debugger
            // 判断状态后执行
            var resData = await res.json();
            callback(resData)
        } catch (error) {
            throw new Error(error)
        }
    }
}

export { Fetch }