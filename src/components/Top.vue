

<template>

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
          label="学号">
        </el-table-column>
        <el-table-column
              prop="xm"
              label="学生名"
              width="180">
        </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
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
                                                               xh: '18105001',
                                                               xm:'XX'
                                                             },
                                                             {
                                                               pid: '001',
                                                               pmc: '个人事务管理系统',
                                                               xh: '18105001',
                                                               xm:'XX'
                                                             },
                                                             {
                                                               pid: '001',
                                                               pmc: '个人事务管理系统',
                                                               xh: '18105001',
                                                               xm:'XX'
                                                             },
                                                             {
                                                               pid: '001',
                                                               pmc: '个人事务管理系统',
                                                               xh: '18105001',
                                                               xm:'XX'
                                                             },
                                                             {
                                                               pid: '001',
                                                               pmc: '个人事务管理系统',
                                                               xh: '18105001',
                                                               xm:'XX'
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
               console.log(index, row);
             }

           }
  }


</script>
