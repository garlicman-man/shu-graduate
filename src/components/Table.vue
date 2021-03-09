<template>
  <el-row  class="tac">
  <el-col :span="4">
    <h5>毕业设计选择系统</h5><br>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >


      <el-menu-item index="1">
            <router-link to="/components/Tab" tag="span" ><i class="el-icon-location"></i>毕设选择</router-link to><br>
      </el-menu-item>
      <el-menu-item index="2">
            <router-link to="/components/Table" tag="span" ><i class="el-icon-menu"></i>查看我的</router-link to><br>
      </el-menu-item>
      <el-menu-item index="3" >
            <router-link to="/components/Pop" tag="span" ><i class="el-icon-setting"></i>删除已选</router-link to><br>
      </el-menu-item>
      <el-menu-item index="4" >

      </el-menu-item>
    </el-menu>
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
          prop="gh"
          label="工号"
          width="180">
        </el-table-column>
        <el-table-column
              prop="xm"
              label="教师名"
              >
        </el-table-column>
      </el-table>
  </el-row>

</template>







<script>
export default {
      created(){
        var _this=this;
        _this.$axios.get('/apis/users/getStudent', {
           params: {
              xh:18145001
           }
         }).then((response) => {
           console.log(response);
           //console.log(response.data);
           _this.tableData.push(response.data.recordset[0]);
           console.log(this.tableData);
         }).catch((error) => {
           // catch 指请求出错的处理
           console.log(error);
         });
      },
      data() {
        return {
        //public arr: tabledata = []; //添加上一个中括号
           tableData:[]
        /*
           tableData: [{
                pid: '001',
                pmc: '个人事务管理系统',
                gh: '8765001',
                xm:'吴琪'
              },
              {
                pid: '001',
                pmc: '个人事务管理系统',
                gh: '8765001',
                xm:'吴琪'
              },
              {
                pid: '001',
                pmc: '个人事务管理系统',
                gh: '8765001',
                xm:'吴琪'
              },
              {
                pid: '001',
                pmc: '个人事务管理系统',
                gh: '8765001',
                xm:'吴琪'
              },
              {
                pid: '001',
                pmc: '个人事务管理系统',
                gh: '8765001',
                xm:'吴琪'
              }
              ]
              */
        }
      },
      methods: {
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
                     this.$axios.get('/apis/users/deletechosenproject', {
                       params: {
                         xh:18145001,
                         pid:'001'
                       }
                     }).then((response) => {
                       // then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)
                       console.log(response);
                       console.log(response.data);
                       this.resData = response.data;
                       this.tempdata = response.data.recordset
                       //this.msg = this.tempdata

                     }).catch((error) => {
                       // catch 指请求出错的处理
                       console.log(error);

                     });






           },

       }
  }


</script>


