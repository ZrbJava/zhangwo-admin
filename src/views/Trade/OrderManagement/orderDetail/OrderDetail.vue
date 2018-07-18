<template>
    <div class="orderDetail">
         <div class="head mb15">
              <div class="title">订单详情-订单列表</div>
                <div @click="goOrderDetail" class="goBack">返回订单列表</div>
         </div>
         <!-- <h1>{{this.$route}}</h1> -->
         <h1>当前得产品id为：{{this.$route.params.id}}</h1>
    </div>
</template>

<script>
    export default {
        data(){

        },
        methods:{
            goOrderDetail(){
                // this.$router.go(-1);
                this.$router.push({name:"OrderManagement"});
            }
        },
        
    }
</script>

<style scoped lang="less">
.orderDetail{
    background:#fff;
    padding: 0 14px;
    .head{
        display:flex;
        height: 46px;
        justify-content: space-between;
        align-items:center;
        border-bottom: 2px solid #e6e6e6;
    }
    .title {
      font-size: 16px;
      font-weight: 600;
      color: #1a191e;
}
    .goBack{
        width:130px;
        height:32px;
        background:#FB9F24;
        border-radius:1px;
        float:right;
        font-size: 14px;
        color:#fff;
        text-align:center;
        line-height:32px;
        cursor: pointer;
    }
}

</style>