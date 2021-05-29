<template>
  <div class="login-container">
    <el-form :model="ruleForm" :rules="rules2"
             status-icon
             ref="ruleForm"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">毕业设计管理系统</h3>
      <el-form-item prop="username">
        <el-input type="text"
                  v-model="ruleForm.id"
                  auto-complete="off"
                  placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
                  v-model="ruleForm.pass"
                  auto-complete="off"
                  placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-checkbox
        v-model="checked"
        class="rememberme"
      >记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      logining: false,
      ruleForm: {
        id: '',
        pass: '',
      },
      rules2: {
        id: [{required: true, message: 'please enter your account', trigger: 'blur'}],
        pass: [{required: true, message: 'enter your password', trigger: 'blur'}]
      },
      checked: false
    }
  },
  methods: {
    handleSubmit(event){
      this.$refs.ruleForm.validate((valid) => {
        if(valid){
          this.$axios.get('/apis/users/check', {
            params: {
              xh:this.ruleForm.id,
              pwd:this.ruleForm.pass
            }
          }).then((response) => {
            // then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)
            console.log(response);
            // this.resdata = response.data;
            if(response.data.length==1){
              this.$message({
                type: "Success",
                message: "成功登录"
              })
              // console.log("this is test teacher or student")

              console.log(this.ruleForm.id)
              console.log()
              if(this.ruleForm.id[0] == '1'){
                console.log("go to studenttable")
                this.$router.push({ name: 'StudentInfo', query: { xh: this.ruleForm.id,xm: response.data[0].xm }});
              }
              else if(this.ruleForm.id[0] == '8'){
                this.$router.push({ name: 'TeacherTable', query: { gh: this.ruleForm.id,xm: response.data[0].xm }});
              }
              else{
                // goto admin
                // this.$router.push({ name: 'TeacherTable', query: { gh: this.ruleForm.id,xm: this.resdata[0].xm }});
              }
            }
            else{
              this.$message({
                type: "Fail",
                message: "失败，错误的用户名或者密码"
              })
            }
          }).catch((error) => {
            // catch 指请求出错的处理
            console.log(error);
          });

        }else{
          console.log('error submit!');
          return false;
        }
      })
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>


<!--<template>-->
<!--  <el-row  class="tac">-->
<!--  <el-col :span="12">-->
<!--    <h5>&#45;&#45;&#45;&#45;毕业设计选择系统登录界面&#45;&#45;&#45;&#45;</h5><br>-->
<!--    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
<!--     <el-form-item label="账号" prop="id">-->
<!--        <el-input type="primary" v-model="ruleForm.id" autocomplete="off"></el-input>-->
<!--     </el-form-item>-->
<!--    <el-form-item label="密码" prop="pass">-->
<!--      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>-->
<!--    </el-form-item>-->
<!--    <el-form-item>-->
<!--      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
<!--      <el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--    </el-form-item>-->
<!--    </el-form>-->
<!--  </el-col>-->
<!--  </el-row>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    data() {-->

<!--      var validatePass = (rule, value, callback) => {-->
<!--        if (value === '') {-->
<!--          callback(new Error('请输入密码'));-->
<!--        } else {-->
<!--          if (this.ruleForm.checkPass !== '') {-->
<!--            this.$refs.ruleForm.validateField('checkPass');-->
<!--          }-->
<!--          callback();-->
<!--        }-->
<!--      };-->
<!--      var validatePass2 = (rule, value, callback) => {-->
<!--        if (value === '') {-->
<!--          callback(new Error('请再次输入密码'));-->
<!--        } else if (value !== this.ruleForm.pass) {-->
<!--          callback(new Error('两次输入密码不一致!'));-->
<!--        } else {-->
<!--          callback();-->
<!--        }-->
<!--      };-->
<!--      return {-->
<!--        ruleForm: {-->
<!--          id: '',-->
<!--          pass: '',-->
<!--          checkPass: '',-->
<!--          // haha:''-->

<!--        },-->
<!--        resdata:'',-->
<!--        rules: {-->
<!--          id:[-->
<!--          {validator: validatePass,trigger:'blur'}-->
<!--          ],-->
<!--          pass: [-->
<!--            { validator: validatePass, trigger: 'blur' }-->
<!--          ],-->
<!--          checkPass: [-->
<!--            { validator: validatePass2, trigger: 'blur' }-->
<!--          ]-->
<!--        }-->
<!--      };-->
<!--    },-->
<!--    methods: {-->
<!--      submitForm(formName) {-->
        this.$axios.get('/apis/users/check', {
          params: {
            xh:this.ruleForm.id,
            pwd:this.ruleForm.pass
          }
        }).then((response) => {
          // then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)
          console.log(response);
          // console.log(response.data);
          this.resdata = response.data;
          // this.tempdata = response.data.recordset
          //this.msg = this.tempdata

          if(this.resdata.length==1){
            this.$message({
              type: "Success",
              message: "成功登录"
            })
            console.log("this is test teacher or student")
            console.log(this.ruleForm.id[0])
            if(this.ruleForm.id[0] == 1){
              this.$router.push({ name: 'StudentTable', query: { xh: this.ruleForm.id,xm: this.resdata[0].xm }});
            }
            else{
              this.$router.push({ name: 'TeacherTable', query: { gh: this.ruleForm.id,xm: this.resdata[0].xm }});
            }
          }
          else{
            this.$message({
              type: "Fail",
              message: "失败，错误的用户名或者密码"
            })
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
<!--</script>-->

