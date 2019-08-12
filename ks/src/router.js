import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

import NewHouse from './views/NewHouse.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/newhouse',
      name:'newhouse',
      component:NewHouse
    }
  ]
})
