<template>
  <div class="header">
    <div class="logo">企业后台管理系统</div>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <img class="user-logo" src="../../../static/img/img.jpg">
          {{username}}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="user-setup">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-menu"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">功能选项1</el-dropdown-item>
          <el-dropdown-item command="loginout">功能选项2</el-dropdown-item>
          <el-dropdown-item command="loginout">功能选项3</el-dropdown-item>
          <el-dropdown-item command="loginout">功能选项4</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="user-notice">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <i class="el-icon-bell"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix">
            系统通知1
            <el-badge class="mark" :value="12">
          </el-badge></el-dropdown-item>
          <el-dropdown-item class="clearfix">
            系统通知2
            <el-badge class="mark" :value="3">
          </el-badge></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        name: 'Hello, Vue'
      }
    },
    computed: {
      username () {
        let username = localStorage.getItem('ms_username')
        return username || this.name
      }
    },
    methods: {
      handleCommand (command) {
        if (command === 'loginout') {
          localStorage.removeItem('ms_username')
          this.$router.push('/login')
        }
      }
    }
  }
</script>
<style>
  .header {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 70px;
      font-size: 22px;
      color: #fff;
      line-height: 70px;
      background: rgb(64, 158, 255);
  }
  .header .logo {
      float: left;
      width:250px;
      text-align: center;
  }
  .user-info {
      float: right;
      padding-right: 50px;
      font-size: 16px;
      color: #fff;
  }

  .user-setup {
      float: right;
      padding-right: 15px;
      color: #fff;
  }
  [class^="el-icon-"] {
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 22px;
    color: #fff;
  }
  .user-notice {
      float: right;
      padding-right: 15px;
      color: #fff;
  }
  .user-setup .el-dropdown-link, .user-notice .el-dropdown-link {
      cursor: pointer;
  }
  .user-info .el-dropdown-link {
      position: relative;
      display: inline-block;
      padding-left: 50px;
      color: #fff;
      cursor: pointer;
      vertical-align: middle;
  }
  .user-info .user-logo {
      position: absolute;
      left: 0;
      top: 15px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
  }
  .el-dropdown-menu__item {
      text-align: center;
  }
</style>
