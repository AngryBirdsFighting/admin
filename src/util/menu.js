import router from "../router/index"
import vue from "vue"

//深拷贝
// export const deepcopy = function (source) {
//     if (!source) {
//       return source;
//     }
//     let sourceCopy = source instanceof Array ? [] : {};
//     for (let item in source) {
//       sourceCopy[item] = typeof source[item] === 'object' ? deepcopy(source[item]) : source[item];
//     }
//     return sourceCopy;
//   };

//构造返回菜单
 const buildMenu = (menus, ckey) => {
    let menuData = [];
    let indexKeys = Array.isArray(menus) ? menus.map((e) => {return e.id}) : [];
    ckey = ckey || 'parent_id';
    menus.forEach(function (e) {
      //一级菜单
      if (!e[ckey] || (e[ckey]===e.id)) {
        delete e[ckey];
        // menuData.push(deepcopy(e)); //深拷贝
        menuData.push(e)
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
    // 二级菜单
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
    findChildren(menuData);
    return menuData;
} 
// 构造筛选条件
export const getRoutePermission = function(userPermissions) {
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
    if (Array.isArray(userPermissions.menus)) {
      let arrayMenus = buildMenu(userPermissions.menus);
      setMenu2Hash(arrayMenus);
    }
    return routeHash;
  }

export const extendRoutes = (routePermission, AllRoutesData) => { 
  let actualRouter = [];
  let findLocalRoute = function(array, base) {
    let replyResult = [];
    array.forEach(route => {
      let pathKey = (base ? base + '/' : '') + route.path;
      if (routePermission[pathKey]) {
        if (Array.isArray(route.children)) {
          route.children = findLocalRoute(route.children, route.path);
        }
        replyResult.push(route);
      }
    });
    if (base) {
      return replyResult;
    } else {
      actualRouter = actualRouter.concat(replyResult);
    }
  }
  findLocalRoute(AllRoutesData[0].children);

  if (!actualRouter || !actualRouter.length) {
    return document.body.innerHTML = ('<h1>账号访问受限，请联系系统管理员！</h1>');
  }
  return actualRouter
}