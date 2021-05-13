<template>
  <el-container>
    <el-header>
      <div class="logo">
        <img src="../assets/logo.png" alt />
        <span>权益卡后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 菜单栏 -->
      <el-aside :width="isCollapse?'64px':'200px'">
        <!-- 缩放按钮 -->
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="this.$route.path"
        >
          <!-- 一级菜单 -->
          <el-submenu :index="item.id" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/'+subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主界面 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Children from '@/components/Children.vue'
export default {
  name: 'Home',
  data() {
    return {
      msg: 'hello,我是父组件',
      childMsg: '',
      menuList: [],
      iconsObj: {
        '125': 'el-icon-user',
        '103': 'el-icon-goods',
        '101': 'el-icon-setting',
        '102': 'el-icon-suitcase',
        '145': 'el-icon-coin'
      },
      isCollapse: false
    }
  },
  created() {
    this.getMenuList()
  },
  components: {
    HelloWorld,
    Children
  },
  methods: {
    showChild(data) {
      this.childMsg = data
    },
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList() {
      // const { data: res } = await this.$http.get('menus')
      // 模拟菜单请求
      const res = 
            {
                "data": [
                    {
                        "id": 101, 
                        "authName": "商品管理", 
                        "path": "", 
                        "children": [
                            {
                                "id": 104, 
                                "authName": "商品列表", 
                                "path": "goods", 
                                "children": [ ]
                            },{
                                "id": 104, 
                                "authName": "团购列表", 
                                "path": "teamgoods", 
                                "children": [ ]
                            }
                        ]
                    },{
                      "id": 102, 
                        "authName": "用户管理", 
                        "path": "", 
                        "children": [
                            {
                                "id": 104, 
                                "authName": "用户列表", 
                                "path": "users", 
                                "children": [ ]
                            },{
                                "id": 105, 
                                "authName": "权限列表", 
                                "path": "roles", 
                                "children": [ ]
                            },{
                                "id": 105, 
                                "authName": "角色列表", 
                                "path": "permissions", 
                                "children": [ ]
                            }
                        ]
                    }
                ], 
                "meta": {
                    "msg": "获取菜单列表成功", 
                    "status": 200
                }
            }
      console.log(res)
      if (res.meta.status !== 200) {
        this.$message.error(res.meta.msg)
      } else {
        this.menuList = res.data
      }
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;

  .logo {
    height: 60px;
    display: flex;
    align-items: center;

    img {
      padding-right: 15px;
      width: 30px;
      height: 30px;
    }
  }
}

.el-header {
  background-color: #373d41;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #333744;
  color: #333;
  text-align: left;
  line-height: 200px;

  .el-menu {
    // 修复左侧菜单栏右边框显示不平整
    border-right: none;
  }
}

.el-main {
  background-color: rgb(235, 237, 241);
  color: #333;
}

.el-container {
  height: 100%;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>