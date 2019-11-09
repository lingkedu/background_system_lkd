<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-row class="tac">
      <h3>零刻度</h3>
      <el-col :span="12" style="width:200px;">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>首页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/home">首页详情</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/user">用户列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/shop">商家列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link to="/food">食品列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-4">
                <router-link to="/order">订单列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-5">
                <router-link to="/administrator">管理员列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/shop_add">添加商铺</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/food_add">添加商品</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>图表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/chart">用户分布</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/edit">文本编辑</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/set">设置</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>说明</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/explain">说明</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>

    <el-container>
      <el-header
        style="text-align: right; font-size: 16px;line-height:60px;background-color:#eff2f7;border-left:1px solid #eff2f7"
      >
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>零刻度</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>

<style lang="stylus" scoped>
.tac {
  height: 100%;

  h3 {
    width: 199px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    background-color: rgb(84, 92, 100);
    color: rgb(255, 255, 255);
  }

  .el-col {
    height: 100%;
    .el-menu-vertical-demo {
      height: 100%;
    }
  }
}
.el-submenu .el-menu-item-group .el-menu-item a{
  color: white;
}
// .el-col .el-menu-vertical-demo .el-submenu .el-submenu__title:hover{
//   background-color: red  !important ;
// }

// .el-menu .el-menu-item-group ul .el-menu-item:hover{
//    background-color: red  !important ;
// }
</style>
<