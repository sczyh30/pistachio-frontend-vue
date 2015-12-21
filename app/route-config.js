export function configRouter (router) {
    router.map({
        '/book/:bookId': {
            component: require('./component/book_detail.vue'),
            name: 'get_book_detail'
        },
        '/404': {
            component: require('./component/error/404.vue'),
            name: 'common_error'
        },
        '/index': {
            component: require('./component/index.vue')
        }
    })

    // redirect
    router.redirect({
        '*': '/index'
    })
}
