<template>
  <el-row  class="tac">
  <el-col :span="4">
    <h5>学生-毕业设计选择系统</h5><br>
    <h5>{{this.xh}}</h5><br>
    <h5>{{this.xm}}</h5><br>
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
      <el-form-item label="学院" prop="mc">
        <el-input v-model="ruleForm.mc"></el-input>
      </el-form-item>
      <el-form-item label="职称" prop="zc">
        <el-input v-model="ruleForm.zc"></el-input>
      </el-form-item>
    </el-form>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="联系方式" prop="sj">
            <el-input v-model="ruleForm.sj"></el-input>
          </el-form-item>
          <el-form-item label="个人介绍" prop="intro">
            <el-input type="textarea" v-model="ruleForm.intro"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>

  </el-row>
</template>

<script>
export default {
  created(){

  },
  // mounted(){
  //   this.tableData = [];
  //   this.xh = this.$route.query.xh
  //   this.xm = this.$route.query.xm
  //   console.log("this is table")
  //   console.log(this.xh)
  //   var _this=this;
  //   _this.$axios.get('/apis/users/getStudentChosen', {
  //     params: {
  //       xh:this.xh
  //     }
  //   }).then((response) => {
  //     var i;
  //     for(i=0;i<response.data.recordset.length;i++){
  //       _this.tableData.push(response.data.recordset[i]);
  //     }
  //     console.log(response.data.recordset.length)
  //     console.log(this.tableData);
  //   }).catch((error) => {
  //     // catch 指请求出错的处理
  //     console.log(error);
  //   });
  // },
  data() {
    return {
      xh:'111',
      xm:'李小强',
      ruleForm: {
        gh: "1234567",
        xm: "李小强",
        xb: "男",
        mc: "计算机学院",
        zc: "副教授",
        sj: "13917825603",
        intro: "研究方向：计算机视觉"
      },
      rules: {
        gh: [
          { required: true, message: '请输入学号', trigger: 'blur' },
          { min: 7, max: 7, message: '长度为7', trigger: 'blur' }
        ],
        xm: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { trigger: 'blur' }
        ],
        xb: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        mc: [
          { required: true, message: '请输入学院', trigger: 'blur' },
          { trigger: 'blur' }
        ],
        zc: [
          { required: true, message: '请输入职称', trigger: 'blur' },
          { trigger: 'blur' }
        ],
        sj: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '长度为11', trigger: 'blur' }
        ],
        intro: [
          { message: '请填写个人介绍', trigger: 'blur' },
          { min: 0, max: 50, message: '长度在 0 到 50 个字符', trigger: 'blur' }
        ]
      }
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
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


