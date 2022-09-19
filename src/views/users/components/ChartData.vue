<template>
    <!--    <div>数据统计表</div>-->
    <div class="chartBox">
        <!--        <p>{{chartsHeader}}</p>-->
        <div id="main"></div>
        <div class="saleCard">
            <p>
                门店销售额排名
            </p>
            <div class="saleCard_list" v-for="(item,index) in saleList" :key="index">
                <p>{{item.id}}</p>
                <div class="saleCard_list_sale">
                    <span>{{item.name}}</span>
                    <span>{{item.saleNum}}</span>
                </div>

            </div>
        </div>
    </div>
    <!--数据统计-热门搜索，销售类别的样式-->
    <div class="dataBox">
        <div class="dataBox_right">
            <p>线上热门搜索</p>

            <div class="demo-progress" v-for="(item,index) in this.customColors">
                <p>{{item.title}}</p>
                <el-progress
                        :percentage="item.percentage"
                        :color="item.color"
                height="30px"/>
            </div>
        </div>
<!--       右侧栏 /-->
        <div class="dataBox_left">
            <div id="main2"></div>
        </div>
    </div>
</template>

<script>
    import * as echarts from 'echarts'

    export default {
        name: "ChartData",
        //获取组件从父组件传过来的数值
        props: ['chartsHeader'],
        data() {
            return {
                charts: '',
                saleList: [
                    {
                        name: "一号店",
                        saleNum: "4568",
                        id: 1
                    },
                    {
                        name: "二号店",
                        saleNum: "3568",
                        id: 2
                    },
                    {
                        name: "三号店",
                        saleNum: "2568",
                        id: 3
                    },
                    {
                        name: "四号店",
                        saleNum: "1568",
                        id: 4
                    },
                    {
                        name: "五号店",
                        saleNum: "1468",
                        id: 5
                    },

                ], //销售额店排名
                customColors: [
                    {
                        color: '#B620E0',
                        percentage: 20,
                        title:"船鱿"
                    },
                    {
                        color: '#B620E0',
                        percentage: 40,
                        title:"墨鱼"
                    },
                    {
                        color: '#B620E0',
                        percentage: 60,
                        title:"软糖"
                    },
                    {
                        color: '#B620E0',
                        percentage: 80,
                        title:"鱿鱼丝"
                    },
                    {
                        color: '#B620E0',
                        percentage: 100,
                        title:"本港鱿鱼"
                    },
                ] // 滑动条的数据
            }
        },
        methods: {
            //柱形图
            drawPie(id) {
                this.charts = echarts.init(document.getElementById(id));//设定表格展示的地址
                this.charts.setOption({
                    title: {
                        text: this.chartsHeader
                    },
                    //x轴的显示月份
                    xAxis: {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                    },

                    //y轴的显示
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} 万'
                        }
                    },
                    //统计图显示的数据
                    series: [
                        {
                            name: '销售量',
                            data: [10, 20, 10, 20, 7, 10, 13, 15, 9, 12, 15, 18],
                            type: 'bar',
                            showBackground: true,
                            backgroundStyle: {
                                color: 'rgba(180, 180, 180, 0.2)'
                            }
                        }
                    ]
                })
            },
            // 组件传值，
            sepprops(name) {
                console.log(name);
                if (name == '全年') {
                    this.charts.setOption({
                        series: [
                            {
                                name: '销售量',
                                data: [120, 200, 150, 80, 70, 110, 130, 150, 110, 120, 145, 189],
                                type: 'bar',
                                showBackground: true,
                                backgroundStyle: {
                                    color: 'rgba(180, 180, 180, 0.2)'
                                }
                            }
                        ]
                    })
                } else if (name == '本周') {
                    this.charts.setOption({
                        series: [
                            {
                                data: [10, 30, 50, 80, 70, 10, 30, 50, 10, 20, 14, 18],
                                type: 'bar',
                                showBackground: true,
                                backgroundStyle: {
                                    color: 'rgba(180, 180, 180, 0.2)'
                                }
                            }
                        ]
                    })
                } else if (name == '本月') {
                    this.charts.setOption({
                        series: [
                            {
                                data: [15, 35, 55, 85, 75, 15, 35, 55, 15, 25, 15, 15],
                                type: 'bar',
                                showBackground: true,
                                backgroundStyle: {
                                    color: 'rgba(180, 180, 180, 0.2)'
                                }
                            }
                        ]
                    })
                } else {
                    this.charts.setOption({
                        series: [
                            {
                                name: '销售量',
                                data: [10, 20, 10, 20, 7, 10, 13, 15, 9, 12, 15, 18],
                                type: 'bar',
                                showBackground: true,
                                backgroundStyle: {
                                    color: 'rgba(180, 180, 180, 0.2)'
                                }
                            }
                        ]
                    })
                }

            },
            // 饼图Nightingale Chart
            drawPie2(id){
                this.charts = echarts.init(document.getElementById(id));//设定表格展示的地址
                this.charts.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    //标注
                    legend: {
                        left: 'center',
                        top: 'bottom',
                        data: [
                            '鱼胶',
                            '鲍鱼',
                            '海参',
                            '鱿鱼丝',
                            '大黄鸡',
                        ]
                    },
                    // toolbox: {
                    //     show: true,
                    //     feature: {
                    //         mark: { show: true },
                    //         dataView: { show: true, readOnly: false },
                    //         restore: { show: true },
                    //         saveAsImage: { show: true }
                    //     }
                    // },
                    //数据绑定
                    series: [
                        {
                            name: '种类',
                            type: 'pie',
                            radius: [20, 140],
                            center: ['50%', '50%'],
                            roseType: 'area',
                            itemStyle: {
                                borderRadius: 5
                            },
                            left:'center',
                            top:"center",
                            // height: "54%",
                            label: {
                                show: true
                            },
                            emphasis: {
                                label: {
                                    show: true
                                }
                            },
                            data: [
                                { value: 40, name: '鱼胶' },
                                { value: 33, name: '鲍鱼' },
                                { value: 28, name: '海参' },
                                { value: 22, name: '鱿鱼丝' },
                                { value: 20, name: '大黄鸡' },
                                { value: 15, name: '马胶鱼' },
                            ]
                        }
                    ]
                })
            }

        },
        mounted() {
            this.drawPie('main');
            this.drawPie2('main2')
        }

    }
