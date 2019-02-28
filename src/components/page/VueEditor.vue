<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <quill-editor :content="content"
                       :options="editorOption"
                       @change="onEditorChange($event)">
         </quill-editor>
        <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import { quillEditor } from 'vue-quill-editor'

    export default {
      data: function () {
        return {
          content: '<p>Hello BBK</p>',
          editorOption: {
            /* something config */
          }
        }
      },
      components: {
        quillEditor
      },
      methods: {
        onEditorChange ({ editor, html, text }) {
          this.content = html
        },
        submit () {
          console.log(this.content)
          this.$message.success('提交成功！')
        }
      },
      computed: {
        editor () {
          return this.$refs.myTextEditor.quillEditor
        }
      }
    }
</script>
<style scoped>
    .editor-btn{
        margin-top: 20px;
    }
</style>
