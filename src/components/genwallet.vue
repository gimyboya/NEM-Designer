<template>
  <el-row class="row-bg">
    
    <el-col :span="10">
    
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Simple Wallet" name="prng"></el-tab-pane>

        <el-tab-pane label="Brain Wallet" name="brain"></el-tab-pane>
      </el-tabs>

      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="16">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" label-position="top" class="information">
      
            <el-form-item label="Wallet name" prop="wname">
              <el-input type="text" v-model="ruleForm.wname" auto-complete="off"></el-input>
            </el-form-item>
      
            <el-form-item label="Wallet password" prop="pass">
              <el-input :type="inputype" v-model="ruleForm.pass" auto-complete="off">
                <el-button slot="append" @click="showpass">
                  <icon :name="icon" :color="icolor"></icon>
                </el-button>
              </el-input>
            </el-form-item>
      
            <el-form-item>
              <el-button type="success" @click="submitForm('ruleForm')">Next</el-button>
            </el-form-item>
      
          </el-form>
        </el-col>
      </el-row>

    </el-col>

  </el-row>
  
</template>
<script>
import icon from './Icon';

export default {
  data() {
    return {
      inputype: 'password',
      icon: 'eye-slash',
      icolor: '#13CE66',
      activeName: 'prng',
      ruleForm: {
        pass: '',
        wname: '',
      },
      rules: {
        pass: [
          { required: true, message: 'Please input your wallet password', trigger: 'blur' },
          { min: 6, message: 'The password should be at least 6 charachters', trigger: 'blur' },
        ],
        wname: [
          { required: true, message: 'Please input your wallet name', trigger: 'blur' }
        ],
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      this.activeName = tab.name;
    },
    showpass: function () {
      if (this.inputype === 'password') {
        this.inputype = 'text';
        this.icon = 'eye';
        this.icolor = '#FF4949';
      } else if(this.inputype === 'text'){
        this.inputype = 'password';
        this.icon = 'eye-slash';
        this.icolor = '#13CE66';
      }
    },
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.replace('dashboard');
          this.$store.commit('setName', this.ruleForm.wname);
          this.$store.commit('setPassword', this.ruleForm.pass);
          this.$store.commit('setWtype', this.activeName);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  components: {
    icon
  }
};
</script>
<style>
</style>
