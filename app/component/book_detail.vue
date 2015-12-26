<template>
<div class="container">
    <div class="row clearfix">
            <div class="col-md-10">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <h3 class="panel-title">图书详细信息</h3>
                    </div>
                    <div class="panel-body">
                        <p class="book-title-text">{{book.name}}</p>
                        <div id="pic_left">
                            <img :src="'http://127.0.0.1/assets/img/cover/'+ book.isbn + '.jpg'" alt="cover"/>
                        </div>
                        <div id="info-right">
                            <p>作者 : <strong>{{book.author}}</strong></p>
                            <p>出版社 : <strong>{{book.publisher}}</strong></p>
                            <p>出版日期 : <strong>{{book.pubDate}}</strong></p>
                            <p>页数：{{book.page}}</p>
                            <p>分类：{{book.detail.classification}}</p>
                            <p>ISBN : <strong>{{book.isbn}}</strong></p>
                        </div>
                        <div id="process-bar-right">
                            <p>当前状态</p>
                            <p class="book-title-text" :class="{'text-danger': book.status.numPresent <= 0,
                                'text-success': book.status.numPresent > 0}">{{book.status.numPresent > 0 ? '有库存' : '暂无库存'}}</p>
                        </div>

                    </div>
                    <ul class="list-group">
                        <li class="list-group-item"><p class="text-success"><strong>内容简介  · · · · · ·</strong></p>
                            <p>{{book.detail.summary}}</p>
                        </li>
                    </ul>
                    <ul class="list-group">
                        <li class="list-group-item"><p class="text-success"><strong>作者简介  · · · · · ·</strong></p>
                            <p>{{book.detail.authorSummary}}</p>
                        </li>
                    </ul>
                    <ul class="list-group">
                        <li class="list-group-item"><p class="text-success"><strong>目录  · · · · · ·</strong></p>
                            <p>{{book.detail.categoryDetail}}</p>
                        </li>
                    </ul>
                    <ul class="list-group">
                    <li class="list-group-item"><p class="text-success"><strong>图书状态  · · · · · ·</strong></p>
                        <p>总库存： <strong class="text-info">{{book.status.numEntire}}</strong></p>
                        <p>剩余数量： <strong class="text-success">{{book.status.numPresent}}</strong></p>
                        <!--<p>当前状态： <strong class="text-success">{{book.status.msg}}</strong></p>-->
                    </li>
                    </ul>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <p class="text-success"><strong>图书操作  · · · · · ·</strong></p>
                            <center><button v-if="book.status.numPresent > 0" class="btn btn-info" v-link="'/book/'+ $route.params.bookId + '/borrow'">借阅</button></center>
                            <center><button v-if="book.status.numPresent <= 0" class="btn btn-warning">预约</button></center>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
</template>

<script type="babel">
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
     computed: {

     }
     //console.log(this.$route.params.bookId)
 }

</script>
