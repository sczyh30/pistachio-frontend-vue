<template>
    <table class="table table-striped">
    <caption>Samsara Pistachio 测试 - 最新图书</caption>
       <thead>
          <tr>
             <th>ISBN</th>
             <th>书名</th>
             <th>作者</th>
             <th>出版社</th>
             <th>页数</th>
          </tr>
       </thead>
    	<tbody>
    		<tr v-for="book in books">
    			<td>{{book.isbn}}</td>
    			<td><a v-link="'/book/' + book.isbn">{{book.name}}</a></td>
    			<td>{{book.author}}</td>
    			<td>{{book.publisher}}</td>
                <td>{{book.page}}</td>
    		</tr>
    	</tbody>
    </table>
</template>

<script type="babel">
 export default {
 	ready() {
 		this.$http.get('http://127.0.0.1:8080/Pistachio/api/book/latest',function (data, status, request) {
 			this.$set('books', data)
 		}).error(function (data, status, request) {
 			// handle error
            //$route.go({name: 'common_error'})
 		})
 	}
 }
</script>

<style type="text/css" scoped>

</style>
