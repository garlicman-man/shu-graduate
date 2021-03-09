

<template>
<el-row class='tac'>
 <el-col :span="4">
    <h5>学生-毕业设计选择系统</h5><br>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <el-menu-item index="1" >
        <router-link :to="{path:'/components/StudentChoose',query: {xh: this.xh}}" tag="span" >
          <i class="el-icon-menu"></i>毕设选择</router-link><br>
      </el-menu-item>
      <el-menu-item index="2" >
        <router-link :to="{path:'/components/StudentTable',query: {xh: this.xh}}" tag="span" >
          <i class="el-icon-menu"></i>查看</router-link><br>
      </el-menu-item>
      <el-menu-item index="3" >
        <router-link :to="{path:'/components/StudentDelete',query: {xh: this.xh}}" tag="span" >
          <i class="el-icon-menu"></i>删除已选</router-link><br>
      </el-menu-item>


    </el-menu>
  </el-col>
  <el-col :span=18>
<el-table
        :data="tableData"
        style="width: 90%"
        border='ture'
        >
        <el-table-column
          prop="pid"
          label="项目号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="pmc"
          label="项目名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="gh"
          label="工号"
          width="180">
        </el-table-column>
        <el-table-column
              prop="xm"
              label="教师名"
              width="180">
        </el-table-column>
    <el-table-column label="操作">
    <template slot-scope="scope">
      <el-popconfirm
        confirm-button-text='好的'
        @confirm="ConfirmDelete(scope.$index, scope.row)"
        cancel-button-text='不用了'
        icon="el-icon-info"
        icon-color="red"
        title="确定删除所选项目吗？"
      >
        <el-button
         slot="reference"
        @click="handleDelete() ">删除</el-button>
      </el-popconfirm>
    </template>
    </el-table-column>
  </el-table>
  </el-col>
  </el-row>
</template>

<script>
export default {
  mounted(){
    this.tableData = [];
    this.xh = this.$route.query.xh
    console.log("this is table")
    console.log(this.xh)
    var _this=this;
    _this.$axios.get('/apis/users/getStudentChosen', {
      params: {
        xh:this.xh
      }
    }).then((response) => {
      var i;
      for(i=0;i<response.data.recordset.length;i++){
        _this.tableData.push(response.data.recordset[i]);
      }
      console.log(response.data.recordset.length)
      console.log(this.tableData);
    }).catch((error) => {
      // catch 指请求出错的处理
      console.log(error);
    });
  },
  created(){
    this.xh = this.$route.query.xh
    console.log("this is pop")
    console.log(this.xh)
  },
  data() {
    return {
      xh:'',
      tableData: []
}
    },
        methods: {
             handleOpen(key, keyPath) {
               console.log(key, keyPath);
             },
             handleClose(key, keyPath) {
               console.log(key, keyPath);
             },
             handleEdit(index, row) {
               console.log(index, row);
             },
             handleDelete(index, row) {

             },
             ConfirmDelete(index, row) {
               // var _this = this;
               console.log('this is comfirm delete')
               console.log("this is from upper:")
               console.log(index)
               this.$axios.get('/apis/users/deletechosenproject', {
                 params: {
                   pid:this.tableData[index].pid,
                   xh:this.xh,
                   gh:this.tableData[index].gh
                 }
               }).then((response) => {
                 // then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)
                 console.log(response);
                   this.$message({
                     type: "success",
                     message: "删除成功!"
                   })
               }).catch((error) => {
                 // catch 指请求出错的处理
                 console.log(error);
               });
               this.tableData.splice(index, 1);
             }

         }
  }


</script>
