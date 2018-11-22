export const getMenuListByRouter = (routers) =>{
    let res = [];
    routers.forEach(item => {
        if(!item.meta.hideInMenu){
            var obj = {
                path: item.path,
                name: item.name,
                meta: item.meta
            }
            if(item.children && item.children.length > 0){
                obj.children = getMenuListByRouter(item.children)
            }
            res.push(obj)
        }      
    });
    return res
}