<template>
	<!-- navigation bar -->
	<nav id="navbarMain" class="navbar navbar-default navbar-fixed-top" role="navigation">
	    <div class="container">
	        <div class="navbar-header">
	            <a class="navbar-brand" href="#!/index">Samsara Pistachio</a>
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target="#navbar-main-top">
					<span class="sr-only">切换导航</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
	        </div>
	        <div class="collapse navbar-collapse" id="navbar-main-top">
		      <ul class="nav navbar-nav ">
				 <li><a href="#!/index">新书速递</a></li>
		         <li><a href="#!/index">图书广场</a></li>
		         <li><a href="#!/book/list">图书检索</a></li>
			 </ul>
			 <ul class="nav navbar-nav navbar-right">
		         <li class="dropdown">
		            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
		               当前用户：sczyh30
		               <b class="caret"></b>
		            </a>
		            <ul class="dropdown-menu">
		               <li><a href="#!/user/5">用户中心</a></li>
					   <li class="divider"></li>
		               <li><a v-link="">我的图书</a></li>
		               <li><a v-link="">我的信息</a></li>
					   <li><a v-link="">图书预约</a></li>
		               <li class="divider"></li>
		               <li><a href="#!/index">我的操作纪录</a></li>
		               <li class="divider"></li>
		               <li><a v-link="">注销</a></li>
		            </ul>
		         </li>
		      </ul>
		   </div>
	    </div>
	</nav>
		<router-view
			class="view"
        	keep-alive
        	transition
        	transition-mode="out-in"></router-view>
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

<style lang="stylus">
.view

  transition opacity .2s ease
  box-sizing border-box
  &.v-enter, &.v-leave
    opacity 0
</style>
