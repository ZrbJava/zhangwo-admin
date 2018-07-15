<template>
    <div class="Trade">
        <head-nav currentNav="3"></head-nav>     
         <div class="container">
            <!-- 左侧导航 -->
            <div class="aside-left-box">
                <aside-left class="aside-left" :asideList="asideList"></aside-left>
            </div>
            <!-- 右侧路由视窗 -->
            <div class="router-view-box">
                <!-- 右边 -->
                <!-- <router-view></router-view> -->
                <el-row>
                    <el-button>默认按钮</el-button>
                    <el-button type="primary">主要按钮</el-button>
                    <el-button type="success">成功按钮</el-button>
                    <el-button type="info">信息按钮</el-button>
                    <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger">危险按钮</el-button>
                </el-row>
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
                     {name:'财务1'},
                     {name:'财务2'},
                     {name:'财务3'}
                     ],
            }
        },
        
    }
</script>

<style scoped lang="less">
.Trade{
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