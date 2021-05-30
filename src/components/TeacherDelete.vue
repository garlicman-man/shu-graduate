<template>
  <el-row  class="tac">
    <el-col :span="4">
      <el-card class="box-card">
        <div>教师-毕设管理系统</div>
        <div>{{this.gh}}</div>
        <div>{{this.xm}}</div>
      </el-card>
      <el-menu
        default-active="3"
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
  <el-col :span=18>
<el-table
        :data="tableData"
        style="width: 90%"
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
        <el-table-column
          prop="xh"
          label="学号"
          width="180">
        </el-table-column>
        <el-table-column
              prop="xm"
              label="学生名"
              width="180">
        </el-table-column>
    <el-table-column label="操作">
    <template slot-scope="scope">
      <el-popconfirm
        confirm-button-text='好的'
        @confirm="ConfirmDelete(scope.$index, scope.row)"
        cancel-button-text='不用了'
        icon="el-icon-info"
        icon-color="red"
        title="确定删除所选项目吗？"
      >
        <el-button
         slot="reference"
        @click="handleDelete() ">删除</el-button>
      </el-popconfirm>
    </template>
    </el-table-column>
  </el-table>
  </el-col>
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
    _this.$axios.get('/apis/users/teacherGetChosenStudents', {
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
  created(){
    console.log("this is pop")
    console.log(this.gh)
  },
  data() {
    return {
      gh:'',
      xm:'',
      tableData: []
    }
  },
  methods: {
    handleExit(){
      this.$router.push({ name: 'Login', query: {}});
    },
       ConfirmDelete(index, row) {
         // var _this = this;
         console.log('this is comfirm delete')
         console.log("this is from upper:")
         console.log(index)
         this.$axios.get('/apis/users/teacherDeleteChosenStudent', {
           params: {
             pid:this.tableData[index].pid,
             gh:this.gh,
             xh:this.tableData[index].xh
           }
         }).then((response) => {
           console.log(response);
         }).catch((error) => {
           // catch 指请求出错的处理
           console.log(error);
         });
         this.$message({
           type: "success",
           message: "删除学生成功!"
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
