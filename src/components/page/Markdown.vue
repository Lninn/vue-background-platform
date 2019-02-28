<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>markdown</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
        <div class="plugins-tips">
            <p>前台展示数据</p>
            <br>
            <p>这个时候就需要解析markdown语法了。可以使用 <a href="https://github.com/miaolz123/vue-markdown" target="_blank">vue-markdown</a>：一个基于vue.js的markdown语法解析插件.</p>
        </div>
    </div>
</template>

<script>
  import { markdownEditor } from 'vue-simplemde'
  import 'simplemde/dist/simplemde.min.css'
  export default {
    data: function () {
      return {
        content: '',
        configs: {
          status: true,
          initialValue: 'Hello BBK',
          renderingConfig: {
            codeSyntaxHighlighting: true,
            highlightingTheme: true
          }
        }
      }
    },
    components: {
      markdownEditor
    }
  }
</script>
