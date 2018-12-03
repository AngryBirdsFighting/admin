import { Fetch } from "../fetch/"

class Common extends Fetch {
    constructor(){
        super()
    }
    getDictionary(data = {}, callback){
        let pramas = {
            url: "/dictionary",
            data: data
        }
        this.fetchAjax(pramas, callback)
    }
}
export default Common