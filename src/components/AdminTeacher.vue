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
        default-active="2"
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
    <el-col :span="20">
      <el-row>
        <el-col :span="4">
          <el-input
            placeholder="请输入教师工号"
            v-model="gh2"
            clearable>
          </el-input>
        </el-col>
        <el-col :span="4">
          <!--      <el-button>默认按钮</el-button>-->
          <el-button type="primary"
                     @click="handleSearch() ">搜索</el-button>
        </el-col>
<!--        <el-button type="primary" plain @click="handleExit() ">退出登录</el-button>-->
      </el-row>
      <el-col :span="10">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" disabled="true">
          <el-form-item label="工号" prop="gh">
            <el-input v-model="ruleForm.gh"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="xm">
            <el-input v-model="ruleForm.xm"></el-input>
          </el-form-item>
        </el-form>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="性别" prop="xb">
            <el-input v-model="ruleForm.xb"></el-input>
          </el-form-item>
          <el-form-item label="学院" prop="xy">
            <el-input v-model="ruleForm.xy"></el-input>
          </el-form-item>
          <el-form-item label="职称" prop="zc">
            <el-input v-model="ruleForm.zc"></el-input>
          </el-form-item>
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
    // console.log("this is table")
    // console.log(this.xh)
    // var _this=this;
    // _this.$axios.get('/apis/users/getTeacherInfo', {
    //   params: {
    //     gh:this.gh2
    //   }
    // }).then((response) => {
    //   var i;
    //   for(i=0;i<response.data.recordset.length;i++){
    //     _this.tableData.push(response.data.recordset[i]);
    //   }
    //   console.log(response.data.recordset.length)
    //   console.log(this.tableData);
    // }).catch((error) => {
    //   // catch 指请求出错的处理
    //   console.log(error);
    // });
  },
  data() {
    return {
      gh:'',
      xm:'',
      gh2:'',
      tableData:[],
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
          { required: true, message: '请输入工号', trigger: 'blur' },
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
          { required: true, message: '请输入手机号', trigger: 'blur' },
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
    handleChoice(){
      console.log(this.input)
    },
    handleExit(){
      this.$router.push({ name: 'Login', query: {}});
    },
    handleSearch(){
      console.log(this.gh2)
      var _this=this;
      _this.$axios.get('/apis/users/getTeacherInfo', {
        params: {
          gh:this.gh2
        }
      }).then((response) => {
        console.log(response)
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

        // console.log(this.tableData);
      }).catch((error) => {
        // catch 指请求出错的处理
        console.log(error);
      });

      _this.$axios.get('/apis/users/teacherGetChosenStudents', {
        params: {
          gh:this.gh2
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

      console.log(this.input)
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
          alert('修改成功');
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
            // alert('修改成功');
            console.log(error);
          });
        } else {
          // alert('修改失败');
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


