<template>
<div class="container">
    <div v-if="$loadingRouteData">正在加载数据...</div>
    <div v-if="!$loadingRouteData">
        <div class="row clearfix">
                <div class="col-md-10">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">读者信息</h3>
                        </div>
                        <div class="panel-body">
                            <p>用户名：<span class="book-title-text">{{user.username}}</span></p>
                            <p>借阅号： <strong class="text-primary">{{user.borrowId}}</strong></p>
                            <p>性别： <strong class="text-success">{{user.role == 1 ? '男':'女'}}</strong></p>
                            <p>个性签名: {{user.tips}}</p>
                            <p></p>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item"><p class="text-primary"><strong>借阅情况  · · · · · ·</strong></p>
                                <p>暂无</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
    </div>
</div>
</template>

<script lang="babel">

export default {
    route: {
        data({to}) {
               const GET_USER_URL = 'http://127.0.0.1:8080/Pistachio/api/user/' + to.params.userId
               return this.$http.get(GET_USER_URL, function (data, status, request) {
                   this.$set('user', data)
               }).error(function (data, status, request) {
                   to.go({name: 'common_error'})
              })
        }
    },
    data() {
         return {
            user: {}
         }
     }
}
</script>

<style>

</style>
