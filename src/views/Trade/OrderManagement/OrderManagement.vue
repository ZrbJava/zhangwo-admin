<template>
    <div class=" shop" v-if="loading">  
         <div class="container">
             <!-- 右侧路由视窗 -->
            <div class="router-view-box">
              <!-- 标题 -->
               <div class="title mb15">订单详情-订单列表</div>
               <!-- 赛选条件 -->
               <div class="fillter">
                    <div class="fillters flex mb15">
                            <div class="product fvc">
                            关键字:
                            <div class="input">
                                <el-input v-model="keyWord"  placeholder="请输入正确的产品ID" style="height:33px"></el-input>
                            </div>
                            </div>
                            <div class="product fvc">
                                收货人姓名:
                                <div class="input">
                                    <el-input v-model="name"></el-input>
                                </div>
                            </div>
                             <div class="product fvc">
                                收货人手机:
                                <div class="input">
                                    <el-input v-model="phone"></el-input>
                                </div>
                            </div>
                            <!-- 搜索 -->
                            <div class="search btn" @click="search">搜索</div>
                    </div>
                </div>
               <!-- 订单列表 -->
               <div class="title" style="border-bottom:none">订单列表<span style="color:#999;font-size:12px">（共{{list.count}}条记)</span></div>
               <!-- 订单管理-导航 -->
                <div class="orderNavBox flex">
                    <div class="orderNav flex">
                        <div @click="orderNavTab(0,'FullOrder')" :class="{active:currentOrderNav == 0 }">全部订单(120）</div>
                        <div @click="orderNavTab(1,'PendingPayment')" :class="{active:currentOrderNav == 1 }">等待买家付款(24)</div>
                        <div @click="orderNavTab(2,'PendingDelivery')" :class="{active:currentOrderNav == 2 }">待发货(0)</div>
                        <div @click="orderNavTab(3,'Delivered')" :class="{active:currentOrderNav == 3 }">已发货(30)</div>
                        <div @click="orderNavTab(4,'SuccessfulTrade')" :class="{active:currentOrderNav == 4 }">交易成功(60)</div>
                        <div @click="orderNavTab(5,'PendingEvaluated')" :class="{active:currentOrderNav == 5 }">待评价(30)</div>
                        <div @click="orderNavTab(6,'Evaluated')" :class="{active:currentOrderNav == 6 }">已评价(30)</div>
                        <div @click="orderNavTab(7,'Closed')" :class="{active:currentOrderNav == 7 }">已关闭(30)</div>
                    </div>
                    <div class="line"></div>
                </div>
               <!-- 订单列表 -->
               <div class="orderList">
                   <components :is="currentView"></components>
               </div> 
              
              
            </div>
        </div>   
    </div>
</template>

<script>
import HeadNav from "@/components/HeadNav/HeadNav";
import AsideLeft from "@/components/AsideLeft/AsideLeft";
// import OrderList from "@/components/OrderList/OrderList";
import Closed from "@/components/OrderList/Closed";//关闭
import Delivered from "@/components/OrderList/Delivered";//已发货
import Evaluated from "@/components/OrderList/Evaluated";//已评价
import FullOrder from "@/components/OrderList/FullOrder";//全部订单
import PendingDelivery from "@/components/OrderList/PendingDelivery";//待发货
import PendingEvaluated from "@/components/OrderList/PendingEvaluated";//待评价
import PendingPayment from "@/components/OrderList/PendingPayment";//待支付
import SuccessfulTrade from "@/components/OrderList/SuccessfulTrade";//交易成功


const OK = 1;
export default {
  components: {
    HeadNav,
    AsideLeft,
    Closed,
    Delivered,
    Evaluated,
    FullOrder,
    PendingDelivery,
    PendingEvaluated,
    PendingPayment,
    SuccessfulTrade,
  },
  data() {
    return {
      loading: false,
      currentOrderNav: 0,
      DialogVisible: false,//下架的弹框状态
      keyWord: "",
      name:"",
      phone:"",
      value1: true,
      value2: true,
      checked: "",
      multipleSelection: [],
      isPLCZ:false,//暂时放这
      // 分页
    //   currentPage: 4,

      currentView:"FullOrder"
    };
  },
  methods: {
    //   分页操作
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
     orderNavTab(index,currentView) {
      console.log(index);
      this.currentOrderNav = index;
      this.currentView = currentView;
      console.log(this.currentOrderNav,this.currentView);
    },
    // 搜索
    search() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      var data = {
        keywords: this.keyWord||"卡特",
        page: 1,
        pagesize: 10
      };

      this.$http.post("/api/goods/index", data).then(res => {
        if (res.data.status === OK) {
          console.log(res.data.data.list);
          this.list = res.data.data.list;
          this.loading = true;
          loading.close();
        }
      });
    },
  },
  created() {
      this.search();
  },
};
</script>
<style lang="less">
/* el重置样式 */
.OrderManagement {
    // 模态框
    .el-dialog__headerbtn{
        top:14px;

    }
    .el-dialog__header{
        text-align:left;
        color:#1A191E;
        font-weight: 600;
        font-size:16px;
        background:rgba(249,249,249,1);
        height:44px;
        line-height:44px;
        padding:0 0 0 20px;
    }
   
    // 垂直水平居中
    .el-dialog{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: #fff;
    }
    .el-dialog__body{
        padding:0;
    }
  .el-input {
    font-size: 12px;
  }
  .el-input__inner {
    height: 33px;
  }
  .el-input__icon {
    line-height: 33px;
  }
  .el-switch__core {
    /* width:28px; */
    height: 14px;
  }
  .el-switch__core:after {
    top: -1px;
    width: 14px;
    height: 14px;
  }
    .el-switch.is-checked .el-switch__core::after {
        margin-left: -14px;
    }
  .el-table thead {
    font-size: 14px;
    color: #333;
    th {
      background: #eee;
      height: 40px;
      padding: 0;
    }
  }
  // 分页
  .el-pagination {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
    height: 30px;
  }
}
</style>

