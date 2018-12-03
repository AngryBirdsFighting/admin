import Common from "./common.js"

class Goods extends Common {
    constructor(){
        super()
    }
    getList(callback){
        let pramas = {
            url: "/goodsList",
        }
        this.fetchAjax(pramas, callback)
    }
    addGoods(data, callback){
        let pramas = {
            url: "/goodsAdd",
            method:"Post",
            data: data
        }
        this.fetchAjax(pramas, callback)
    }
}
export default Goods