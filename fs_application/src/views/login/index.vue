<template>
  <div class="register">
    <div class="container">
      <h3>零刻度-后台管理</h3>
      <div class="container_input">
        <el-input v-model="input" placeholder="请输入内容" id="input1"></el-input>
        <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
        <el-button type="primary">登录</el-button>
        <div class="prompt_">
          <p>温馨提示:</p>
          <p>未登录过的新用户，自动注册</p>
          <p>注册过的用户可凭账号密码登录</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>
  
<style scoped>
.register {
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;
  background-color: #324057;
}
.container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  width: 400px;
  height: 400px;
  vertical-align: middle;
}
.container h3 {
  color: white;
  text-align: center;
}

.container .container_input {
  width: 300px;
  height: 250px;
  background-color: white;
  margin: 20px auto 20px;
  border-radius: 10px;

}

.container .container_input .el-input {
  width: 250px;
  text-align: center;
  margin-left: 25px;
  margin-top:20px;
}

.container .container_input .el-button {
  width:250px;
  margin-left: 25px;
  margin-top:20px;
}
.container .container_input .prompt_ {
  color: red;
  font-size: 12px;
  margin-left: 25px;
  margin-top:5px;
}

.container .container_input .prompt_  p{
  line-height: 20px;
}
</style>