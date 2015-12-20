import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Test from './component/test.vue'
import Test2 from './component/test2.vue'

//require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('../css/app.css')

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
    '/fuck': {
        component: Test
    },
    '/fuck/you': {
        component: Test2
    }
})

router.start(App, '#app0')

/*new Vue({
  el: '#app0',
  components: {
    app: App
  }
})*/
