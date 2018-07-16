<template>
    <div class="home">
        <head-nav currentNav="0"></head-nav>        
        <!-- 左侧导航部分 -->
        <div class="container fsb">
            <!-- 左侧导航 -->
            <div class="aside-left-box">
                <aside-left class="aside-left" :asideList="asideList"></aside-left>
            </div>
            <!-- 右侧路由视窗 -->
            <div class="router-view-box">
                <!-- 欢迎。。。。。。。。。。。。。。。。。。。。。。。 -->
                <!-- 公司信息 -->
                <div class="company-info">
                    <!-- 左边头像、设置 -->
                    <div class="left">
                        <img src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png" alt="" class="avator">
                        <div class="edit-box">
                            <img src="../assets/home/post.png" alt="" class="editIcon">
                            <span>编辑店铺设置</span>
                        </div>
                    </div>
                    <!-- 右边公司详情 -->
                    <div class="right">
                        <!-- 公司名称 -->
                        <div class="company-name mb10">广州惠明机械有限公司</div>
                        <!-- 用户名 -->
                        <div class="userName mb6">用户名：<span style="color:#57B4FF">huiming</span></div>
                        <!-- 上次修改时间 -->
                        <div class="last-login-time">上次登录时间：<span style="color:#57B4FF">2018-06-27 09:19:36</span></div>
                    </div>
                </div>
                <!-- 订单信息 -->
                <div class="order-info">
                    <section class="order-info-top fsb">
                        <div style="background:#F0285A">
                            <div class="fvhc item">
                                <img src="../assets/home/form.png" alt="">
                                <div class="line"></div>
                                <div class="orderNum">
                                    <div class="num">738</div>
                                    <div>今日总订单数</div>
                                </div>
                            </div>
                        </div>
                        <div style="background:#F48662">
                             <div class="fvhc item">
                                <img src="../assets/home/money_bag.png" alt="">
                                <div class="line"></div>
                                <div class="orderNum">
                                    <div class="num">831238</div>
                                    <div>今日下单总金额</div>
                                </div>
                              </div>
                        </div>
                        <div style="background:#F0BE28">
                              <div class="fvhc item">
                                <img src="../assets/home/text.png" alt="">
                                <div class="line"></div>
                                <div class="orderNum">
                                    <div class="num">7381231</div>
                                    <div>今日已付款订单数</div>
                                </div>
                              </div>
                        </div>
                        <div style="background:#28BEF0">
                             <div class="fvhc item">
                                <img src="../assets/home/sponsor.png" alt="">
                                <div class="line"></div>
                                <div class="orderNum">
                                    <div class="num">738</div>
                                    <div>今日已付款金额</div>
                                </div>
                              </div>
                        </div>
                    </section>
                </div>
                <!-- 底部大块盒子 -->
               <div class="other-bottom-cont fsb">
                   <!-- 左边大盒子 -->
                   <div class="left-box">
                        <section class="order-info-left fsb">
                            <div>
                               <div class="item fvhc">
                                    <img src="../assets/home/icon1.png" alt="" class="icon">
                                    <div class="orderStatus">
                                        <span class="orderNum">2</span>
                                        <div>待发货订单数</div>
                                    </div>
                               </div>
                            </div>
                            <div>
                                <div class="item fvhc">
                                    <img src="../assets/home/icon2.png" alt="" class="icon">
                                    <div class="orderStatus">
                                        <span class="orderNum">2</span>
                                        <div>待发货订单数</div>
                                    </div>
                               </div>
                            </div>
                            <div>
                                <div class="item fvhc">
                                    <img src="../assets/home/icon3.png" alt="" class="icon">
                                    <div class="orderStatus">
                                        <span class="orderNum">2</span>
                                        <div>待发货订单数</div>
                                    </div>
                               </div>
                            </div>
                            <div class="end">
                                <div class="item fvhc">
                                    <img src="../assets/home/icon4.png" alt="" class="icon">
                                    <div class="orderStatus">
                                        <span class="orderNum">2</span>
                                        <div>待发货订单数</div>
                                    </div>
                               </div>
                            </div>
                        </section>
                        <!-- 交易金额统计图 -->
                        <div class="statistical-chart">
                            <div class="title">交易金额统计图</div>
                            <div style="height:calc(100% - 20px);width:100%;">
                              <echart></echart>
                            </div>
                        </div>
                   </div>
                    <!-- 运营快速入口 -->
                    <div class="right-box">
                        <section class=" order-info-left order-info-right fsb">
                            <div>
                                <div class="item fvhc">
                                    <img src="../assets/home/icon5.png" alt="" class="icon">
                                    <div class="orderStatus">
                                        <span class="orderNum">2</span>
                                        <div>待发货订单数</div>
                                    </div>
                               </div>
                            </div>
                             <div class="end">
                                <div class="item fvhc">
                                    <img src="../assets/home/icon6.png" alt="" class="icon">
                                    <div class="orderStatus">
                                        <span class="orderNum">2</span>
                                        <div>待发货订单数</div>
                                    </div>
                               </div>
                            </div>
                        </section>
                        <div class="operation-entrance">
                            <div class="title">运营快捷入口</div>
                            <div class="top-sec fvhc">
                                <div class="fvhc" style="border-right:1px solid #eee">
                                    <img src="../assets/home/form1.png" alt=""  style="margin-right:18px;">
                                    <span>商品管理</span>
                                </div>
                                <div class="fvhc">
                                    <img src="../assets/home/refund.png" alt="" style="margin-right:18px;">
                                    <span>商品管理</span>
                                </div>
                            </div>
                            <div class="title">平台联系方式</div>
                            <div class="bottom-sec">
                                <div class="phone">电话号码：020-82037895</div>
                                <div>公司地址：广东省广州市天河区中山大道10</div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
       

    </div>
