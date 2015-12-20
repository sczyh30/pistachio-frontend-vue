<template>
	<!-- navigation bar -->
	<nav id="navbarMain" class="navbar navbar-default navbar-fixed-top" role="navigation">
	    <div class="container">
	        <div class="navbar-header">
	            <a class="navbar-brand" href="#">Samsara Pistachio</a>
	        </div>
	        <div>
		      <ul class="nav navbar-nav">
		         <li class="active"><a href="#">图书广场</a></li>
		         <li><a href="#">哈哈哈哈</a></li>
		         <li class="dropdown">
		            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
		               用户中心
		               <b class="caret"></b>
		            </a>
		            <ul class="dropdown-menu">
		               <li><a href="#">当前用户：{{user.username}}</a></li>
					   <li class="divider"></li>
		               <li><a href="#">我的图书</a></li>
		               <li><a href="#">我的信息</a></li>
					   <li><a href="#"图书预约</a></li>
		               <li class="divider"></li>
		               <li><a href="#">我的操作纪录</a></li>
		               <li class="divider"></li>
		               <li><a href="#">注销</a></li>
		            </ul>
		         </li>
		      </ul>
		   </div>
	    </div>
	</nav>
	<div class="container">
		<div class="col-md-6 col-md-offset-3">
			<router-view></router-view>
		</div>
	</div>
	<!-- website foot bar -->
	<nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">
	    <div class="container">
	        <div class="navbar-header">
	            <p class="text-center navbar-text">Copyright © 2015, Samsara Pistachio, All Rights Reserved</p>
	        </div>
	        <div class="collapse navbar-collapse" id="ps-nv-col">

	        </div>
	    </div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			msg: 'Samsara Pistachio Frontend'
		}
	}
}
</script>

<style lang="stylus" scoped>

</style>
