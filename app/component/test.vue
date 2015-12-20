<template>
<table class="table table-striped">
<caption>Samsara Pistachio Function Unit Test</caption>
   <thead>
      <tr>
         <th>序号</th>
         <th>书名</th>
         <th>作者</th>
         <th>价钱</th>
      </tr>
   </thead>
	<tbody>
		<tr v-for="bookd in booksd">
			<td>{{bookd.id}}</td>
			<td>{{bookd.name}}</td>
			<td>{{bookd.author}}</td>
			<td>{{bookd.price}}</td>
		</tr>
	</tbody>
</table>

</template>

<script>
export default {
	data() {
		return {
			booksd: [{
                id: 1,
                author: '曹雪芹',
                name: '红楼梦',
                price: 32.0
            }, {
                id: 2,
                author: '施耐庵',
                name: '水浒传',
                price: 30.0
            }, {
                id: '3',
                author: '罗贯中',
                name: '三国演义',
                price: 24.0
            }, {
                id: 4,
                author: '吴承恩',
                name: '西游记',
                price: 20.0
            }]
		}
	}
}
</script>

<style>

</style>
