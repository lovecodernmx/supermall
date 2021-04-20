<template>
        <div id="message">

                <!-- <div>
                        <div class="send">
                                <el-input v-model="input" placeholder="请输入内容"></el-input>
                                <el-button type="success">成功按钮</el-button>
                        </div>
                </div> -->
                <div class="nav">
                        <div class="el-icon-arrow-left fz-xl"></div>
                        <div class="diary">留言</div>
                        <div class="el-icon-refresh fz-xl"></div>
                </div>
                <div v-for="item in message_list"
                     :key="item.id"
                     class="box">
                        <div>
                                <img src="https://file.nmxgzs.cn/upload/images/head.jpg"
                                     class="head"
                                     alt="">
                        </div>
                        <div>
                                <p>{{ item.CONTENT }}</p>
                        </div>
                </div>
                <!-- <div class="learnWords">
                        <p>❤️因为我选择了你❤️</p>
                        <p>❤️所以我不会再爱任何人了❤️</p>
                        <p>既然遇见你</p>
                        <p>❤️希望余生都是你❤️</p>
                        <p>今生今世除了你</p>
                        <p>我谁都不想要</p>
                        <p>❤️你若一直在，我便一直爱❤️</p>
                        <p>今生无怨无悔</p>
                        <p>若有来世</p>
                        <p>❤️我还会选择爱你❤️</p>
                </div> -->
                <vue-particles color="#FF5777"
                               :particleOpacity="0.6"
                               :particlesNumber="50"
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
                <div style="margin-bottom: 50px"></div>
        </div>
</template>

<script>
import * as api from "../../network/api";
export default {
        name: "Message",
        components: {},
        data () {
                return {
                        message_list: [],
                };
        },
        created () {
                this.init();
        },
        methods: {
                //初始化数据，请求默认数据
                init () {
                        api.get_message() //获取日记列表
                                .then((res) => {
                                        console.log(res);
                                        this.message_list = res.DATA;
                                })
                                .catch((err) => {
                                        console.log(err);
                                });
                },
        },
};
</script>

<style scoped>
#message {
        overflow-x: hidden;
}
.learnWords p {
        text-align: center;
        line-height: 36px;
        font-size: 18px;
        color: #f30;
}
.box {
        width: 100%;
        height: 90px;
        display: flex;
        align-items: center;
        border-bottom: 1px dashed #280bc1;
        font-size: 14px;
        color: #f65608;
}
.head {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
}
.send {
        display: flex;
}

.bg {
        width: 100%;
        height: 1140px;
        position: absolute;
        top: 0;
        z-index: -1;
}
</style>