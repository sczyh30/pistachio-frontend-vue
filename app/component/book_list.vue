<template>
    <div class="container">
        <div v-if="$loadingRouteData">正在加载数据...</div>
        <div v-if="!$loadingRouteData">
            <div id="search-area">
                <input placeholder="请输入要检索的内容..." v-model="ST">
                检索条件：<input type="radio" id="name_radio" value="name" v-model="picked">
                <label for="zero">书名</label>
                <input type="radio" id="isbn_radio" value="isbn" v-model="picked">
                <label for="one">ISBN</label>
                <input type="radio" id="author_radio" value="author" v-model="picked">
                <label for="two">作者</label>
                <input type="radio" id="pbl_radio" value="publisher" v-model="picked">
                <label for="three">出版社</label>
            </div>

            <table class="table table-striped">
            <caption>图书检索</caption>
               <thead>
                  <tr>
                     <th>ISBN</th>
                     <th>书名</th>
                     <th>作者</th>
                     <th>出版社</th>
                     <th>出版日期</th>
                     <th>页数</th>
                  </tr>
               </thead>
            	<tbody>
            		<tr v-for="book in books | filterBy ST in picked">
            			<td>{{book.isbn}}</td>
            			<td><a v-link="'/book/' + book.isbn">{{book.name}}</a></td>
            			<td>{{book.author}}</td>
            			<td>{{book.publisher}}</td>
                        <td>{{book.pubDate}}</td>
                        <td>{{book.page}}</td>
            		</tr>
            	</tbody>
            </table>
        </div>
</div>
</template>

<script type="babel">
 export default {
 	route: {
        data({to}) {
            return this.$http.get('http://127.0.0.1:8080/Pistachio/api/book/latest',function (data, status, request) {
     			this.$set('books', data)
     		}).error(function (data, status, request) {
     			// handle error
                //this.$route.go({path: '/404'})
     		})
        }

 	}
 }
</script>

<style scoped>
.staggered-transition {
    transition: all .2s ease;
    overflow: hidden;
    margin: 0;
    height: 20px;
     [v-cloak] { display: none }
}
.staggered-enter, .staggered-leave {
    opacity: 0;
    height: 0;
}
</style>
