<template>
    <div class="EChartBox">
        <!--数据统计头部-->
        <div class="dashBoard_box_chart_top">
            <p>销售数据</p>
            <div class="dashBoard_box_chart_R">
                <el-row>
                    <el-button :type='[code=="1"?"primary":null]' @click="changBtn(1,'今日')">今日</el-button>
                    <el-button :type='[code=="2"?"primary":null]' @click="changBtn(2,'本周')">本周</el-button>
                    <el-button :type='[code=="3"?"primary":null]' @click="changBtn(3,'本月')">本月</el-button>
                    <el-button :type='[code=="4"?"primary":null]' @click="changBtn(4,'全年')">全年</el-button>
                </el-row>
                <!--日期选择-->
                <div class="block">
                    <el-date-picker
                            v-model="value1"
                            type="monthrange"
                            range-separator="-"
                            start-placeholder="开始月份"
                            end-placeholder="结束月份"
                            align=" center"
                            unlink-panels="false"
                    >
                    </el-date-picker>
                </div>
            </div>
        </div>
        <!--统计图部分-->
        <v-ChartData  ref="child" />


    </div>
</template>
<script>
    import ChartData from "./ChartData";
    export default {
        name: "ECharts",
        data() {
            return {
                //按钮样式切换
                code: 1,
                value1: '',//日期的值

            }
        },
        methods: {
            //按钮切换
            changBtn(data,str) {
                this.code = data;
                this.$refs.child.sepprops(str);
            },
        },
        components:{
            'v-ChartData':ChartData
        },
    }
</script>

<style scoped lang="scss">
    .EChartBox {
        /*background-color: #42b983;*/
        width: calc(100% - 30px);
        /*margin-right: 40px;*/
        margin-left: 10px;
        overflow: hidden;
        margin-top: 30px;
        /*height: 100%;*/
    }

    .dashBoard_box_chart_top {
        text-align: center;
        height: 80px;
        border-radius: 5px;
        background-color: #ffffff;
        line-height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }

    .dashBoard_box_chart_R {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .block {
        /*background-color: #1E2F4B;*/
        width: 600px;
        margin-left: 30px;

    }

    ::v-deep .el-range-editor {
        height: 40px;
    }
</style>
