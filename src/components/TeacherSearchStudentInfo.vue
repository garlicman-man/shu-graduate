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
          default-active="7"
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
      <el-col :span="20">
        <el-row>
          <el-col :span="4">
            <el-input
              placeholder="请输入学生学号"
              v-model="xh"
              clearable>
            </el-input>
          </el-col>
          <el-col :span="4">
            <!--      <el-button>默认按钮</el-button>-->
            <el-button type="primary"
                       @click="handleSearch() ">搜索</el-button>
          </el-col>
          <el-button type="primary" plain @click="handleExit() ">退出登录</el-button>
        </el-row>

        <el-col :span="10">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" disabled="true">
            <el-form-item label="工号" prop="xh">
              <el-input v-model="ruleForm.xh"></el-input>
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
            <el-form-item label="职称" prop="jd">
              <el-input v-model="ruleForm.jd"></el-input>
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
  </el-row>
</template>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-input {
  width: 200px;
}
.box-card {
  width: 198px;
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
    // _this.$axios.get('/apis/users/getStudentInfo', {
    //   params: {
    //     xh:this.xh
    //   }
    // }).then((response) => {
    //   var i;
    //   for(i=0;i<response.data.length;i++){
    //     _this.tableData.push(response.data[i]);
    //   }
    //   console.log(response.data.length)
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
      input:'',
      xh:'',
      tableData:[],
      ruleForm: {
        xh: "",
        xm: "",
        xb: "",
        xy: "",
        jd: "",
        lxfs: "",
        grjs: ""
      },
      rules: {
        xh: [
          { required: true, message: '请输入学号', trigger: 'blur' },
          { min: 8, max: 8, message: '长度为8', trigger: 'blur' }
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
    handleExit(){
      this.$router.push({ name: 'Login', query: {}});
    },
    handleSearch(){
      console.log(this.xh)
      var _this=this;
      _this.$axios.get('/apis/users/getStudentInfo', {
        params: {
          xh:this.xh
        }
      }).then((response) => {
        console.log(response)
        var i;
        for(i=0;i<response.data.length;i++){
          _this.tableData.push(response.data[i]);
        }
        this.ruleForm.xh = this.tableData[0].xh;
        this.ruleForm.xb = this.tableData[0].xb;
        this.ruleForm.xm = this.tableData[0].xm;
        this.ruleForm.xy = this.tableData[0].xy;
        this.ruleForm.jd = this.tableData[0].jd;
        this.ruleForm.grjs = this.tableData[0].grjs;
        this.ruleForm.lxfs = this.tableData[0].lxfs;

        // console.log(this.tableData);
      }).catch((error) => {
        // catch 指请求出错的处理
        console.log(error);
      });
      console.log(this.input)
    },
  }
}


</script>


