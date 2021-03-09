

<template>
<el-row class='tac'>
 <el-col :span="4">
    <h5>教师-毕业设计选择系统</h5><br>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <el-menu-item index="1" >
        <router-link :to="{path:'/components/TeacherChoose',query: {gh: this.gh}}" tag="span" >
          <i class="el-icon-menu"></i>选择学生</router-link><br>
      </el-menu-item>
      <el-menu-item index="2" >
        <router-link :to="{path:'/components/TeacherTable',query: {gh: this.gh}}" tag="span" >
          <i class="el-icon-menu"></i>查看我选的学生</router-link><br>
      </el-menu-item>
      <el-menu-item index="3" >
        <router-link :to="{path:'/components/TeacherDelete',query: {gh: this.gh}}" tag="span" >
          <i class="el-icon-menu"></i>删除我选的学生</router-link><br>
      </el-menu-item>



    </el-menu>
  </el-col>
  <el-col :span=18>
<el-table
        :data="tableData"
        style="width: 70%"
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
              label="姓名"
              >
        </el-table-column>
        <el-table-column label="操作">
              <template slot-scope="scope">
                    <el-popconfirm
                      confirm-button-text='好的'
                      @confirm="ConfirmChoice(scope.$index, scope.row)"
                      cancel-button-text='不用了'
                      icon="el-icon-info"
                      icon-color="green"
                      title="确定选择该学生吗？"
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
</template>







<script>
export default {
  mounted(){
    this.tableData = [];
    this.gh = this.$route.query.gh
    console.log("this is table")
    console.log(this.gh)
    var _this=this;
    _this.$axios.get('/apis/users/getAllStudentsExceptSelected', {
      params: {
        gh:this.gh
      }
    }).then((response) => {
      var i;
      for(i=0;i<response.data.recordset.length;i++){
        _this.tableData.push(response.data.recordset[i]);
      }
      console.log(response.data.recordset.length)
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
       tableData: []
    }
  },
  methods: {
    tiaozhuan(router){
      this.$router.push({ name: router, params: { gh: this.ruleForm.id }});
    },
    handleChoice(index, row) {

    },
    ConfirmChoice(index, row) {
      // var _this = this;
      console.log('this is comfirm add')
      console.log("this is from upper:")
      console.log(index)
      this.$axios.get('/apis/users/chooseStudent', {
        params: {
          pid:this.tableData[index].pid,
          gh:this.gh,
          xh:this.tableData[index].xh
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
