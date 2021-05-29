<template>
  <el-row  class="tac" :gutter="10">
  <el-col :span="4">
    <h5>管理员-毕业设计选择系统</h5><br>
    <h5>{{this.xh}}</h5><br>
    <h5>{{this.xm}}</h5><br>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <router-link :to="{path:'/components/AdminStudent',query: {xh: this.xh,xm: this.xm}}" tag="span" >
        <el-menu-item index="1" >
          <i class="el-icon-menu"></i>管理学生<br>
        </el-menu-item>
      </router-link>
      <router-link :to="{path:'/components/AdminTeacher',query: {xh: this.xh,xm: this.xm}}" tag="span" >
        <el-menu-item index="2" >
          <i class="el-icon-menu"></i>管理教师<br>
        </el-menu-item>
      </router-link>
      <router-link :to="{path:'/components/StudentDelete',query: {xh: this.xh,xm: this.xm}}" tag="span" >
        <el-menu-item index="3" >
          <i class="el-icon-menu"></i>删除已选<br>
        </el-menu-item>
      </router-link>

    </el-menu>
  </el-col>
  <el-col :span="20">
    <el-row>
      <el-col :span="4">
        <el-input
          placeholder="请输入工号或姓名"
          v-model="input"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="4">
        <!--      <el-button>默认按钮</el-button>-->
        <el-button type="primary"
                   @click="handleSearch() ">搜索</el-button>
      </el-col>
      <el-col :span="4">
        <!--      <el-button>默认按钮</el-button>-->
        <el-button type="danger"
                   @click="handleDelete() ">删除该教师信息</el-button>
      </el-col>
    </el-row>

    <el-col :span="10">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" disabled="true">
        <el-form-item label="工号" prop="gh">
          <el-input v-model="ruleForm.xh"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
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
        <el-form-item label="个人介绍" prop="intro">
          <el-input type="textarea" v-model="ruleForm.intro"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>

     <el-table
        :data="tableData"
        style="width: 70%"
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
          prop="xh"
          label="学号"
          width="180">
        </el-table-column>
        <el-table-column
              prop="xm"
              label="学生姓名"
              >
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
      input:'',
      tableData:[
        {pid:80},
        {pid:90}
      ],
      ruleForm: {
        xh: "12345",
        xm: "傅诗淇",
        xb: "男",
        mc: "计算机学院",
        zc: "副教授",
        intro: "研究方向：计算机视觉"
      },
      rules: {
        xh: [
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
        intro: [
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
    handleSearch(){
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