<style scoped lang="less">
.shopImg {
    width: 57px;
    height: 57px;
}
.container {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  .aside-left-box {
    height: 100%;
    width: 180px;
    margin-right: 14px;
    padding-top: 15px;
  }
  .router-view-box {
    flex: 1;
    height: 100%;
    background: #fff;
    padding: 0 14px;
    .title {
      font-size: 16px;
      font-weight: 600;
      color: #1a191e;
      height: 46px;
      line-height: 46px;
      border-bottom: 2px solid #e6e6e6;
    }
    // 赛选条件
    .fillter {
      height: 64px;
      background: #eeeeee;
      border: 1px solid #eeeeee;
      font-size: 12px;
      color: #666;
      .fillters {
        box-sizing: border-box;
        height: 33px;
        margin-top: 15px;
        padding-left: 12px;
        .product {
          color: #666;
          font-size: 12px;
        }
        .btn {
          font-size: 14px;
          line-height: 20px;
          width: 58px;
          height: 33px;
          border: 1px solid #dcdcdc;
          border-radius: 2px;
          text-align: center;
          line-height: 33px;
          cursor: pointer;
        }
        .search {
          color: #fff;
          background: rgba(87, 180, 255, 1);
        }
        .reset {
          color: #333333;
          background: #fff;
          margin-left: 10px;
        }
        //   position: relative;
      }
      .input {
        width: 150px;
        padding-left: 15px;
        margin-right: 20px;
        position: relative;
      }
    }

    //   分页
    .pagination {
      height: 46px;
      align-items:center;
      line-height: 46px;
      overflow: hidden;
      position: relative;
      padding-left: 14px;
    }
    // 批量操作
    .plcz {
     padding-left:6px;
      width: 80px;
      height: 30px;
      line-height:30px;
      margin-left: 30px;
      color: #1A191E;
      font-size: 14px;
      background: #f5f5f5;
      border:1px solid rgba(200,200,200,1);
      cursor: pointer;
    }
    
  }
}
// 订单导航
.orderNavBox {
  .orderNav {
    flex: none;
    > div {
      box-sizing: border-box;
      font-size: 12px;
      color: #666;
      padding: 0 12px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      background: #fff;
      border-top: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
      cursor: pointer;
    }
    > div:not(:last-child) {
      border-right: 1px solid #dddddd;
    }
    > div:first-child {
      border-left: 1px solid #dddddd;
    }
    > div:last-child {
      border-right: 1px solid #dddddd;
    }
    .active {
      border-top: 2px solid #f05b29;
      border-bottom: none;
      color: #f05b29;
      box-sizing: border-box;
    }
  }
  .line {
    width: 100%;
    height: 36px;
    flex: 1;
    border-bottom: 1px solid #dddddd;
  }
}
//   模态框底部的slot样式
.comfirm{
    display:inline-block;
    width:198px;
    height:38px;
    background:rgba(87,180,255,1);
    border-radius:1px;
    color:#fff;
    line-height:38px;
    font-size:14px;
    cursor: pointer;
}
// 批量操作模态框slot脚部的样式
.plcz-btn{
    display:inline-block;
    width:60px;
    height:32px;
    background:#B4B4B4;
    font-size:13px;
    text-align:center;
    line-height:32px;
    color:#333;
    border-radius:2px;
    border:1px solid rgba(180,180,180,1);
    cursor: pointer;
}
.plcz-comfirm{
    background:#F05B29;
    color:#fff;
    margin-right:8px;
    border:none;
}
// 模态框内容
.plcz-warn{
    margin-top:20px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:829px;
    height:64px;
    background:#D9EDF7;
    font-size:12px;
    color:#31708F;
    line-height:64px;
    padding-left: 10px;
    margin-bottom:20px;
    >div{
        line-height:16px;
    }
}
// 批量操作的内容样式
.plcz-content{
    width:100%;
    height:388px;
    overflow:auto;
    box-sizing:border-box;
    padding-left:15px;
    overflow-x:hidden;
    background:#fff;
    .plcz-price{
        width:79px;
        height:28px;
        line-height:28px;
        text-align:center;
        font-size:12px;
        color:#333333;
        outline:none;
        border:1px solid #DDDDDD;
    }
}
</style>