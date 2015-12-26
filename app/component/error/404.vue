<template lang="jade">
.container
	.row.clearfix
		.col-lg-10
			.panel.panel-danger
				.panel-heading
					h3.panel-title 404
				.panel-body.text-center
					p.book-title-text.text-danger 你来到了没有书籍的荒原
					p 点击 <a v-link="{name: 'index_page'}">这里</a> 返回主页
</template>

<script type="babel">
 export default {
 	data() {

 	}
 }
</script>

<style>

</style>
