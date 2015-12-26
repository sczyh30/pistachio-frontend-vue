<template>
    <div class="row clearfix">
            <div id="register-mn">
                <div class="col-md-10">
                    <div class="panel panel-danger">
                        <div class="panel-heading">
                            <h3 class="panel-title">操作失败</h3>
                        </div>
                        <div class="panel-body text-center">
                            <p>错误信息：{{error.msg}}</p>
                            <p>错误代码：{{error.code}}</p>
                            <p>点击 <a v-link="">这里</a> 返回页面</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script lang="babel">
  export default {
      data() {

      }
  }
</script>

<style>

</style>
