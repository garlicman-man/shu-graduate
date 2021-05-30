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
        default-active="5"
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
      <el-col :span=10>
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
    _this.$axios.get('/apis/users/teacherGetMyOpenProject', {
      params: {
        gh:this.gh
      }
    }).then((response) => {
      var i;
      for(i=0;i<response.data.length;i++){
        _this.tableData.push(response.data[i]);
      }
      // console.log(response.data.length)
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
         console.log('this is comfirm delete my project')
         console.log("this is from upper:")
         console.log(index)
         console.log(this.tableData[index].pid)
         console.log(this.gh)
         this.$axios.get('/apis/users/teacherDeleteMyProject', {
           params: {
             pid:this.tableData[index].pid,
             gh:this.gh,
           }
         }).then((response) => {
           console.log(response);
         }).catch((error) => {
           // catch 指请求出错的处理
           console.log(error);
         });
         this.$message({
           type: "success",
           message: "删除我的项目成功!"
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
