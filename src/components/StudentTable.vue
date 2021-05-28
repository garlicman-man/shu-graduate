<template>
  <el-row  class="tac">
  <el-col :span="4">
    <el-card class="box-card">
      <div>学生-毕设管理系统</div>
      <div>{{this.xh}}</div>
      <div>{{this.xm}}</div>
    </el-card>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <router-link :to="{path:'/components/StudentChoose',query: {xh: this.xh,xm: this.xm}}" tag="span" >
        <el-menu-item index="1" >
          <i class="el-icon-menu"></i>毕设选择<br>
        </el-menu-item>
      </router-link>

      <router-link :to="{path:'/components/StudentTable',query: {xh: this.xh,xm: this.xm}}" tag="span" >
        <el-menu-item index="2" >
          <i class="el-icon-menu"></i>查看已选<br>
        </el-menu-item>
      </router-link>
      <router-link :to="{path:'/components/StudentDelete',query: {xh: this.xh,xm: this.xm}}" tag="span" >
        <el-menu-item index="3" >
          <i class="el-icon-menu"></i>删除已选<br>
        </el-menu-item>
      </router-link>

    </el-menu>
  </el-col>
     <el-table
        :data="tableData"
        style="width: 60%"
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
            width = "180"
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
    this.xm = this.$route.query.xm
    console.log("this is table")
    console.log(this.xh)
    var _this=this;
    _this.$axios.get('/apis/users/studentGetChosenProject', {
      params: {
        xh:this.xh
      }
    }).then((response) => {
      console.log(response);
      var i;
      for(i=0;i<response.data.length;i++){

        _this.tableData.push(response.data[i]);
      }
      console.log(this.tableData);
    }).catch((error) => {
      // catch 指请求出错的处理
      console.log(error);
    });
  },
  data() {
    return {
      xh:'',
      xm:'',
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
    goBack() {
      console.log('go back');
    }
  }
}


</script>


<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 240px;
}
</style>
