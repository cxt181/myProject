<template>
    <div class="common-layout ">
        <el-container class="app-wrapper">
            <el-aside width="210px" class="sidebar-container">

                 <Menu/>
            </el-aside>
            <el-container class="container">
                <el-header >
                    <v-Header/>
                </el-header>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import menu from "./menu/index";
import header from './header/index'

    export default {
        name: "index",
        data(){
            return{}
        },
        components:{
            'Menu' :menu,
            'v-Header':header,
        }

    }
</script>
<style scoped lang="scss">
    .app-wrapper{
        background-color: #0054FE;
    }
    .app-container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .container {
        /*width: calc(100% - $sideBarWidth);*/
        /*width: calc(100% - 210px);*/
        width: calc(100% - 210px);;
        height: 100%;

        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        transition: all 0.28s;
        background-color: #eaebef;

        &.hidderContainer {
            width: calc(100% - 67px);
        }
    }

    ::v-deep .el-header {
        padding: 0;
    }


</style>
