<template>
    <div class="shop" v-if="loading">
        <head-nav currentNav="1"></head-nav>     
         <div class="container flex">
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
                            <el-cascader
                              placeholder="请选择,可搜索"
                              :options="shopData.type"
                              filterable
                              change-on-select
                            ></el-cascader>
                        </div>
                        </div>
                        <div class="product fvc">
                        品牌:
                        <div class="input">
                            <el-select v-model="brandId" placeholder="请选择">
                                <el-option
                                v-for="item in shopData.brand"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
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
                                    v-for="item in shopData.status"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <!-- 搜索 -->
                        <div class="search btn" @click="search">搜索</div>
                        <div class="reset btn" @click="reset">重置</div>
                    </div>
                    
                   </div>
               <!-- 商品列表 -->
               <div class="title" style="border-bottom:none">商品列表<span style="color:#999;font-size:12px">（共{{shopData.list.cnt}}条记)</span></div>
               <div class="shop-table-list">
                 <el-table
                            ref="multipleTable"
                            :data="shopData.list.goods"
                            style="width: 100%">
                            <el-table-column
                            type="selection"
                            width = '50'
                            >
                            </el-table-column>
                             <el-table-column
                            prop="id"
                            sortable
                            label="产品id"
                            width = '90' 
                             >
                            </el-table-column>
                            <el-table-column label="商品名称" width= '274'>
                                
                                <template slot-scope="scope">
                                    <div class="fvc" style="font-size:12px;line-height:16px">
                                        <img class="shopImg" :src="scope.row.img_show" alt="" style="margin-right:10px;">
                                         {{scope.row.title}}
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="零售价（元）" width= '112' align="center">
                                <template slot-scope="scope">
                                    <span style="color:#333;font-size:14px">￥{{scope.row.nowprice}}</span>                               
                                </template>
                            </el-table-column>
                            <el-table-column label="渠道价（元）" width= '112'  align="center">
                                 <template slot-scope="scope">
                                     <span style="color:#333;font-size:14px">￥{{scope.row.placeprice}}</span>                              
                                </template>
                            </el-table-column>
                            <el-table-column
                            label="状态"
                            width= '88'
                            align="center"
                             >
                                 <template slot-scope="scope">
                                   <span v-if="scope.row.status == 1" style="color:#06B73B;font-size:14px">出售中</span>
                                   <span v-else style="color:#D0021B;font-size:14px">已下架</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="vipStatus"
                            label="会员状态"
                            width= '160'>
                                 <template slot-scope="scope">
                                   <span v-if="scope.row.vipStatus == 1">仅修理厂可见</span>
                                   <el-switch
                                    v-model="value2"
                                    active-color="#13ce66"
                                    :width=28>
                                    </el-switch>
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="addtime"
                            label="发布时间"
                            width = 100>
                            </el-table-column>
                            <el-table-column
                            label="操作">
                                <template slot-scope="scope">
                                  <div class="setting flex">
                                    <div class="vipPrice" @click="editPrice(scope.row.title,scope.row.nowprice,scope.row.placeprice)">会员价</div>
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
                    <div class="plcz" @click="isPLCZ = true">批量操作<i class="el-icon-d-caret" style="padding-left:4px"></i></div>
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="Number(shopData.list.cnt)">
                    </el-pagination>
                    <!-- {{}} -->
                </div>
               </div>
            </div>
            <!-- 会员价 -----模态框 -->
            <el-dialog :visible.sync="DialogVisible" width="520px" top="0" center title="会员价">
                <div class="model-title fvc">
                  <div class="shopName">
                    商品名称
                  </div>
                 <div> {{title}} {{title}} {{title}}</div>
                  </div>
                <div class="vip-dialog-box">
                  <div class="bdt bdl">零售价</div>
                  <div class="bdt">渠道价</div>
                </div>
                <div class="vip-dialog-box">
                   <div class="bdl">
                     <input type="text" class="inp" v-model="nowprice">元
                   </div>
                   <div>
                     <input type="text" class="inp" v-model="placeprice">元
                   </div>
                </div>
                <span slot="footer" class="dialog-footer">
                    <span class="comfirm" @click="DialogVisible = false">确认提交</span>
                </span>
            </el-dialog>
            <!-- 批量操作-模态框 -->
             <el-dialog :visible.sync="isPLCZ" width="857px" top="0" title="批量改价">
                <div class="plcz-content">
                    <!-- 提醒 -->
                    <div class="plcz-warn">
                        <div>1.商家直接修改产品价格即可 </div>
                        <div>2.渠道价不能高于零售价</div>
                    </div>
                    <!-- 表格 -->
                    <el-table
                        :data="shopData.list.goods"
                        style="width: 100%">
                        <el-table-column label="商品名称" width= '300'>
                            
                            <template slot-scope="scope">
                                <div class="fvc" style="font-size:12px;line-height:16px">
                                    <img class="shopImg" :src="scope.row.img_show" alt="" style="margin-right:10px;">
                                        {{scope.row.title}}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="零售价（元）" width= '210' align="center">
                            <template slot-scope="scope">
                                <!-- <span style="color:#333;font-size:14px">￥{{scope.row.nowprice}}</span>                                -->
                                <input type="text" :value="scope.row.nowprice" class="plcz-price"> 
                            </template>
                        </el-table-column>
                        <el-table-column label="渠道价（元）"  align="center">
                                <template slot-scope="scope">
                                    <input type="text" :value="scope.row.placeprice" class="plcz-price" > 
                            </template>
                        </el-table-column>
                    </el-table>
                        
                </div>
                <div slot="footer" class="dialog-footer">
                    <span class="plcz-comfirm plcz-btn" @click="isPLCZ = false">确认</span>
                    <span class="plcz-cancel plcz-btn" @click="isPLCZ = false">取消</span>
                </div>
            </el-dialog>

        </div>   
