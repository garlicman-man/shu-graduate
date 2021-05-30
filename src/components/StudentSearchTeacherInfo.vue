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
        default-active="5"
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
    <el-col :span="20">
      <el-row>
        <el-col :span="4">
          <el-input
            placeholder="请输入教师工号"
            v-model="gh"
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
        </el-form>
    </el-col>
  </el-col>
  </el-row>
</template>

<style>
.box-card {
  width: 198px;
}
.el-row {
  margin-bottom: 20px;
}
</style>

<script>
export default {
  created(){

  },
  mounted(){
    this.xh = this.$route.query.xh
    this.xm = this.$route.query.xm
  },
  data() {
    return {
      xh:'',
      xm:'',
      input:'',
      gh:'',
      tableData:[],
      ruleForm: {
        gh: "",
        xm: "",
        xb: "",
        xy: "",
        zc: "",
        lxfs: "",
        grjs: ""
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
    handleExit(){
      this.$router.push({ name: 'Login', query: {}});
    },
    handleSearch(){
      console.log(this.gh)
      var _this=this;
      _this.$axios.get('/apis/users/getTeacherInfo', {
        params: {
          gh:this.gh
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
      console.log(this.input)
    },
  }
}


</script>