</script>

<style scoped lang="scss">

    /*<!--    统计图样式-->*/
    .chartBox {
        background-color: #ffffff;
        width: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-right: 20px;
    }

    #main {
        width: 1200px;
        height: 600px;
        /*background-color: #0054FE;*/

    }

    /* 右侧列表数据*/
    .saleCard {
        width: calc(100% - 1200px);
        height: 100%;
        /*background-color: #42b983;*/
        P {
            color: #333333;
            font-size: 22px;
        }

        .saleCard_list {
            color: #74798C;
            font-size: 18px;
            margin-top: 10px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            P {
                color: #333333;
                font-size: 18px;
            }

            .saleCard_list_sale {
                margin-left: 30px;
                background-color: #efefef;
                width: 300px;
                height: 50px;
                text-align: left;
                line-height: 50px;
                padding-left: 30px;
                border-radius: 8px;

                span {
                    margin-right: 20px;
                }
            }
        }
    }

    /*    数据统计-热门搜索，销售类别的样式*/
    .dataBox {

        height: 600px;
        width: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 80px;

        .dataBox_right {
            width: 49%;
            height: 100%;
            background-color: #ffffff;
            padding-left: 30px;
            padding-top: 30px;

            P {
                font-size: 19px;
                color: #333333;
                font-weight: bolder;
                margin-bottom: 15px;
            }
        }

        .dataBox_left {
            width: calc(100% - 50%);
            height: 100%;
            background-color: #ffffff;
        }
    /*    Element UI的 滑动条的样式*/

        .demo-progress .el-progress--line {
            margin-bottom: 15px;
            width: 95%;
            height: 50px;
        }
    /*    右侧伞形统计图样式*/
        #main2{
            width: 100%;
            height: 100%;
            /*background-color: #0054FE;*/
        }
    }
</style>
