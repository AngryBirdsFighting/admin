import router from "../router/index"
import vue from "vue"

export const getMenuListByRouter = (routers,access) =>{
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

//构造返回菜单
 const buildMenu = (menus, ckey) => {
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
    findChildren(menuData);
    return menuData;
} 
// 构造路由权限
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
    // Filtering local routes, get actual routing
    
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
    
    // If the user does not have any routing authority
debugger
    if (!actualRouter || !actualRouter.length) {
      // clear token, refresh page will jump to login screen.
      // util.session('token','');
      // Interface hints
      return document.body.innerHTML = ('<h1>账号访问受限，请联系系统管理员！</h1>');
    }
    
    // actualRouter.map(e => {

    //   // Copy 'children' to 'meta' for rendering menu.(This step is optional.)

    //   if (e.children) {
    //     if (!e.meta) e.meta = {};
    //     e.meta.children = e.children;
    //   }
      
    //   // Add Per-Route Guard
    //   // To prevent manual access to ultra vires routing after switching accounts
      
    //   return e.beforeEnter = (to, from, next) => {
    //     if(routePermission[to.path]){
    //       next()
    //     }else{
    //       next('/401')
    //     }
    //   }
    // });
    // Add actual routing to application
    let originPath = deepcopy(AllRoutesData);
    originPath[0].children = actualRouter;
    debugger
    return actualRouter
    // this.$router.addRoutes(originPath.concat([{
    //   path: '*',
    //   redirect: '/404'
    // }]));
    // Save information for rendering menu.(This step is optional.)
    // this.$root.menuData = actualRouter;
  }