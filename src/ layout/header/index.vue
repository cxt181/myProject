<template>
    <div class="navbar">

        <div class="navbar-right">
            <img src="../../assets/Path.png" class="tip_img">
            <el-dropdown>
               <span class="el-dropdown-link">
                   <img src="../../assets/avatar.png" class="name_img">

                </span>
                <template #dropdown>
                    <el-dropdown-item @click="signOut">退出</el-dropdown-item>
                </template>
            </el-dropdown>
            <P>我的名字</P>
        </div>
    </div>

</template>

<script>
    export default {
        name: "index",
        data(){
            return{

            }
        },
        methods:{
            signOut(){
                this.$router.replace('/login');
                console.log('1')
            }
        }
    }
</script>

<style scoped lang="scss">
    .navbar {
        width: 100%;
        height: 80px;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        padding: 18px 16px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        position: relative;

        .navbar-right {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            /*background-color:red;*/
            padding-right: 30px;

            ::v-deep .navbar-item {
                display: inline-block;
                margin-left: 18px;
                font-size: 22px;
                color: #5a5e66;
                box-sizing: border-box;
                cursor: pointer;
            }
        }

        .tip_img {
            width: 22px;
            height: 22px;
            margin-right: 20px;
            margin-left: 20px;
        }

        .name_img {
            width: 48px;
            height: 48px;
            border-radius: 20px;
            /*background-color: #0054FE;*/
            margin-right: 20px;
            margin-left: 20px;
            overflow: hidden;
        }
    }

</style>
