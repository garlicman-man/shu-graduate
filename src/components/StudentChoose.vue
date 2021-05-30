<template>
  <el-row :span="24" :gutter="15">
    <el-row>
      <el-page-header @back="handleExit" title="退出">
      </el-page-header>
    </el-row>
    <el-col :span="4">
      <h2>学生-毕设管理系统</h2>
      <h3>学号：{{this.xh}}</h3>
      <h3>姓名：{{this.xm}}</h3>
      <el-menu
        default-active="1"
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
<!--    <el-button type="primary" plain @click="handleExit() ">退出登录</el-button>-->
    <el-col :span="18">
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
      <el-table-column
        prop="gh"
        label="工号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="xm"
        label="教师名"
        width="180"
      >
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-popconfirm
            confirm-button-text='好的'
            @confirm="ConfirmChoice(scope.$index, scope.row)"
            cancel-button-text='不用了'
            icon="el-icon-info"
            icon-color="green"
            title="确定选择所选项目吗？"
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

<!--<template>-->
<!--  <el-row  class="tac">-->
<!--    <el-col :span="4">-->
<!--      <el-card class="box-card">-->
<!--        <div>学生-毕设管理系统</div>-->
<!--        <div>{{this.xh}}</div>-->
<!--        <div>{{this.xm}}</div>-->
<!--      </el-card>-->
<!--      <el-menu-->
<!--        default-active="1"-->
<!--        class="el-menu-vertical-demo"-->
<!--        @open="handleOpen"-->
<!--        @close="handleClose"-->
<!--        background-color="#545c64"-->
<!--        text-color="#fff"-->
<!--        active-text-color="#ffd04b"-->
<!--      >-->
<!--        <router-link :to="{path:'/components/StudentChoose',query: {xh: this.xh,xm: this.xm}}" tag="span" >-->
<!--          <el-menu-item index="1" >-->
<!--            <i class="el-icon-menu"></i>毕设选择<br>-->
<!--          </el-menu-item>-->
<!--        </router-link>-->
<!--        <router-link :to="{path:'/components/StudentTable',query: {xh: this.xh,xm: this.xm}}" tag="span" >-->
<!--          <el-menu-item index="2" >-->
<!--            <i class="el-icon-menu"></i>查看已选<br>-->
<!--          </el-menu-item>-->
<!--        </router-link>-->
<!--        <router-link :to="{path:'/components/StudentDelete',query: {xh: this.xh,xm: this.xm}}" tag="span" >-->
<!--          <el-menu-item index="3" >-->
<!--            <i class="el-icon-menu"></i>删除已选<br>-->
<!--          </el-menu-item>-->
<!--        </router-link>-->
<!--        <router-link :to="{path:'/components/StudentInfo',query: {xh: this.xh,xm: this.xm}}" tag="span" >-->
<!--          <el-menu-item index="4" >-->
<!--            <i class="el-icon-menu"></i>个人信息<br>-->
<!--          </el-menu-item>-->
<!--        </router-link>-->
<!--        <router-link :to="{path:'/components/StudentSearchTeacherInfo',query: {xh: this.xh,xm: this.xm}}" tag="span" >-->
<!--          <el-menu-item index="5" >-->
<!--            <i class="el-icon-menu"></i>查询教师信息<br>-->
<!--          </el-menu-item>-->
<!--        </router-link>-->

<!--    </el-menu>-->
<!--  </el-col>-->

<!--    <el-button type="primary" plain @click="handleExit() ">退出登录</el-button>-->

<!--  <el-col :span=20>-->
<!--<el-table-->
<!--        :data="tableData"-->
<!--        style="width: 70%"-->
<!--        border='ture'-->
<!--        >-->
<!--        <el-table-column-->
<!--          prop="pid"-->
<!--          label="项目号"-->
<!--          width="150">-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          prop="pmc"-->
<!--          label="项目名"-->
<!--          width="150">-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          prop="gh"-->
<!--          label="工号"-->
<!--          width="150">-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          prop="xm"-->
<!--          label="教师名"-->
<!--          width="150"-->
<!--              >-->
<!--        </el-table-column>-->
<!--        <el-table-column label="操作">-->
<!--              <template slot-scope="scope">-->
<!--                    <el-popconfirm-->
<!--                      confirm-button-text='好的'-->
<!--                      @confirm="ConfirmChoice(scope.$index, scope.row)"-->
<!--                      cancel-button-text='不用了'-->
<!--                      icon="el-icon-info"-->
<!--                      icon-color="green"-->
<!--                      title="确定选择所选项目吗？"-->
<!--                    >-->
<!--                      <el-button-->
<!--                       slot="reference"-->
<!--                      @click="handleChoice(scope.$index, scope.row) ">选择</el-button>-->
<!--                    </el-popconfirm>-->

<!--              </template>-->
<!--            </el-table-column>-->

<!--  </el-table>-->
<!--  </el-col>-->
<!--  </el-row>-->
<!--</template>-->


<script>
export default {
  mounted(){
    this.tableData = [];
    this.xh = this.$route.query.xh
    this.xm = this.$route.query.xm
    console.log("this is table")
    console.log(this.xh)

    var _this=this;
    _this.$axios.get('/apis/users/studentGetAllProjectsExceptSelected', {
      params: {
        xh:this.xh
      }
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
    // this.xh = this.$route.query.xh
    // this.xm = this.$route.query.xm
    console.log("this is tab")
    console.log(this.xh)
  },
  data() {
    return {
      xh: '',
      xm:'',
       tableData: []
    }
  },
  methods: {
    handleExit(){
      this.$router.push({ name: 'Login', query: {}});
    },
    tiaozhuan(router){
      this.$router.push({ name: router, params: { xh: this.ruleForm.id }});
    },
    handleChoice(index, row) {

    },
    ConfirmChoice(index, row) {
      // var _this = this;
      console.log('this is comfirm add')
      console.log("this is from upper:")
      console.log(index)
      console.log(row)
      this.$axios.get('/apis/users/studentChooseProject', {
        params: {
          pid:this.tableData[index].pid,
          xh:this.xh,
          gh:this.tableData[index].gh
        }
      }).then((response) => {
        // then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)
        console.log(response);
        // this.$message({
        //   type: "success",
        //   message: "选择成功!"
        // })
      }).catch((error) => {

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

</style>
