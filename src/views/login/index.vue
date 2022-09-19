<template>
    <div class="back">
        <div class="mask">
            <img src="../../assets/mask.png" class="img">
            <div class="contentBox">
                <p class="p">欢迎登录</p>
                <!--账号和密码                -->
                <div class="chanTab">
                    <div class="chanTab-head">
                        <p @click="changTab(1)" :class="[ifShow==1?'activeTba':'activeTbaN']">账号密码登录</p>
                        <p @click="changTab(2)" :class="[ifShow==2?'activeTba':'activeTbaN']">手机号登录</p>
                    </div>
                    <ul v-show=" ifShow==1">
                        <li>
                            <input type="text" class="img2" v-model="userName" placeholder="请输入你的账号">
                        </li>
                        <li>
                            <input type="text" class="img1" v-model="password" placeholder="请输入你的密码">
                        </li>
                    </ul>
                    <ul v-show="ifShow==2">
                        <li>
                            <input type="text" placeholder="请输入手机号" v-model="phone">
                        </li>
                        <li>
                            <input type="text" placeholder="请输入验证码" v-model="code">
                        </li>
                    </ul>

                </div>
                <div class="btnBox">
                    <p>忘记密码</p>
                    <div class="btn" @click="loginData">登录</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userName: "",//账号
                password: "", // 密码
                phone: "",//电话
                code: "",//
                ifShow: 1,
            }
        },
        methods: {
            changTab(data) {
                this.ifShow = data;
                console.log(data)
            },
            loginData(){
                alert("登录成功")
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
    }

    .mask {
        width: 1280px;
        height: 700px;
        background: #ffffff;
        border: #979797 1px;
        border-radius: 5px;
        margin: 90px auto; /*居中    */
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .img {
        width: 602px;
        height: 452px;
    }

    .contentBox {
        width: 550px;
        height: 570px;
        /*background-color: red;*/
        padding: 30px;
    }

    .contentBox .p {
        font-size: 28px;
        color: black;
        font-weight: bold;

    }
    .chanTab{
        margin-top: 15px;
    }
    .contentBox ul li {
        font-size: 20px;
        /*color: aqua;*/
        margin-bottom: 40px;
    }

    .contentBox input {
        width: 385px;
        height: 50px;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-bottom: 10px;
        outline: none;


    }

    .contentBox .img1 {
        /*输入框文本*/
        background: url("../../assets/password.png") no-repeat 10px;
        background-size: 16px 17px;
        padding-left: 30px;

    }

    .contentBox .img2 {
        /*输入框文本*/
        background: url("../../assets/username.png") no-repeat 10px;
        background-size: 16px 17px;
        padding-left: 30px;
    }

    /*文本框内文字*/
    input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #cccccc;
        padding-left: 10px;
        font-size: 14px;
    }

    input::-moz-placeholder { /* Firefox 19+ */
        color: #cccccc;
        padding-left: 20px;
    }

    input:-ms-input-placeholder { /* IE 10+ */
        color: #cccccc;
        padding-left: 20px;
    }

    input:-moz-placeholder { /* Firefox 18- */
        color: #cccccc;
        padding-left: 20px;
    }

    /*    账号登录和手机号登录的样式*/
    .chanTab-head {
        display: flex;
        justify-content: space-between;
        width: 282px;
        height: 48px;
        margin: 18px auto;
        justify-items: center;
        text-align: center;
    }

    .activeTbaN {
        font-size: 18px;
        font-weight: bolder;
        color: #666666;
    }

    .activeTba {
        color: #0054FE;
        font-size: 18px;
        border-bottom: 4px solid #0054FE;
        padding-bottom: 30px;
    }

    /*    登录按钮*/
    .btnBox{
        width: 385px;
        /*background-color: blue;*/
        margin: auto 102px;

    }
    .btn{
        width: 384px;
        height: 50px;
        border: 2px solid #c7c7c7;
        text-align: center;
        line-height: 50px;
        border-radius: 5px;
        background-color:#0054FE;
        color: #ffffff;
    }
    .btnBox p{
        font-size: 16px;
        color: #979797;
        text-underline: #979797 ;
        padding-left: 300px;
    }
</style>
