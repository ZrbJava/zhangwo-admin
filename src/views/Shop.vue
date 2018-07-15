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
                <!-- 标题 -->
               <div class="title mb15">商品管理-列表</div>
               <!-- 赛选条件 -->
               <div class="fillter">
                   <div class="fillters flex mb15">
                        <div class="product fvc">
                        产品ID:
                        <div class="input">
                            <el-input v-model="productId"  placeholder="请输入正确的产品ID" style="height:33px"></el-input>
                        </div>
                        </div>
                        <div class="product fvc">
                        关键字:
                        <div class="input">
                            <el-input v-model="keyWord" placeholder="商品标题/名称/零件号"></el-input>
                        </div>
                        </div>
                        <div class="product fvc">
                        分类:
                        <div class="input">
                            <el-select v-model="classfiy" placeholder="请选择">
                                <el-option
                                v-for="item in classfiyOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        </div>
                        <div class="product fvc">
                        品牌:
                        <div class="input">
                            <el-select v-model="brand" placeholder="请选择">
                                <el-option
                                v-for="item in brandOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        </div>
                   </div>
                   <div class="fillters flex">
                        <div class="product fvc">
                            适用机型：
                            <div class="input">
                                <el-select v-model="model" placeholder="请选择">
                                    <el-option
                                    v-for="item in classfiyOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="product fvc">
                            商品状态：
                            <div class="input">
                                <el-select v-model="shopStatus" placeholder="请选择">
                                    <el-option
                                    v-for="item in brandOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <!-- 搜索 -->
                        <div class="search btn">搜索</div>
                        <div class="reset btn">重置</div>
                    </div>
                    
                   </div>
               <!-- 商品列表 -->
               <div class="title" style="border-bottom:none">商品列表<span style="color:#999;font-size:12px">（共12345条记)</span></div>
               <div class="shop-table-list">
                 <el-table
                            ref="multipleTable"
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                            type="selection"
                            width="50"
                            >
                            </el-table-column>
                             <el-table-column
                            prop="productId"
                            sortable
                            label="产品id"
                            width="90"
                             >
                            </el-table-column>
                            <el-table-column label="商品名称" width="274">
                                
                                <template slot-scope="scope">
                                    <div class="fvc" style="font-size:12px;line-height:16px">
                                        <img class="shopImg" src="http://p1.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62" alt="" style="margin-right:10px;">
                                         {{scope.row.productMessage.name}}
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="零售价（元）" width="112" align="center">
                                <template slot-scope="scope">
                                    <span style="color:#333;font-size:14px">￥{{scope.row.retailPrice}}</span>                               
                                </template>
                            </el-table-column>
                            <el-table-column label="渠道价（元）" width="112"  align="center">
                                 <template slot-scope="scope">
                                     <span style="color:#333;font-size:14px">￥{{scope.row.channelPrice}}</span>                              
                                </template>
                            </el-table-column>
                            <el-table-column
                            label="状态"
                            width="88"
                            align="center"
                             >
                                 <template slot-scope="scope">
                                   <span v-if="scope.row.status == 1" style="color:#06B73B;font-size:14px">出售中</span>
                                   <span v-eles style="color:#D0021B;font-size:14px">已下架</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="vipStatus"
                            label="会员状态"
                            width="160">
                                 <template slot-scope="scope">
                                   <span v-if="scope.row.vipStatus == 1">仅修理厂可见</span>
                                   <el-switch
                                    v-model="value2"
                                    active-color="#13ce66"
                                    width="28">
                                    </el-switch>
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="releaseTime"
                            label="发布时间"
                            width="100">
                            </el-table-column>
                            <el-table-column
                            label="操作">
                                <template slot-scope="scope">
                                  <div class="setting flex">
                                    <div class="vipPrice">会员价</div>
                                    <div class="cancel">下架</div>
                                  </div>
                                </template>
                            </el-table-column>
                        </el-table>
               </div>
               <!-- 分页 -->
               <div class="pagination flex">
                   <!-- 批量操作 -->
                    <el-checkbox v-model="checked"></el-checkbox>
                    <div class="plcz">
                            <el-select v-model="operation" placeholder="批量操作">
                                <el-option
                                v-for="item in brandOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                    </el-pagination>
                </div>
               </div>
            </div>
        </div>   
</template>

<script>
import HeadNav from "@/components/HeadNav/HeadNav";
import AsideLeft from "@/components/AsideLeft/AsideLeft";

