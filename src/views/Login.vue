<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 图标区 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <!-- 网站名称区 -->
      <div class="title_box">
        <p>{{title}}</p>
      </div>
      <!-- 登录表单 -->
      <el-form :model="loginForm" :rules="rules" class="login_form" ref="loginFormRef">
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginFormRef')" style="width:100%">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="resetForm('loginFormRef')" style="width:100%">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      title: '后台管理系统',
      // 表单的数据绑定
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码至少6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      console.log(this)
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const { data: res } = await this.$http.post('login', this.loginForm)
          console.log(res)
          if (res.meta.status === 200) {
            this.$message.success('登录成功')
            window.sessionStorage.setItem('token', res.data.token)
            this.$router.push('/home')
          } else {
            tthis.$message.success('登录失败')
          }
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.login_container {
  height: 100%;
  background-color: #fff;

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    /**横向右移50%，垂直上移50%*/
    transform: translate(-50%, -50%);
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }

  .title_box {
    color: #409eff;
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    top: 26%;
    left: 28%;
    font: bold 30px arial, sans-serif;
  }

  .login_box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 435px;
    height: 450px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px #eee;
  }
}
</style>