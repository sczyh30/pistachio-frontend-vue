<template>
    <div class="container">
        <div class="row clearfix">
                <div class="col-md-10">
                    <div class="panel panel-success">
                        <div class="panel-heading">
                            <h3 class="panel-title">登录</h3>
                        </div>
                        <div class="panel-body">
                            <p>用户名：<input type="text" name="username" class="form-control" placeholder="用户名" v-model="inp_username"></p>
                            <p>密码：<input type="password "name="username" class="form-control" placeholder="密码" v-model="inp_password"></p>
                            <center>
                                <button class="btn btn-success">登录</button>
                                <button type="reset" class="btn btn-warning">清除</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
          </div>
</template>

<script lang="babel">

export default {

}
</script>

<style>

</style>
