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
                                <button class="btn btn-success" @click="login">登录</button>
                                <input type="reset" class="btn btn-warning"></input>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
          </div>
</template>

<script lang="babel">
import { SHA256 } from '../service/encrypt'
import LocalStorage from '../service/storage'

const LOGIN_API = 'http://127.0.0.1:8080/Pistachio/api/login'

export default {
    data () {
        return {
            inp_username: '',
            inp_password: ''
        }
    },
    methods: {
        login: function () {
            const encrypt_pwd = SHA256(this.inp_password)
            var resource = this.$resource(LOGIN_API)
            // post
            resource.post({username: this.inp_username, password: encrypt_pwd})
                .then(response => {
                    //this.$set('user', response.user)
                    LocalStorage.setItem('user', response.user)
                }, response => {
                    // handle error
                })
        }
    }
}
</script>

<style>

</style>
