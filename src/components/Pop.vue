<template>
  <div>
    <!--
      常用弹出组件：
          el-dialog
          el-popover
      sync修饰符在作用,sync:其实是一种语法塘：
          示例：ElementUI中的el-dialog
          第一种写法：<el-dialog：visible.sync="dialogVisible"
              这种写法是:关闭或是点击空白处无需特别处理，el-dialog组件内部会修改当前值状态，通过.sync修饰符传递给父组件；

          第二种写法：<el-dialog:visible="dialogVisible" :before-close="beforeClose"
              这种写法需要再beforeClose方法内手动处理：this.dialogVisible = false

    两种：第一种绑定属性。v-bind:title="doc.title"
      第二种：它监听了一个跟新事件：v-on:update:title="doc.title=Sevent"
      我们知道propo当中的数据一般都是单向绑定的，也就是说父组件传给子组件的数据，父组件可以随便更改，子组件不能更改父组件当中的数据
    -->
    <h1>this is Pop</h1>
    <el-button type="text" @click="dialogVisible = true"
    >点击打开 Dialog</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style scoped>
</style>
