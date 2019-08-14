import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

import NewHouse from './views/NewHouse.vue'
import Login from './views/Login.vue'
import Registe from './views/Registe.vue'
import NewHouse_details from './views/NewHouse_details.vue'
import Oldhouse from './views/Oldhouse'
import Rent from './views/Rent'
import Community from './views/Community'
import Rental from './views/Rental'


export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/newhouse',
            name: 'newhouse',
            component: NewHouse
        }, {
            path: '/login',
            name: 'login',
            component: Login
        }, {
            path: '/registe',
            name: 'registe',
            component: Registe
        }, {
            path: '/newhouse_details',
            name: 'newhouse_details',
            component: NewHouse_details
        }, {
            path: '/oldhouse',
            name: 'oldhouse',
            component: Oldhouse
        }, {
            path: '/rent',
            name: 'rent',
            component: Rent
        }, {
            path: '/community',
            name: 'community',
            component: Community
        }, {
            path: '/rental',
            name: 'rental',
            component: Rental
        }

    ]
})