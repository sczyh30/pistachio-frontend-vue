<template>
    <div class="container">
    <div class="row clearfix">
            <div class="col-md-10">
                <div class="panel panel-danger">
                    <div class="panel-heading">
                        <h3 class="panel-title">获取数据失败</h3>
                    </div>
                    <div class="panel-body text-center">
                        <p>错误信息：{{err.msg}}</p>
                        <p>错误代码：<strong class="text-danger">{{err.code}}</strong></p>
                        <p>请刷新页面重试</p>
                    </div>
                </div>
            </div>
        </div>
</div>

</template>

<script type="babel">
 export default {
    props: ['err'],
 	data() {

 	}
 }
</script>

<style>

</style>
