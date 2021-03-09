<template>
  <el-row  class="tac">
  <el-col :span="4">
    <h5>学生-毕业设计选择系统</h5><br>
    <h5>{{this.xh}}</h5><br>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <router-link :to="{path:'/components/StudentChoose',query: {xh: this.xh}}" tag="span" >
        <el-menu-item index="1" >
          <i class="el-icon-menu"></i>毕设选择<br>
        </el-menu-item>
      </router-link>
      <router-link :to="{path:'/components/StudentTable',query: {xh: this.xh}}" tag="span" >
        <el-menu-item index="2" >
          <i class="el-icon-menu"></i>查看<br>
        </el-menu-item>
      </router-link>
      <router-link :to="{path:'/components/StudentDelete',query: {xh: this.xh}}" tag="span" >
        <el-menu-item index="3" >
          <i class="el-icon-menu"></i>删除已选<br>
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
          prop="gh"
          label="工号"
          width="180">
        </el-table-column>
        <el-table-column
              prop="xm"
              label="教师名"
              >
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
  data() {
    return {
      xh:'',
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


