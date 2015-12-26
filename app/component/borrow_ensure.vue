<template>
    <div class="container">
        <div class="row clearfix">
            <div class="col-md-10">
                <div class="panel panel-warning">
                    <div class="panel-heading">
                        <h3 class="panel-title">借书信息确认</h3>
                    </div>
                    <div class="panel-body">
                        <p>借阅号：{{user.borrowId}}</p>
                        <p>待借图书名称：<strong>{{book.name}}</strong></p>
                        <p>待借图书ISBN：<strong class="text-success">{{book.isbn}}</strong></p>
                        <p>开始借书日期：今天</p>
                        <p>归还日期：<input name="end" class="form-control" placeholder="归还日期" v-model="end"></p>
                        <p>总计天数: 7</p>
                        <button class="btn btn-warning">确认</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="babel">
const BOOK_API = 'http://127.0.0.1:8080/Pistachio/api/book/'

export default {
    route: {
        data({to}) {
               const BOOK_API_S = BOOK_API + to.params.bookId
               return this.$http.get(BOOK_API_S, function (data, status, request) {
                   this.$set('book', data)
               }).error(function (data, status, request) {
                   to.go({name: 'common_error'})
              })
        }
    },
    data() {
         return {

         }
     },
     methods: {

     }
}
</script>

<style>

</style>
