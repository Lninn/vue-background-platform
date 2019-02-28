<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-setting"></i>测试页面</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="ms-doc">
      <h3>这是一个测试页面, 未编码的页面都将跳转到这里</h3>
      <article>
        <h1>VueDemo</h1>
        <p>基于Vue.js 2.x系列 + Element UI构建</p>
        <h2>功能</h2>
        <el-card class="box-card">
          <div class="text item">
            <p>Vue:  是一套用于构建用户界面的渐进式框架, <a href="https://cn.vuejs.org/">访问地址</a></p>
            <p>Element UI: 是一套采用 Vue 2.0 作为基础框架实现的组件库, <a href="http://element.eleme.io/#/zh-CN">访问地址</a></p>
            <p>登录/注销</p>
            <p>表格: Element UI组件，用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作 <a href="http://element.eleme.io/#/zh-CN/component/table">访问地址</a></p>
            <p>表单: Element UI组件，由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据 <a href="http://element.eleme.io/#/zh-CN/component/form">访问地址</a></p>
            <p>图表: vue.js封装sChart.js的图表组件 <a href="https://github.com/lin-xin/vue-schart">访问地址</a></p>
            <p>富文本编辑器: 基于Quill、适用于Vue2的富文本编辑器 <a href="https://github.com/surmon-china/vue-quill-editor">访问地址</a></p>
            <p>markdown编辑器: Vue.js的Markdown Editor组件 <a href="https://github.com/F-loat/vue-simplemde">访问地址</a></p>
            <p>图片拖拽/裁剪上传: 一款轻量级的vue上传插件，支持裁剪。 <a href="https://github.com/Vanthink-UED/vue-core-image-upload">访问地址</a></p>
          </div>
        </el-card>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
      }
    }
  }
</script>

<style scoped>
    .ms-doc {
        width:100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3 {
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article {
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1 {
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p {
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox {
        margin-bottom: 5px;
    }
    .text {
      font-size: 14px;
    }

    .item {
      padding: 18px 0;
    }

    .box-card {
      width: 800px;
    }
</style>
