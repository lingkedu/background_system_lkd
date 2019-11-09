<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row._id }}</span>
          </el-form-item>
          <el-form-item label="店铺电话">
            <span>{{ props.row.phone}}</span>
          </el-form-item>
          <el-form-item label="店铺简介">
            <span>{{ props.row.info }}</span>
          </el-form-item>
          <el-form-item label="店铺标语">
            <span>{{ props.row.slogan }}</span>
          </el-form-item>       
          <el-form-item label="店铺分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺特点">
            <!-- <span>{{ props.row.feature }}</span> -->
            <Feature :text="props.row.feature"></Feature>
          </el-form-item>
          <el-form-item label="配送费">
            <span>{{ props.row.delivery }}</span>
          </el-form-item>
           <el-form-item label="起送价">
            <span>{{ props.row.price }}</span>
          </el-form-item>
           <el-form-item label="起始时间">
            <span>{{ props.row.startTime }}</span>
          </el-form-item>
           <el-form-item label="结束时间">
            <span>{{ props.row.endTime }}</span>
          </el-form-item>
           <el-form-item label="上传店铺头像">
            <img :src=" props.row.imageUrl_head " alt="">
          </el-form-item>
           <el-form-item label="上传营业执照">
           <img :src=" props.row.imageUrl_charter " alt="">
          </el-form-item>
           <el-form-item label="上传餐饮服务许可证">
           <img :src=" props.row.imageUrl_certificate" alt="">
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="商品 ID" prop="id"></el-table-column>
    <el-table-column label="商品名称" prop="name"></el-table-column>
    <el-table-column label="描述" prop="desc"></el-table-column>
    <el-table-column align="right">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.row)">Edit</el-button>
        <el-button size="mini" type="danger" @click="del(scope.row._id)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { mapActions,mapState } from 'vuex'
import Feature from './feature'
export default {
  components:{
    Feature
  },
  // data() {
  //   return {
  //     tableData: []
  //   };
  // },
  methods: {
    ...mapActions(['query',"del"]),
    handleEdit(item){
      this.$router.push({
        name: "shop_modify",
        query: item,
      })
    }
  },
  computed: {
    ...mapState({
      data: state => state.shop.data 
    })
  },
  mounted () {
   this.query()
  }
};
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>