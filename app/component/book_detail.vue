<template>
    <p>Test - Book Detail</p>
    {{book.author}}
    {{$route.params.bookId}}
</template>

<script type="babel">
 const BOOK_API = 'http://127.0.0.1:8080/Pistachio/api/book/'

 export default {
     data() {
        //console.log($route.params.bookId)
     },
     ready() {
         this.$http.get(BOOK_API, function (data, status, request) {
      		//if(data.code == 200)
      		this.$set('book', data)
      		//else
      		//this.$set('error', data)
      	}).error(function (data, status, request) {
            $route.go({name: 'common_error'})
        })
    }
     //console.log(this.$route.params.bookId)
 }

</script>
