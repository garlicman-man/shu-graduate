<template>
  <el-row :span="24" :gutter="15">
    <el-row>
      <el-page-header @back="handleExit" title="退出">
      </el-page-header>
    </el-row>
    <el-row>
      <el-col :span="4">
        <h2>教师-毕设管理系统</h2>
        <h3>工号：{{this.gh}}</h3>
        <h3>姓名：{{this.xm}}</h3>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        >

        <router-link :to="{path:'/components/TeacherChoose',query: {gh: this.gh, xm: this.xm}}" tag="span" >
          <el-menu-item index="1" >
            <i class="el-icon-menu"></i>选择学生<br>
          </el-menu-item>
        </router-link>
        <router-link :to="{path:'/components/TeacherTable',query: {gh: this.gh, xm: this.xm}}" tag="span" >
          <el-menu-item index="2" >
            <i class="el-icon-menu"></i>查看我选的学生<br>
          </el-menu-item>
        </router-link>
        <router-link :to="{path:'/components/TeacherDelete',query: {gh: this.gh, xm: this.xm}}" tag="span" >
          <el-menu-item index="3" >
            <i class="el-icon-menu"></i>删除我选的学生<br>
          </el-menu-item>
        </router-link>
        <router-link :to="{path:'/components/TeacherOpen',query: {gh: this.gh, xm: this.xm}}" tag="span" >
          <el-menu-item index="4" >
            <i class="el-icon-menu"></i>开设项目<br>
          </el-menu-item>
        </router-link>
        <router-link :to="{path:'/components/TeacherProject',query: {gh: this.gh, xm: this.xm}}" tag="span" >
          <el-menu-item index="5" >
            <i class="el-icon-menu"></i>查看开设项目<br>
          </el-menu-item>
        </router-link>
        <router-link :to="{path:'/components/TeacherProject',query: {gh: this.gh, xm: this.xm}}" tag="span" >
          <el-menu-item index="6" >
            <i class="el-icon-menu"></i>个人信息<br>
          </el-menu-item>
        </router-link>
        <router-link :to="{path:'/components/TeacherProject',query: {gh: this.gh, xm: this.xm}}" tag="span" >
          <el-menu-item index="7" >
            <i class="el-icon-menu"></i>查询学生信息<br>
          </el-menu-item>
        </router-link>

      </el-menu>
      </el-col>
  <!--    <el-button type="primary" plain @click="handleExit() ">退出登录</el-button>-->
      <el-col span="18">
       <el-table
          :data="tableData"
          style="width: 70%"
          border='ture'>
          <el-table-column
            prop="pid"
            label="项目号"
            width="165">
          </el-table-column>
          <el-table-column
            prop="pmc"
            label="项目名"
            width="165">
          </el-table-column>
          <el-table-column
            prop="xm"
            label="学生名"
            width="165">
          </el-table-column>
           <el-table-column
             prop="xh"
             label="学号"
             width="165">
           </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </el-row>
</template>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-input {
  width: 120px;
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
    console.log(this.gh)
    var _this=this;
    _this.$axios.get('/apis/teachers/teacherGetChosenStudents', {
      params: {
        gh:this.gh
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
      input:'',
      input2:'',
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
