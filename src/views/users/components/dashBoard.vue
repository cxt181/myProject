<template>
    <!--首页-->
    <div class="dashBoard_box">
        <!--销售数据部份-->
        <div class="dashBoard_box_header">
            <!--                <v-Charts></v-Charts>-->
            <!--总销售额-->
            <div class="dashBoard_box_L">
                <p>总销售额</p>
                <div class="dashBoard_box_L_num">
                    <img src="../../../assets/icon_invites.png" :style="{height:'50px',width:'50px'}">
                    <span>12,489</span>
                </div>
                <div class="dashBoard_box_L_bottom">
                    <span>周同比25%</span>
                    <span>日环比12%</span>
                </div>
            </div>
            <!--访问量-->
            <div class="dashBoard_box_L">
                <p>访问量</p>
                <div class="dashBoard_box_L_num">
                    <img src="../../../assets/icon_click.png" :style="{height:'50px',width:'50px'}">
                    <span>1,489</span>
                </div>
                <div class="dashBoard_box_L_bottom">
                    <img src="../../../assets/Graph_blue.png" :style="{height:'38x',width:'214px'}">
                </div>
            </div>
            <!--支付笔数-->
            <div class="dashBoard_box_L">
                <p>支付笔数</p>
                <div class="dashBoard_box_L_num">
                    <img src="../../../assets/icon_reviews.png" :style="{height:'50px',width:'50px'}">
                    <span>12,489</span>
                </div>
                <div class="dashBoard_box_L_bottom">
                    <img src="../../../assets/vertical-chart.png" :style="{height:'38x',width:'214px'}">
                </div>
            </div>
            <!--转化率-->
            <div class="dashBoard_box_L">
                <p>转化率</p>
                <div class="dashBoard_box_L_num">
                    <img src="../../../assets/icon_response.png" :style="{height:'50px',width:'50px'}">
                    <span>70%</span>
                </div>
                <div class="dashBoard_box_L_bottom">
                    <img src="../../../assets/Group.png" :style="{height:'8px',width:'214px'}">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "dashBoard",

        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    /*    工作台页面内容*/
    .dashBoard_box {
        /*background-color: #0054FE;*/
        /*padding-bottom: 120px;*/
        padding-top: 20px;
        width: 100%;
    }

    .dashBoard_box_header {
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        /*background-color: red;*/
        width: 100%;
        margin-left: 10px;
        overflow: hidden;
    }

    /*   总销售额 访问量*/
    .dashBoard_box_L {
        height: 320px;
        flex: 1;
        background-color: #ffffff;
        border-radius: 5px;
        border: solid 1px #e5e5e5;
        text-align: center;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-right:30px;
    }

    .dashBoard_box_L P {
        color: #74798C;
        font-size: 30px;
    }
    /*中间数字*/
    .dashBoard_box_L_num {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .dashBoard_box_L_num span {
        font-size: 40px;
        font-family: 微软雅黑;
        margin-left: 10px;
    }

    .dashBoard_box_L_bottom {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 18px;
        color: #979797;
        overflow: hidden;
    }
</style>
