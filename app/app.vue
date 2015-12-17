<template lang="jade">
.container
	.col-md-6.col-md-offset-3
		h1 Samsara Pistachio
		#book_area
			comp-test


</template>

<script>
import CompTest from './component/test.vue'

export default {
	data() {
		return {
			msg: 'Samsara Pistachio Frontend'
		}
	}, components: {
    CompTest
  }
}
</script>

<style lang="stylus">

</style>
