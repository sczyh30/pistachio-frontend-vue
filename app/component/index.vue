<template>
    <div class="container">
    <div class="row clearfix">
        <div v-if="$loadingRouteData">正在加载数据...</div>
        <div id="latest_book" v-if="books.code == undefined">
            <div v-for="book in books" class="col-md-4">
                <div class="panel panel-primary" id="m1-news">
                   <div class="panel-heading">
                      <h3 class="panel-title">图书信息</h3>
                   </div>
                   <div class="panel-body text-seablue bg-info">
                      <strong>ISBN:{{book.isbn}}</strong>
                   </div>
                   <ul class="list-group">
                      <li class="list-group-item">
                            <div class="book-pic-center">
                                <img class="img-little-book" :src="'http://127.0.0.1/assets/img/cover/'+ book.isbn + '.jpg'" alt="cover"/>
                            </div>
                            <div id="book-text" class="text-center">
                                <p><a v-link="'/book/' + book.isbn">{{book.name}}</a></p>
                                <p>{{book.author}}</p>
                            </div>
                      </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-if="err.code != undefined">
            <net-fail-page></net-fail-page>
        </div>
    </div>
</div>
</template>

<script type="babel">
 import NetFailPage from './error/net_fail.vue'

 export default {
    data() {
        return {
            books: {},
            err: {}
        }
    },
    methods: {

    },
    ready () {
 		this.$http.get('http://127.0.0.1:8080/Pistachio/api/book/latest',(data, status, request) => {
 			this.$set('books', data)
 		}).error((data, status, request) => {
 			// handle error
            //this.$route.go({name: 'common_error'})
            this.$set('err', {code: 4001})
 		})
 	}, components: {
        'net-fail-page': NetFailPage
    }
 }
</script>

<style type="text/css" scoped>

</style>
