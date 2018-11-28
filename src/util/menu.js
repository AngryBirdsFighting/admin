import AllRoutesData from "../router/fullRouter"

export const getMenuListByRouter = (routers,access) =>{
    debugger
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
//深拷贝
export const deepcopy = function (source) {
    if (!source) {
      return source;
    }
    let sourceCopy = source instanceof Array ? [] : {};
    for (let item in source) {
      sourceCopy[item] = typeof source[item] === 'object' ? deepcopy(source[item]) : source[item];
    }
    return sourceCopy;
  };

//组织返回菜单
export const buildMenu = (menus, ckey) => {
    debugger
    let menuData = [];
    let indexKeys = Array.isArray(menus) ? menus.map((e) => {return e.id}) : [];
    ckey = ckey || 'parent_id';
    menus.forEach(function (e) {
      //一级菜单
      if (!e[ckey] || (e[ckey]===e.id)) {
        delete e[ckey];
        menuData.push(deepcopy(e)); //深拷贝
      }else if(Array.isArray(indexKeys)){
        //检测ckey有效性
        let parentIndex = indexKeys.findIndex(function(id){
          return id == e[ckey];
        });
        if(parentIndex===-1){
          menuData.push(e);
        }
      }
    });
    let findChildren = function (parentArr) {
      if (Array.isArray(parentArr) && parentArr.length) {
        parentArr.forEach( (parentNode) => {
            menus.forEach((node) => {
            if (parentNode.id === node[ckey]) {
              if (parentNode.children) {
                parentNode.children.push(node);
              } else {
                parentNode.children = [node];
              }
            }
          });
          if (parentNode.children) {
            findChildren(parentNode.children);
          }
        });
      }
    };
    debugger
    findChildren(menuData);
    return menuData;
} 

const routePermission = function(userPermissions) {
    debugger
    let routeHash = {};
    let setMenu2Hash = function(array, base) {
      array.map(key => {
        if (key.route) {
          let hashKey = ((base ? base + '/' : '') + key.route).replace(/^\//, '');
          routeHash['/' + hashKey] = true;
          if (Array.isArray(key.children)) {
            setMenu2Hash(key.children, key.route);
          }
        }
      });
    };
    // if (Array.isArray(userPermissions.menus)) {

    // //   let arrayMenus = util.buildMenu(userPermissions.menus);
    // //   debugger
    // //   setMenu2Hash(arrayMenus);
    // }
    return routeHash;
  }