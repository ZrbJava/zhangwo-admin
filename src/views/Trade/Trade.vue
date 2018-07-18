<template>
    <div class="Trade">
        <head-nav currentNav="2"></head-nav>     
         <div class="container">
            <!-- 左侧导航 -->
            <div class="aside-left-box">
                <aside-left class="aside-left" :asideList="asideList"></aside-left>
            </div>
            <!-- 右侧路由视窗 -->
            <div class="router-view-box">
                <!-- 右边 -->
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>   
        
    </div>
</template>

<script>
   import HeadNav from '@/components/HeadNav/HeadNav'
   import AsideLeft from '@/components/AsideLeft/AsideLeft'
   
    export default {
        components:{
            HeadNav,
            AsideLeft,
        },
        data(){
             return{
                 asideList:[
                     {name:'订单管理',route:"OrderManagement"},
                     {name:'退款/退货管理',route:"Refund"},
                     {name:'交易设置',route:"TradeSetting"}
                     ],
            }
        },
        
    }
</script>

<style scoped lang="less">
.Trade{
    height: 100vh;
    overflow: hidden;
}
.container{
    width: 100%;
    height: calc(100% - 65px);
    padding-top: 65px;
    display: flex;
     .aside-left-box {
        height: 100%;
        width: 180px;
        flex:none;
    }
    .router-view-box{
        flex: 1;
        box-sizing: border-box;
        background: rgba(246, 246, 246, 1);
        overflow: auto;
    }
}
</style>