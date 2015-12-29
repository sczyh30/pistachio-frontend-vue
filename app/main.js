import Vue from 'vue'
import VueRouter from 'vue-router'
import VueRes from 'vue-resource'
import App from './app.vue'

//import LocalStorage from './service/storage'

import { configRouter } from './route-config'


//import IndexPage from './component/index.vue'


import CommonError from './component/error/404.vue'

require('../css/app.css')
//require('../node_modules/bootstrap/dist/js/bootstrap.min.js')

Vue.use(VueRouter)
Vue.use(VueRes)

const router = new VueRouter({
    saveScrollPosition: true
})

configRouter(router)

router.start(App, '#ps_app')
