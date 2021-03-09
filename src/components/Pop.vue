

<template>
<el-row class='tac'>
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
          prop="gh"
          label="工号"
          width="180">
        </el-table-column>
        <el-table-column
              prop="xm"
              label="教师名"
              width="180">
        </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">

<!--
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
-->
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
              @click="handleDelete(scope.$index, scope.row) ">删除</el-button>
            </el-popconfirm>

      </template>
    </el-table-column>
  </el-table>
  </el-col>
  </el-row>
</template>







<script>
export default {

   /*

      */
        data() {
            return {
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

//this.tableData.splice(index, 1);
             },
             ConfirmDelete(index, row) {
               console.log(index, row);
                this.tableData.splice(index, 1);

/*
                                    pid:this.tableData[index].pid
                                    pmc: '个人事务管理系统',
                                    gh: '8765001',
                                    xm:'吴琪'
                                    */



                this.$message({
                 type: "success",
                 message: "删除成功!"
                })
             }

         }
  }


</script>
