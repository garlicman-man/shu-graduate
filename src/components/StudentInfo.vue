<template>
  <el-row :span="24" :gutter="15">
    <el-row>
      <el-page-header @back="handleExit" title="退出">
      </el-page-header>
    </el-row>
    <el-col :span="4">
      <h2>学生毕设管理系统</h2>
      <h3>学号：{{this.xh}}</h3>
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
        <router-link :to="{path:'/components/StudentInfo',query: {xh: this.xh,xm: this.xm}}" tag="span" >
          <el-menu-item index="4" >
            <i class="el-icon-menu"></i>个人信息<br>
          </el-menu-item>
        </router-link>
        <router-link :to="{path:'/components/StudentSearchTeacherInfo',query: {xh: this.xh,xm: this.xm}}" tag="span" >
          <el-menu-item index="5" >
            <i class="el-icon-menu"></i>查询教师信息<br>
          </el-menu-item>
        </router-link>

      </el-menu>
    </el-col>
    <el-col :span="10">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="学号" prop="xh">
          <el-input v-model="ruleForm.xh"></el-input>
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
        <el-form-item label="绩点" prop="jd">
          <el-input v-model="ruleForm.jd"></el-input>
        </el-form-item>
  <!--      <el-form-item label="个人介绍" prop="intro">-->
  <!--        <el-input type="textarea" v-model="ruleForm.intro"></el-input>-->
  <!--      </el-form-item>-->

  <!--      <el-form-item>-->
  <!--        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>-->
  <!--        <el-button @click="resetForm('ruleForm')">重置</el-button>-->
  <!--      </el-form-item>-->
      </el-form>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="联系方式" prop="sj">
          <el-input v-model="ruleForm.lxfs"></el-input>
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



    _this.$axios.get('/apis/users/getStudentInfo', {
      params: {
        xh:this.xh
      }
    }).then((response) => {
      var i;
      for(i=0;i<response.data.length;i++){
        _this.tableData.push(response.data[i]);
      }
      this.ruleForm.xh = this.tableData[0].xh;
      this.ruleForm.xm = this.tableData[0].xm;
      this.ruleForm.xy = this.tableData[0].xy;
      this.ruleForm.jd = this.tableData[0].jd;
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
      xh:'111',
      xm:'李小强',
      ruleForm: {
        xh: "18120182",
        xm: "冯沛欣",
        xb: "女",
        xy: "计算机学院",
        jd: "3.55",
        grjs: "我是冯沛欣",
        lxfs: "1212121"

      },
      rules: {
        xh: [
          { required: true, message: '请输入学号', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
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
        jd: [
          { required: true, message: '请输入绩点', trigger: 'blur' },
          { trigger: 'blur' }
        ],
        lxfs: [
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
      var _this=this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.$axios.get('/apis/users/updateStudentInfo', {
            params: {
              xb:this.ruleForm.xb,
              xh:this.ruleForm.xh,
              xm:this.ruleForm.xm,
              xy:this.ruleForm.xy,
              jd:this.ruleForm.jd,
              grjs:this.ruleForm.grjs,
              lxfs:this.ruleForm.lxfs
            }
          }).then((response) => {
            alert('修改成功');
            console.log(response)
          }).catch((error) => {
            // catch 指请求出错的处理
            alert('修改成功');
            console.log(error);
          });
        } else {
          alert('修改失败');
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


