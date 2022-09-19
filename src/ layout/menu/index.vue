<template>
    <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="defaultActive"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            router
            unique-opened
    >
        <el-sub-menu :index="item.id"
                     v-for="(item,index) in this.MenuList" :key="item.id"
        >
                <template #title>
                        <el-icon>
                            <component :is="this.MenuIcon[index]">

                            </component>
                        </el-icon>
                        <span>{{item.title}}</span>

                </template>

                <el-menu-item :index="'/'+t.path" v-for="(t,c) in item.children" :key="t.id"
                              @click="savePath(t.path)"
                >
<!--                    <el-icon><Grid /></el-icon>-->
                    {{t.name}}

                </el-menu-item>

        </el-sub-menu>
    </el-menu>
</template>

<script>
    export default {


        name: "menu",
        data(){
            return{
                activeColor:'red',
                //列表名称
                MenuList:[

                    {
                        title:"首页",
                        id:100,
                        children:[
                            {
                                id:'101',
                                name:'数据分析',
                                path:'users'
                            }
                        ]

                    },
                    {
                        title:"商品管理",
                        id:200,
                        children:[
                            {
                                id:'202',
                                name:'商品列表',
                                path:'goods'
                            }
                        ]

                    },

                    {
                        title:"表单状态",
                        id:300,
                        children:[
                            {
                                id:'302',
                                name:'基础表单',
                                path:'from'
                            }
                        ]

                    },
                    {
                        title:"用户管理",
                        id:400,
                        children:[
                            {
                                id:'401',
                                name:'用户列表',
                                path:'roles'
                            }
                        ]

                    },

                ],
                //列表ico
                MenuIcon:[
                    'coin',
                    'shop',
                    'list',
                    'user',
                ],
                //defaultActive
                defaultActive:'users'
            }
        },
        methods:{
             handleOpen:(key, keyPath ) => {
                console.log(key, keyPath)
            },
            handleClose : (key, keyPath) => {
                console.log(key, keyPath)
            },
            savePath(path){
                 sessionStorage.setItem('path','/'+path);
                console.log('/'+path)
            },
            //左侧栏与内容栏，刷新后左侧栏与内容栏显示统一
            setPath(){
                if(sessionStorage.getItem('path')!==null){
                    console.log(sessionStorage.getItem('path'));
                    this.defaultActive=sessionStorage.getItem('path');
                    console.log('2')
                }else {
                    this.defaultActive='./users';
                    console.log('1')
                }
            }
        },
        //页面加载是更新
        mounted() {
            this.setPath();
        }
    }
</script>

<style scoped lang="scss">
.el-sub-menu{
    /*margin-bottom: 20px;*/
     font-size: 50px;

 }



</style>
