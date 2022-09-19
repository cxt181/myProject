<template>
  <div class="userContent">
      <v-dahBoard/>
      <v-EChart/>
  </div>
</template>
<script>
import dashBoard from "./components/dashBoard";
import ECharts from "./components/ECharts";
    export default {
        name: "index",
        data(){
            return{

            }
        },
        components:{
            'v-dahBoard':dashBoard,
            'v-EChart':ECharts,
        }

    }

</script>

<style lang="scss" scoped>
  .userContent{
    margin-top: 20px;
    width: 100%;
    height:calc(100% - 20px);
    /*background-color: #ff7b51;*/
      margin-bottom: 80px;
  }
    .Box{
        height: 606px;
        background-color: #42b983;
        margin-top: 20px;
    }
</style>
