<template>
    <div class="shop">
        <head-nav currentNav="1"></head-nav>     
         <div class="container">
            <!-- 左侧导航 -->
            <div class="aside-left-box">
                <aside-left class="aside-left" :asideList="asideList"></aside-left>
            </div>
            <!-- 右侧路由视窗 -->
            <div class="router-view-box">
               商品管理
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
                 asideList:[{name:'商品管理'}],
            }
        },
        
    }
</script>

<style scoped lang="less">
.shop{
    height:calc(100vh - 50px);
}
.container{
    height:100%;
    display: flex;
    padding-top:15px;
    .aside-left-box{
        height:100%;
        width:180px;
        margin-right:14px;
       
    }
    .router-view-box{
        flex:1;
        height:100%;
        // width:100%;
        background:blue;
    }
}
</style>