</template>

<script>
import HeadNav from "@/components/HeadNav/HeadNav";
import AsideLeft from "@/components/AsideLeft/AsideLeft";

const OK = 1;
export default {
  components: {
    HeadNav,
    AsideLeft
  },
  data() {
    return {
      loading: false,
      DialogVisible: false,
      isPLCZ:false,//批量操作状态
      asideList: [{ name: "商品管理" }],
      productId: "",
      keyWord: "",
      classfiy: "",
      brandId: "",
      shopStatus: "",
      model: "", //型号
      value1: true,
      value2: true,
      checked: "",
      nowprice:"",//修改会员价-零售价
      placeprice:"",//修改会员价-渠道价
      title:"",//修改会员价-title
      
      options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
      multipleSelection: [],
      // 分页
      currentPage: 4,
      // 批量操作
      operation: ""
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
    // 搜索
    search() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      var data = {
        search_id: this.productId||3762,
        keywords: this.keyWord||"卡特",
        typeid: this.classfiy||326,
        brandid: this.brandId||44,
        first_id: 578,
        second_id: 22684,
        third_id: 22685,
        status: this.shopStatus||1,
        page: 1,
        pagesize: 10
      };

      this.$http.post("/api/goods/index", data).then(res => {
        if (res.data.status === OK) {
          console.log(res.data.data.list);
          this.shopData = res.data.data;
          this.shopData.type = res.data.data.type.map(item => {
              return{
                value: item.id,
                label: item.name,
                children: item.subset
              }
          });
          this.loading = true;
          loading.close();
        }
      });
    },
    // 重置
    reset() {},
    // 会员价
    editPrice(title,nowprice,placeprice){
      this.nowprice = nowprice;
      this.placeprice = placeprice;
      this.title = title
      this.DialogVisible = true
    }
  },
  created() {
      this.search();
  },
};
</script>
<style lang="less">
/* el重置样式 */
.shop {
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
.shop {
  height: 100vh;
  overflow: hidden;
}
.container {
    width: 100%;
    height: calc(100% - 65px);
    padding-top: 65px;
    background:#fff;
  .aside-left-box {
    height: 100%;
    width: 180px;
    flex:none;
  }
  .router-view-box {
    flex: 1;
    margin-left:14px;
    box-sizing: border-box;
    background: rgba(246, 246, 246, 1);
    overflow: auto;
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

    // 商品列表
    .shop-table-list {
      .shopImg {
        width: 57px;
        height: 57px;
      }
      .setting {
        > div:first-child {
          margin-right: 10px;
        }
        > div {
          padding: 0 7px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          background: #fff;
          border-radius: 2px;
          border: 1px solid #dddddd;
          font-size: 12px;
          box-sizing: border-box;
          cursor:pointer;
        }
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
// 会员价模态框
 .model-title{
    padding:10px 0 24px 20px;
    color:#1A191E;
    font-size:12px;
    overflow-wrap: break-word;
    .shopName{
      width: 102px;
      padding-right:32px;
    }
  }
.vip-dialog-box{
  display:flex;
  justify-content: center;
 
  >div{
    width:150px;
    height:40px;
    font-size:12px;
    color:#666;
    line-height:40px;
    text-align:center;
    border-right:1px solid #ccc;
    border-bottom:1px solid #ccc;
  }
  .bdl{
    border-left:1px solid #ccc;
  }
  .bdt{
    border-top: 1px solid #ccc;
  }
 
  .inp{
    width:60px;
    height:21px;
    outline:none;
    border-radius:2px;
    border:1px solid #E6E6E6;
    text-align:center;
    margin-right:8px;
    color:#666666;
  }
}
</style>