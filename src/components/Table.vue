<!--
element常用组件之表组件介绍：
基础表格
基础表格常用属性介绍
属性名                  作用
height          给表格设置高度，同时固定表头
show-header     设置是否显示表头
row-class-name  设置一个函数或者固定的名字作为行的类名
border          是否显示表格竖直方向的边框，设置后可通过改变边框设置列宽
-->
<template>
  <div>
    <h2>this is Table</h2>
    <!-- 基本表格 -->
    <!-- <el-table :data="tableData" style="width: 100%" height="200px" border>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table> -->
    <el-table :data="tableData">
      <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :lable="val" width=300% ></el-table-column>
      <el-table-column label="操作" v-if="isShowOperate">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  props:{
    isShowOperate:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        }],
      tableLabel:{
        date:"日期",
        name:"姓名",
        address:"地址"
      }
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$emit('edit','row')
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style scoped>
</style>
