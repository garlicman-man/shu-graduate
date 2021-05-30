<template>
  <el-row  class="tac">
    <el-col :span="4">
      <el-card class="box-card">
        <div>教师-毕设管理系统</div>
        <div>{{this.gh}}</div>
        <div>{{this.xm}}</div>
      </el-card>
    <el-menu
      default-active="6"
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
      <router-link :to="{path:'/components/TeacherInfo',query: {gh: this.gh, xm: this.xm}}" tag="span" >
        <el-menu-item index="6" >
          <i class="el-icon-menu"></i>个人信息<br>
        </el-menu-item>
      </router-link>
      <router-link :to="{path:'/components/TeacherSearchStudentInfo',query: {gh: this.gh, xm: this.xm}}" tag="span" >
        <el-menu-item index="7" >
          <i class="el-icon-menu"></i>查询学生信息<br>
        </el-menu-item>
      </router-link>

    </el-menu>
  </el-col>
    <el-button type="primary" plain @click="handleExit() ">退出登录</el-button>
      <el-col :span="10">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" disabled="true">
      <el-form-item label="工号" prop="gh">
        <el-input v-model="ruleForm.gh"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="xm">
        <el-input v-model="ruleForm.xm"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="xb">
        <el-input v-model="ruleForm.xb"></el-input>
      </el-form-item>
      <el-form-item label="学院" prop="xy">
        <el-input v-model="ruleForm.xy"></el-input>
      </el-form-item>
      <el-form-item label="职称" prop="zc">
        <el-input v-model="ruleForm.zc"></el-input>
      </el-form-item>
    </el-form>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="联系方式" prop="lxfs">
            <el-input v-model="ruleForm.lxfs"></el-input>
          </el-form-item>
          <el-form-item label="个人介绍" prop="grjs">
            <el-input type="textarea" v-model="ruleForm.grjs"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>

  </el-row>
</template>

<style>
.box-card {
  width: 205px;
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



    _this.$axios.get('/apis/users/getTeacherInfo', {
      params: {
        gh:this.gh
      }
    }).then((response) => {
      var i;
      for(i=0;i<response.data.length;i++){
        _this.tableData.push(response.data[i]);
      }
      this.ruleForm.gh = this.tableData[0].gh;
      this.ruleForm.xm = this.tableData[0].xm;
      this.ruleForm.xb = this.tableData[0].xb;
      this.ruleForm.xy = this.tableData[0].xy;
      this.ruleForm.zc = this.tableData[0].zc;
      this.ruleForm.grjs = this.tableData[0].grjs;
      this.ruleForm.lxfs = this.tableData[0].lxfs;

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
      ruleForm: {
        gh: '',
        xm: '',
        xb: '',
        xy: '',
        zc: '',
        lxfs: '',
        grjs: ''
      },
      rules: {
        gh: [
          { required: true, message: '请输入学号', trigger: 'blur' },
          { trigger: 'blur' }
        ],
        xm: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { trigger: 'blur' }
        ],
        xb: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        xy: [
          { required: true, message: '请输入学院', trigger: 'blur' },
          { trigger: 'blur' }
        ],
        zc: [
          { required: true, message: '请输入职称', trigger: 'blur' },
          { trigger: 'blur' }
        ],
        lxfs: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { trigger: 'blur' }
        ],
        grjs: [
          { message: '请填写个人介绍', trigger: 'blur' },
          { min: 0, max: 50, message: '长度在 0 到 50 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleExit(){
      this.$router.push({ name: 'Login', query: {}});
    },
    submitForm(formName) {
      var _this=this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.$axios.get('/apis/users/updateTeacherInfo', {
            params: {
              xb:this.ruleForm.xb,
              gh:this.ruleForm.gh,
              xm:this.ruleForm.xm,
              xy:this.ruleForm.xy,
              zc:this.ruleForm.zc,
              grjs:this.ruleForm.grjs,
              lxfs:this.ruleForm.lxfs
            }
          }).then((response) => {
            console.log(response)
          }).catch((error) => {
            // catch 指请求出错的处理
            console.log(error);
          });

          alert('submit!');

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}


</script>


