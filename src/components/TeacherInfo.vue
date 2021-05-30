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
            <el-input type="textarea" v-model="ruleForm.grjs"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  created(){

  },
  mounted() {
    this.tableData = [];
    this.gh = this.$route.query.gh
    this.xm = this.$route.query.xm
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
      this.ruleForm.xb = this.tableData[0].xb;
      this.ruleForm.xm = this.tableData[0].xm;
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
      gh:'111',
      xm:'李小强',
      ruleForm: {
        gh: "1234567",
        xm: "李小强",
        xb: "男",
        mc: "计算机学院",
        zc: "副教授",
        sj: "13917825603",
        grjs: "研究方向：计算机视觉"
      },
      rules: {
        gh: [
          { required: true, message: '请输入工号', trigger: 'blur' },
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
            this.$message({
              type: "Success",
              message: "修改成功"
            })
            console.log(response)
          }).catch((error) => {
            this.$message({
              type: "Fail",
              message: "修改失败"
            })
            // catch 指请求出错的处理
            console.log(error);
          });
        } else {
          this.$message({
            type: "Fail",
            message: "修改失败"
          })
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


