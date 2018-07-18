<template>
  <div class="orderList">
    <h1>已评论</h1>
    <el-row class="tableHead">
        <el-col :span="6"><div class="grid-content bg-purple" style="padding-left:15px;text-align:left">商品信息</div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple-light">单价（元）</div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple">数量</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple-light">售后</div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple">买家</div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple-light">交易状态</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple-light">实收款</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple-light">操作</div></el-col>
    </el-row>
    <div class="table-body" v-for="item in [1,2,3,4,5,6]">
      <!-- 订单编号行 -->
      <el-row class="table-orderNum">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <div class="orderNum">
              <span style="margin-right:20px">订单编号：201806020211424</span>
              <span>下单时间：2018-06-02 10：10</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- 订单内容项 -->
      <el-row class="tableItem">
        <el-col :span="6" class="col-item" style="padding-left: 15px;">
          <div class="shopInfo">
              <img src="http://p1.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62" alt="" class="shopImg">
              <span>日立 ZX200-3 高压油泵SCU阀 日野 日 本原厂</span>
          </div>
        </el-col>
        <el-col :span="3" class="col-item">
          <div>￥900.00</div>
        </el-col>
        <el-col :span="3" class="col-item">
          <div>4</div>
        </el-col>
        <el-col :span="2" class="col-item" style="border-right:1px solid #E6E6E6;">
          <div style="color:#57B4FF;font-weight: 600;">退款中</div>
        </el-col>
        <el-col :span="3" class="col-item" style="border-right:1px solid #E6E6E6;">
            <div>
            贵州维修厂
            <div class="contatInfo">联系信息</div>
          </div>
        </el-col>
        <el-col :span="3" class="col-item" style="border-right:1px solid #E6E6E6;">
          <div class="unsucess">订单已确认，等待买家付款</div>
        </el-col>
        <el-col :span="2" class="col-item" style="border-right:1px solid #E6E6E6;"><div style="color:#1A191E;font-weight:600">￥3600.00 <div style="color:#666666;margin-top:5px;font-weight:500">（运费到付）</div></div></el-col>
        <el-col :span="2" class="col-item">
          <div class="btn">
            <button>订单详情</button>
            <button>立即发货</button>
          </div></el-col>
      </el-row>
    </div>
    <!-- 分页 -->
    <!-- 分页 -->
    <div class="pagination flex">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total= 500>
        </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentPage: 4,
    }
  },
  methods:{
     handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  }
};
</script>

<style scoped lang="less">
.orderList {
  background: #fff;
}
.table-body {
  // padding-left:15px;
  font-size: 12px;
  color: #333333;
  .shopImg {
    width: 57px;
    height: 57px;
    margin-right: 10px;
  }
  .shopInfo {
    display: flex;
    align-items: center;
  }
  .tableItem {
    height: 86px;
    background: #fff;
    border: 1px solid #e6e6e6;
    text-align: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 10px;
    // & >.el-col:not(:last-child){
    //   border-right:1px;
    // }
    .col-item {
      // background:red;
      height: 86px;
      display: flex;
      align-items: center;
      justify-content: center;
      .contatInfo {
        width: 74px;
        height: 24px;
        background: #57b4ff;
        border-radius: 2px;
        margin-top: 10px;
        text-align: center;
        line-height: 24px;
        color: #fff;
        cursor: pointer;
        
      }
      .btn {
        button {
          width: 64px;
          height: 23px;
          background: #fff;
          border-radius: 1px;
          border: 1px solid rgba(221, 221, 221, 1);
          color: #333333;
          font-weight: 600;
          cursor: pointer;
          outline: none;
        }
        button:last-child {
          margin-top: 5px;
        }
      }
      // 订单状态颜色值
      .unsucess {
        color: #f05b29;
      }
      .sucess {
        color: #06b73b;
      }
    }
  }
}
.tableHead {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background: #eee;
  font-weight: 600;
  margin-bottom: 5px;
  text-align: center;
}
.table-orderNum {
  height: 36px;
  background: rgba(249, 249, 249, 1);
  line-height: 36px;
  padding-left: 15px;
}
// // 分页
  .el-pagination {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
    height: 30px;
  }
  .pagination {
      height: 46px;
      align-items:center;
      line-height: 46px;
      overflow: hidden;
      position: relative;
      padding-left: 14px;
    }
</style>