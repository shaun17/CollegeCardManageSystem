<template>
  <div>
    <h3>Welcome</h3>
    <el-button type="primary" @click="handleRedirect">跳转到user页面</el-button>
    <el-button type="primary" @click="handleParent">跳转到parent页面</el-button>
    <el-button type="primary" @click="handleBack">返回上一级</el-button>
    <el-button type="primary" @click="handleReplace">replace</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleRedirect() {
      this.$router.push('/users')
    },
    handleParent() {
      this.$router.push('/parent')
    },
    handleBack() {
      this.$router.back()
    },
    handleReplace() {
      this.$router.replace('/parent')
    }
  }
}
</script>