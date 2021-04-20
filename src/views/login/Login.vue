<template>
        <div id="login">
                <vue-particles color="#FF5777"
                               :particleOpacity="0.6"
                               :particlesNumber="100"
                               shapeType="circle"
                               :particleSize="4"
                               linesColor="#FF5777"
                               :linesWidth="1"
                               :lineLinked="true"
                               :lineOpacity="0.4"
                               :linesDistance="130"
                               :moveSpeed="2"
                               :hoverEffect="true"
                               hoverMode="grab"
                               :clickEffect="true"
                               clickMode="push"
                               class="bg">
                </vue-particles>
                <div class="box">
                        <el-input v-model="user"
                                  placeholder="请输入账号"
                                  prefix-icon="el-icon-user"></el-input>
                        <el-input placeholder="请输入密码"
                                  prefix-icon="el-icon-unlock"
                                  v-model="password"
                                  show-password></el-input>
                        <el-button type="primary"
                                   size="medium"
                                   class="submit"
                                   @click="submit">立即登录</el-button>
                </div>
        </div>
</template>

<script>
import * as api from "../../network/api";
export default {
        name: "Login",
        components: {},
        data () {
                return {
                        user: "",
                        password: "",
                };
        },
        created () {
                this.init();
        },
        methods: {
                //初始化数据，请求默认数据
                init () {
                        //读取localStorage
                },
                submit () {
                        //获取token
                        api.login(this.user, this.password)
                                .then((res) => {
                                        console.log(res);
                                        if (res.token) {
                                                this.$message.success({
                                                        message: '登陆成功',
                                                        center: true
                                                });
                                                localStorage.token = res.token;
                                                localStorage.user = res.user;
                                                this.$router.push({
                                                        path: "/profile",
                                                        name: "Profile",
                                                });
                                        } else {
                                                this.$message.error({
                                                        message: res.msg,
                                                        center: true
                                                });
                                        }
                                })
                                .catch((err) => {
                                        console.log(err);
                                });
                },
        },
};
</script>

<style scoped>
.box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 200px;
        margin: auto;
        height: 130px;
        margin-top: 180px;
}
.submit {
        width: 100%;
}

.bg {
        width: 100%;
        height: 100%;
        background: #fcfcfc;
        position: absolute;
        z-index: -1;
        top: 0;
        overflow: hidden;
}
</style>
