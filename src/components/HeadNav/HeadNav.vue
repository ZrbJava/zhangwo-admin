<template>
    <div class="HeadNav">
        <!-- 导航左侧 -->
        <section class="nav-left">
            <!-- logo部分 -->
           <div class="logo-sec fvhc">
               <!-- logo部分左侧图片 -->
               <img src="http://p1.music.126.net/chbx-2OXXzFrQvom50uQHA==/18646617697605552.jpg?param=40y40" alt="" class="logo-img">

               <!-- 右侧文字 -->
               <div class="logo-title">
                   <span class="title-company">掌窝工程机械</span>
                   <div class="title-size">WWW.PALMAR.CN</div>
               </div>
           </div>
        </section>
        <!-- 导航列表部分 -->
        <section class="nav-list">
            <ul class="clearfix">
                <li v-for="(item,index) in navList" :key="index"  :class="{'active-nav':currentNav == index}"><router-link :to="item.route">{{item.name}}</router-link></li>
            </ul>
        </section>
        <!-- 导航右侧 -->
        <section class="nav-right fvhc">
            <span>惠明机械</span>
            <img class="user-img" src="http://p1.music.126.net/chbx-2OXXzFrQvom50uQHA==/18646617697605552.jpg?param=40y40" alt="">
            <div class="exit">
              <img src="../../assets/home/exit.png" alt="">
              <div @click="loginOut">退出</div>
            </div>
        </section>
    </div>
</template>

<script>
import { MessageBox } from 'element-ui';
import { Message } from 'element-ui';
export default {
  
  props: ["currentNav"],
  data() {
    return {
      navList: [
        { name: "首页", route: "/Home" },
        { name: "商品", route: "/Shop" },
        { name: "交易", route: "/Trade" },
        { name: "财务", route: "/Finance" }
      ]
    };
  },
  methods: {
    toggleNav(index) {},
    // 退出登陆
    loginOut() {
      MessageBox.confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          Message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          Message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    console.log(this.currentNav);
    console.log(MessageBox.message);
    
  }
};
</script>

<style scoped lang="less">
.HeadNav {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 50px;
  background: rgba(67, 74, 83, 1);
  border-radius: 1px;
  padding: 0 21px 0 10px;
  color: #fff;
  // logo部分
  .logo-sec {
    // logo图片
    height: 50px;
    .logo-img {
      width: 33px;
      height: 33px;
      border-radius: 5px;
      border: 1px solid rgba(255, 255, 255, 1);
      margin-right: 10px;
    }

    //    右侧公司文字
    .logo-title {
      text-align: center;
      .title-company {
        font-size: 20px;
        color: #f7f8f8;
        font-weight: 800;
        letter-spacing: 1px;
        padding-bottom: 5px;
      }
      .title-size {
        font-size: 10px;
        letter-spacing: 2px;
        color: #f7f8f8;
      }
    }
  }
  // 导航列表
  .nav-list {
    li {
      float: left;
      width: 84px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
    }
    a {
      color: #fff;
    }
    .active-nav {
      background: rgba(0, 0, 0, 0.4);
    }
  }
  .nav-right {
    height: 50px;
    position: absolute;
    right: 20px;
    font-size: 12px;
    //   用户头像
    .user-img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      margin: 0 46px 0 20px;
    }
    .exit {
      text-align: center;
      img {
        padding-bottom: 5px;
      }
    }
  }
}
</style>