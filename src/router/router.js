
import Main from '../components/main/main.vue'

export default [{
  path: '/login',
  name: 'login',
  component: () =>import('../view/login/login.vue')
}, {
  path: '/401',
  name: '401',
  component: () =>import('../view/login/login.vue')
}, {
  path: '/404',
  name: '404',
  component: () =>import('../view/login/login.vue')
}]
 
