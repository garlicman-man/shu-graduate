<template>
  <el-row :span="24" :gutter="15">
    <el-row>
      <el-page-header @back="handleExit" title="退出">
      </el-page-header>
    </el-row>
    <el-row>
      <el-col :span="4">
        <h2>教师毕设管理系统</h2>
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
<!--    <el-button type="primary" plain @click="handleExit() ">退出登录</el-button>-->
      <el-col :span=14>
        <el-table
          :data="tableData"
          style="width: 100%"
          border='ture'
        >
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
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-popconfirm
                confirm-button-text='好的'
                @confirm="ConfirmChoice(scope.$index, scope.row)"
                cancel-button-text='不用了'
                icon="el-icon-info"
                icon-color="green"
                title="确定开设该项目吗？"
              >
                <el-button
                 slot="reference"
                @click="handleChoice(scope.$index, scope.row) ">选择</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  mounted(){
    this.tableData = [];
    this.gh = this.$route.query.gh
    this.xm = this.$route.query.xm
    console.log("this is table")
    console.log(this.gh)
    var _this=this;
    _this.$axios.get('/apis/users/getAllProjects', {
    }).then((response) => {
      var i;
      for(i=0;i<response.data.length;i++){
        _this.tableData.push(response.data[i]);
      }
      // console.log(response.data.recordset.length)
      console.log(this.tableData);
    }).catch((error) => {
      // catch 指请求出错的处理
      console.log(error);
    });
  },
  created(){
    this.gh = this.$route.query.gh
    console.log("this is tab")
    console.log(this.gh)
  },
  data() {
    return {
      gh: '',
      xm: '',
      tableData: []
    }
  },
  methods: {
    tiaozhuan(router){
      this.$router.push({ name: router, params: { gh: this.ruleForm.id }});
    },
    handleExit(){
      this.$router.push({ name: 'Login', query: {}});
    },
    ConfirmChoice(index, row) {
      console.log('this is comfirm add')
      console.log("this is from upper:")
      console.log(index)
      this.$axios.get('/apis/users/teacherOpenProject', {
        params: {
          pid:this.tableData[index].pid,
          pmc:this.tableData[index].pmc,
          gh:this.gh,
          xm:this.xm
          // xh:this.tableData[index].xh
        }
      }).then((response) => {
        // then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)
        console.log(response);
        this.$message({
          type: "success",
          message: "选择成功!"
        })
      }).catch((error) => {
        console.log("this is error")
        console.log(error);
      });
      this.$message({
        type: "success",
        message: "选择成功!"
      })
      this.tableData.splice(index, 1);
    }
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
