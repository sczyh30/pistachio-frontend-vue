export function configRouter (router) {
    router.map({
        '/login': {
            component: require('./component/login.vue'),
            name: 'login_page'
        },
        '/register': {
            component: require('./component/register.vue'),
            name: 'reg_page'
        },
        '/user/:userId': {
            component: require('./component/user_status.vue'),
            name: 'user_status'
        },
        '/book/:bookId': {
            component: require('./component/book_detail.vue'),
            name: 'get_book_detail'
        },
        '/book/:bookId/borrow': {
            component: require('./component/borrow_ensure.vue'),
            name: 'book_borrow_ensure'
        },
        '/index': {
            component: require('./component/index.vue'),
            name: 'index_page'
        },
        '/book/list': {
            component: require('./component/book_list.vue'),
            name: 'book_list'
        },
        '/404': {
            component: require('./component/error/404.vue'),
            name: 'common_error'
        },
        '/fail': {
            component: require('./component/error/net_fail.vue'),
            name: 'net_fail'
        }
    })

    // redirect
    router.redirect({
        '*': '/index'
    })

}
