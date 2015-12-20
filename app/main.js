import Vue from 'vue'
import VueRouter from 'vue-router'
import VueRes from 'vue-resource'
import App from './app.vue'

import { configRouter } from './route-config'

/*import Test from './component/test.vue'
import Test2 from './component/test2.vue'
import IndexPage from './component/index.vue'
import BookDetail from './component/book_detail.vue'*/

import CommonError from './component/error/404.vue'

require('../css/app.css')
//require('../node_modules/bootstrap/dist/js/bootstrap.min.js')

Vue.use(VueRouter)
Vue.use(VueRes)
//const BookDetail = require('./component/book_detail.vue')
const router = new VueRouter({
    saveScrollPosition: true
})

configRouter(router)

/*router.map({
    '/book/:bookId': {
        component: BookDetail,
        name: 'get_book_detail'
    },
    '/404': {
        component: CommonError,
        name: 'common_error'
    },
    '/index': {
        component: IndexPage
    },
    '/fuck': {
        component: Test
    },
    '/fuck/you': {
        component: Test2
    }
})*/

router.start(App, '#ps_app')
