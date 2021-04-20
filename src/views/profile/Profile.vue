<template>
        <div id="profile">
                <vue-particles color="#FF5777"
                               :particleOpacity="0.6"
                               :particlesNumber="70"
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
                               class="bg_li">
                </vue-particles>
                <div class="bg">

                        <div class="card">
                                <div class="head_box">
                                        <img src="https://file.nmxgzs.cn/upload/images/head.jpg"
                                             alt=""
                                             class="head" />
                                        <!-- <div class="name">你好，{{ info.user }}</div> -->
                                </div>
                                <!-- <a href="https://blog.csdn.net/qq_31754591"
                                   target="_blank"
                                   rel="noopener noreferrer">CSDN博客中心</a> -->
                                <div class="nick">登录用户：{{user}}</div>
                        </div>


                        <div class="cell_box">

                                <div class="cell"
                                @click="to_tools">
                                        <div>
                                                <span class="el-icon-sunny icon"></span>
                                                <span>工具</span>
                                        </div>
                                        <span class="el-icon-arrow-right"></span>
                                </div>
                                <div class="cell"
                                     @click="to_photo_list">
                                        <div>
                                                <span class="el-icon-star-off icon"></span>
                                                <span>相册</span>
                                        </div>
                                        <span class="el-icon-arrow-right"></span>
                                </div>

                                <div class="cell"
                                     @click="setting">
                                        <div>
                                                <span class="el-icon-setting icon"></span>
                                                <span>设置</span>
                                        </div>
                                        <span class="el-icon-arrow-right"></span>
                                </div>
                        </div>
                </div>

        </div>
</template>

<script>
import * as api from "../../network/api";
export default {
        name: "Profile",
        components: {},
        data () {
                return {
                        user:null,
                        info: {
                                user: null,
                        },
                };
        },
        created () {
                this.init();
        },
        methods: {
                //初始化数据，请求默认数据
                init () {
                        this.user = localStorage.getItem('user')

                },
                // 跳转到相册
                to_photo_list () {
                        this.$router.push({ path: "/photo_list", name: "Photo_list", });
                },
                //跳转设置
                setting () {
                        this.$router.push({ path: "/setting", name: "Setting", });
                },
                //跳转
                to_tools(){
                        this.$router.push({ path: "/tools", name: "Tools", });
                }
        },
};
</script>
<style scoped>
/* localStorage.setItem(key,value);
读取数据：localStorage.getItem(key); */
.bg {
        position: absolute;
        z-index: -999;
        width: 100%;
        height: 200px;
        background: url(../../assets/img/my/bg.jpg);
        /* filter: blur(0.5px);Chrome, Opera */

}
.name {
        color: #ffffff;
        text-align: center;
        font-size: 30px;
}
.login_out {
        position: absolute;
        bottom: 61px;
        width: 100%;
        text-align: center;
}
.head {
        width: 60px;
        height: 60px;
        
        
        
}
.head_box {
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        border: 1px dashed #CCCCCC;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;
}
.card {
        width: 340px;
        height: 100px;
        background: #ffffff;
        border-radius: 9px;
        margin: auto;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
        display: flex;
        align-items: center;
        margin-top: 15px;
        text-align: center;
        margin-top: 120px;
       
        justify-content: center;
        
}

.cell_box {
        width: 100%;
        padding-left: 30px;
        padding-right: 20px;
        /* background: #000; */
}
.cell {
        display: flex;
        justify-content: space-between;
        height: 45px;
        border-bottom: 1px solid #e1e1e1;
        align-items: center;
}
.icon {
        margin-right: 10px;
}
.write {
        text-align: center;
        margin: 5px;
}
.bg_li {
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: -1000;
}
</style>