</template>

<script>
import HeadNav from "@/components/HeadNav/HeadNav";
import AsideLeft from "@/components/AsideLeft/AsideLeft";
import Echart from "@/components/Echart/Echart";
export default {
  components: {
    HeadNav,
    AsideLeft,
    Echart
  },
  data() {
    return {
      asideList: [{ name: "欢迎页" }]
    };
  },
  created(){
    this.$http.post("/api/index/index");
  }
};
</script>

<style scoped lang='less'>
.home {
  height: 100%;
  padding-top:50px;
}
.container {
  height: 100%;
  display: flex;
  padding-top: 15px;
  background: #f6f6f6;
  box-sizing: border-box;
  overflow:auto;
  .aside-left-box {
    height: 100%;
    width: 180px;
    margin-right: 14px;
    flex: none;
  }
  // 路由视口大容器
  .router-view-box {
    flex: 1;
    height: 100%;
    background: rgba(246, 246, 246, 1);
    padding-right: 14px;
    padding: 0 14px 17px 0;
    // 公司信息
    .company-info {
      position: relative;
      width: 100%;
      height: 104px;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 1);
      border-radius: 2px;
      border: 1px solid rgba(221, 221, 221, 1);
      margin-bottom: 10px;
      .left {
        position: absolute;
        left: 80px;
        top: 14px;
        margin-right: 50px;
        box-sizing: border-box;
        text-align: center;
        font-size: 12px;
        color: rgba(153, 153, 153, 1);
        .avator {
          width: 52px;
          height: 52px;
          border: 1px solid rgba(230, 230, 230, 1);
          margin-bottom: 10px;
        }
        .edit-box {
          display: flex;
          align-items: center;
        }
        .editIcon {
          padding-right: 10px;
        }
      }
      .right {
        position: absolute;
        left: 224px;
        top: 14px;
        font-size: 12px;
        color: rgba(153, 153, 153, 1);
        .company-name {
          font-size: 14px;
          // font-family:PingFangSC-Semibold;
          color: rgba(51, 51, 51, 1);
          font-weight: 800;
        }
        .userName,
        .last-login-time {
          letter-spacing: 1px;
        }
      }
    }
    // ---订单信息----

    // 顶部订单信息
    .order-info-top {
      > div:not(:last-child) {
        margin-right: 10px;
      }
      > div {
        flex: 1;
        min-width: 260px;
        height: 106px;
        margin-bottom: 10px;
      }
      .item {
        height: 100%;
        color: #fff;
        font-size: 12px;
        img {
          width: 24px;
          height: 26px;
        }
        .num {
          font-size: 30px;
          padding-bottom: 2px;
        }
        .orderNum {
          text-align: center;
        }
      }
      .line {
        width: 1px;
        height: 55px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 1px;
        margin: 0 28px 0 26px;
      }
    }

    //  包含统计图、运营快捷入口的底部大盒子
    .other-bottom-cont {
      display: flex;
      box-sizing: border-box;
      //   左4个订单状态,公用的部分暂时存放这里
      .order-info-left {
        margin-bottom: 10px;

        > div {
          min-width: 170px;
          height: 85px;
          background: #fff;
          margin-right: 10px;
          flex: 1;
          margin-right: 10px;
          .item {
            height: 100%;
          }
          .icon {
            width: 40px;
            height: 40px;
            margin-right: 15px;
          }
          .orderStatus {
            color: #666666;
            font-size: 12px;
            .orderNum {
              font-size: 26px;
            }
          }
        }
        .end {
          margin-right: 0;
        }
      }
      //   左边盒子
      .left-box {
        margin-right: 10px;
        flex: 2;
        // }
        //   统计图表信息
        .statistical-chart {
          height: 304px;
          box-sizing: border-box;
          background: #fff;
          .title {
            font-size: 15px;
            color: #666;
            height: 44px;
            line-height: 44px;
            border-bottom: 1px solid #e3e8ee;
            padding-left: 10px;
          }
        }
      }
      //   右边盒子
      .right-box {
        flex: 1;
        background: #f6f6f6;
        // 右边2个订单信息
        .order-info-right {
          > div:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
      // 运营快捷入口
      .operation-entrance {
        height: 304px;
        box-sizing: border-box;
        overflow:hidden;
        .title {
          padding-left:10px;
          font-size: 15px;
          color: #333;
          height: 44px;
          line-height: 44px;
          border-bottom: 1px solid #e3e8ee;
          background: #fff;
        }

        .top-sec {
          background: #fff;
          box-sizing: border-box;
          height: 100px;
          padding: 0 22px;
          margin-bottom: 18px;
          > div {
            flex: 1;
            height: 100%;
            height: 80px;
          }
        }
        .bottom-sec{
            font-size:12px;
            color:#333333;
            background: #fff;
            height:100px;
            padding-left:10px;
            .phone{
                padding: 10px 0;
            }
        }
      }
    }
  }
}
</style>