export default {
  components: {
    HeadNav,
    AsideLeft
  },
  data() {
    return {
      asideList: [{ name: "商品管理" }],
      productId: "",
      keyWord: "",
      classfiy: "",
      brand: "",
      shopStatus: "",
      model: "", //型号
      value1: true,
      value2: true,
      //   赛选条件选项
      classfiyOptions: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      brandOptions: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
    //   表格数据
      tableData: [{
          productId: 2225,
          productMessage:{name:'日立 ZX200-3 高压油泵SCU阀日立 ZX200-3 高压油泵SCU阀',img:""},
          price: 1000,
          retailPrice:1234,
          channelPrice:1234,//渠道价
          status:0,
          vipStatus:1,//1是仅修理厂可见
          releaseTime:"2018-06-23 14:35:40"
        },
        {
          productId: 2225,
          productMessage:{name:'日立 ZX200-3 高压油泵SCU阀日立 ZX200-3 高压油泵SCU阀',img:""},
          price: 1000,
          retailPrice:1234,
          channelPrice:1234,//渠道价
          status:0,
          vipStatus:1,//1是仅修理厂可见
          releaseTime:"2018-06-23 14:35:40"
        },
        {
          productId: 225,
          productMessage:{name:'日立 ZX200-3 高压油泵SCU阀日立 ',img:""},
          price: 1000,
          retailPrice:1234,
          channelPrice:1234,//渠道价
          status:0,
          vipStatus:1,//1是仅修理厂可见
          releaseTime:"2018-06-23 14:35:40"
        },
        {
          productId: 1012,
          productMessage:{name:'日立 ZX200-3 高压油泵SCU阀日',img:""},
          price: 1000,
          retailPrice:1234,
          channelPrice:1234,//渠道价
          status:0,
          vipStatus:1,//1是仅修理厂可见
          releaseTime:"2018-06-23 14:35:40"
        },],
        multipleSelection: [],
        // 分页
        currentPage: 4,
        // 批量操作
        operation:""
    }
  },
  methods: {
    //   分页操作
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
};
</script>
<style lang="less">
/* el重置样式 */
.shop{
    .el-input {
    font-size: 12px;
    }
    .el-input__inner {
    height: 33px;
    }
    .el-input__icon {
    line-height: 33px;
    }
    .el-switch__core{
        /* width:28px; */
        height:14px;
    }
    .el-switch__core:after {
        top: -1px;
        width: 14px;
        height: 14px;
    }
    .el-table thead {
        font-size: 14px;
        color: #333;
        th{
            background: #eee;
            height:40px;
            padding:0;
        }
    }
    // 分页
    .el-pagination{
        position: absolute;
        right:40px;
        top:50%;
        transform: translateY(-50%);
        padding:0;
        height:30px;
    }

}

</style>

<style scoped lang="less">
.shop {
  height: 100%;
}
.aside-left-box {
  padding-top: 15px;
}
.container {
  height: 100%;
  display: flex;
  .aside-left-box {
    height: 100%;
    width: 180px;
    margin-right: 14px;
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
      height: 111px;
      background: #eeeeee;
      border: 1px solid #eeeeee;
      font-size: 12px;
      color: #666;
      //   position: relative;

      .fillters {
        box-sizing: border-box;
        height: 33px;
        margin-top:15px;
        padding-left:12px;
        .product{
            color:#666; 
            font-size:12px;
        }
        .btn{
            font-size:14px;
            line-height:20px;
            width:58px;
            height:33px;
            border:1px solid #DCDCDC;
            border-radius:2px;
            text-align:center;
            line-height: 33px;
        }
        .search{
            color:#fff;
             background:rgba(87,180,255,1);
        }
        .reset{
            color:#333333;
            background: #fff;
            margin-left:10px;
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

    // 商品列表
    .shop-table-list {
      .shopImg{
        width:57px;
        height:57px;
      }
      .setting{
          >div:first-child{
              margin-right:10px
          }
         >div{
            padding:0 7px;
            height:24px;
            text-align:center;
            line-height:24px;
            background:#fff;
            border-radius:2px;
            border:1px solid #DDDDDD;
            font-size:12px;
            box-sizing:border-box;
          }
        
      }
    }
    //   分页
    .pagination{
        height:46px;
        line-height: 46px;
        overflow:hidden;
        position: relative;
        padding-left:14px;
    }
    // 批量操作
    .plcz{
        width:80px;
        height:30px;
        margin-left:17px;
        color:#1A191E;
        font-size:14px;
        background:#F5F5F5;
    }
  }
}
</style>