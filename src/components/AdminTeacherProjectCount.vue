<template>
  <el-row :span="24" :gutter="15">
    <el-row>
      <el-page-header @back="handleExit" title="退出">
      </el-page-header>
    </el-row>
    <el-col :span="4">
      <h2>管理员毕设管理系统</h2>
      <h3>工号：{{this.gh}}</h3>
      <h3>姓名：{{this.xm}}</h3>
      <el-menu
        default-active="4"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        >
        <router-link :to="{path:'/components/AdminStudent',query: {gh: this.gh,xm: this.xm}}" tag="span" >
          <el-menu-item index="1" >
            <i class="el-icon-menu"></i>管理学生<br>
          </el-menu-item>
        </router-link>
        <router-link :to="{path:'/components/AdminTeacher',query: {gh: this.gh,xm: this.xm}}" tag="span" >
          <el-menu-item index="2" >
            <i class="el-icon-menu"></i>管理教师<br>
          </el-menu-item>
        </router-link>
        <router-link :to="{path:'/components/AdminStudentRank',query: {gh: this.gh,xm: this.xm}}" tag="span" >
          <el-menu-item index="3" >
            <i class="el-icon-menu"></i>查看学生排名<br>
          </el-menu-item>
        </router-link>
        <router-link :to="{path:'/components/AdminTeacherProjectCount',query: {gh: this.gh,xm: this.xm}}" tag="span" >
          <el-menu-item index="4" >
            <i class="el-icon-menu"></i>查看教师项目数<br>
          </el-menu-item>
        </router-link>
        <router-link :to="{path:'/components/AdminProjectStudentCount',query: {gh: this.gh,xm: this.xm}}" tag="span" >
          <el-menu-item index="5" >
            <i class="el-icon-menu"></i>查看项目选择人数<br>
          </el-menu-item>
        </router-link>
        <router-link :to="{path:'/components/AdminOpenProjectStudentRank',query: {gh: this.gh,xm: this.xm}}" tag="span" >
          <el-menu-item index="6" >
            <i class="el-icon-menu"></i>查看项目学生绩点排名<br>
          </el-menu-item>
        </router-link>

      </el-menu>
    </el-col>
<!--      <el-button type="primary" plain @click="handleExit() ">退出登录</el-button>-->
    <el-col :span="15">
      <el-table
        :data="tableData"
        style="width: 100%"
        border='ture'>
        <el-table-column
          prop="gh"
          label="工号"
          width="183">
        </el-table-column>
        <el-table-column
          prop="xm"
          label="姓名"
          width="183">
        </el-table-column>
        <el-table-column
          prop="count"
          label="项目数"
          width="183">
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<style>
.el-row {
  margin-bottom: 20px;
}
</style>

<script>
export default {
  created(){

  },
  mounted(){
    this.tableData = [];
    this.gh = this.$route.query.gh
    this.xm = this.$route.query.xm
    console.log("this is table")
    console.log(this.xh)
    var _this=this;
    _this.$axios.get('/apis/users/getProjectNumOfTeacher', {
      params: {

      }
    }).then((response) => {
      var i;
      for(i=0;i<response.data.length;i++){
        _this.tableData.push(response.data[i]);
      }
      console.log(response.data.length)
      console.log(this.tableData);
    }).catch((error) => {
      // catch 指请求出错的处理
      console.log(error);
    });
  },
  data() {
    return {
      gh:'',
      xm:'',
      tableData:[]
    }
  },

  methods: {
    handleExit(){
      this.$router.push({ name: 'Login', query: {}});
    },
  }
}


</script>


