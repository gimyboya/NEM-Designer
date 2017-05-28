<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="20">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" label-position="top" class="information">
        
        <el-col :span="10">
          <el-form-item label="Wallet name" prop="wname">
            <el-input type="text" v-model="ruleForm.wname" auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item label="Wallet password" prop="pass">
            <el-input :type="inputype" :icon="icon" v-model="ruleForm.pass" auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-checkbox v-model="checked" @change="showpass" >Show password</el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          </el-form-item>
          <el-form-item label="Settings">
            <el-checkbox-group v-model="settings.type">
              <el-tooltip placement="top">
                <p slot="content">Recommended</p>
                <el-checkbox label="Include my password" name="type"></el-checkbox>
              </el-tooltip>
              
              <el-tooltip placement="top">
                <p slot="content">Recommended: Display your private key in palin text.</p>
                <el-checkbox label="Include RAW private key" name="type"></el-checkbox>          
              </el-tooltip>

                
              <el-tooltip placement="top">
                <p slot="content">Allow the use of the mobile app to import your wallet.</p>
                <el-checkbox label="QR for mobile wallet import" name="type"></el-checkbox>             
              </el-tooltip>

            </el-checkbox-group>
          </el-form-item>
        </el-col>


      </el-form>
    </el-col>



  </el-row>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      inputype: 'password',
      icon: 'search',
      settings: {
        type: [],
      },
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
    showpass: function(){
      if(this.checked){
        this.inputype = 'text';
      }else{
        this.inputype = 'password';
      }
    }
  },

}
</script>
<style>
.el-checkbox{
  margin-left: 15px;
}
.panel{
  margin: 20px;
  padding: 10px;
}
</style>

