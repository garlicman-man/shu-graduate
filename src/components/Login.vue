


<template>
 <el-row  class="tac">
  <el-col :span="12">
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
 <el-form-item label="账号" prop="id">
    <el-input type="primary" v-model="ruleForm.id" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>

  </el-col>
  </el-row>

</template>








<script>
  export default {
    data() {

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          id: '',
          pass: '',
          checkPass: '',

        },
        rules: {
          id:[
          {validator: validatePass,trigger:'blur'}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$axios.get('/apis/users/check', {
          params: {
            xh:this.ruleForm.id,
            pwd:this.ruleForm.pass
          }
        }).then((response) => {
          // then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)
          console.log(response);
          console.log(response.data);
          this.resData = response.data;
          this.tempdata = response.data.recordset
          //this.msg = this.tempdata
          if(this.tempdata.length==1){
            //'localhost:8080/tab?xh='+this.ruleForm.id
            this.$router.push({ name: 'Tab', params: { xh: this.ruleForm.id }});
          }
        }).catch((error) => {
          // catch 指请求出错的处理
          console.log(error);
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
