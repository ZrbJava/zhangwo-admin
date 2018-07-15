<template>
    <div class="aside-left">
        <!-- <slot></slot> -->
           <div class="aside-item" v-for="(item,index) in asideList" :key="index"  :class="{'aside-active':currentAside == index}" @click="toggleAside(index,item.route)">{{item.name}}</div>
    </div>
</template>

<script>
    export default {
        props:["asideList"],
        data(){
            return {
                currentAside:0
            }
        },
        methods:{
            toggleAside(index,currentRoute){
                this.currentAside = index;
                if(this.asideList.length>1){
                    // alert(1);
                    console.log(currentRoute);
                    this.$router.push({path:currentRoute});
                }
            }
        }
        
    }
</script>

<style scoped lang='less'>
.aside-left{
    box-sizing: border-box;
    width:100%;
    height:100%;
    background:rgba(246,246,246,1);
    box-shadow:0px 1px 0px 0px rgba(0,0,0,0.5);
}
.aside-item{
    font-size:14px;     
    text-align:center;       
    width:100%;
    height:34px;
    line-height:34px;
    color:#333333;
            
        }
.aside-active{
    background:rgba(240,91,41,1);
    color:rgba(255,255,255,1);
}
</style>