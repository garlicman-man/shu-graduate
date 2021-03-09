<template>
  <el-row  class="tac">
  <el-col :span="4">
    <h5>教师-毕业设计选择系统</h5><br>
    <h5>{{this.gh}}</h5><br>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >

      <router-link :to="{path:'/components/TeacherChoose',query: {gh: this.gh}}" tag="span" >
        <el-menu-item index="1" >
          <i class="el-icon-menu"></i>选择学生<br>
        </el-menu-item>
      </router-link>
      <router-link :to="{path:'/components/TeacherTable',query: {gh: this.gh}}" tag="span" >
        <el-menu-item index="2" >
          <i class="el-icon-menu"></i>查看我选的学生<br>
        </el-menu-item>
      </router-link>
      <router-link :to="{path:'/components/TeacherDelete',query: {gh: this.gh}}" tag="span" >
        <el-menu-item index="3" >
          <i class="el-icon-menu"></i>删除我选的学生<br>
        </el-menu-item>
      </router-link>

    </el-menu>
  </el-col>
     <el-table
        :data="tableData"
        style="width: 70%"
        border='ture'>
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
          prop="xm"
          label="学生名"
          width="180">
        </el-table-column>
         <el-table-column
           prop="xh"
           label="学号"
           width="180">
         </el-table-column>
      </el-table>
  </el-row>
</template>

<script>
export default {
  created(){

  },
  mounted(){
    this.tableData = [];
    this.gh = this.$route.query.gh
    console.log("this is table")
    console.log(this.gh)
    var _this=this;
    _this.$axios.get('/apis/users/getTeacherChosen', {
      params: {
        gh:this.gh
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
  data() {
    return {
      gh:'',
      tableData:[]
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
      console.log(index, row);
    },
  }
}


</script>


