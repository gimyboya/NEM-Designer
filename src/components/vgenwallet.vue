<template>
  <el-row class="row-bg">
    
    <el-col :span="10">
    
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Simple Wallet" name="prng">
        
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="16">
                <el-form :model="ruleFormPrng" :rules="rulesPrng" ref="ruleFormPrng" label-width="70px" label-position="top" class="information">
            
                  <el-form-item label="Wallet name" prop="wname">
                    <el-input type="text" v-model="ruleFormPrng.wname" auto-complete="off"></el-input>
                  </el-form-item>
            
                  <el-form-item label="Wallet password" prop="pass">
                    <el-input :type="inputypePrng" v-model="ruleFormPrng.pass" auto-complete="off">
                      <el-button slot="append" @click="showpassPrng">
                        <vicon :name="iconPrng" :color="icolorPrng"></vicon>
                      </el-button>
                    </el-input>
                  </el-form-item>
            
            
                  <el-form-item label="Wallet private key" prop="pk">
                    <el-input :type="inputypePrng2" v-model="ruleFormPrng.pk" auto-complete="off">
                      <el-button slot="append" @click="showpassPrng2">
                        <vicon :name="iconPrng2" :color="icolorPrng2"></vicon>
                      </el-button>
                    </el-input>
                  </el-form-item>

                  
                <el-form-item label="Network" prop="network">
                  <el-select v-model="ruleFormPrng.network" placeholder="Network"> 
                    <el-option-group v-for="group in networks" :key="group.label" :label="group.label">
                      <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-option-group>
                  </el-select>
                </el-form-item>


                  <el-form-item>
                    <el-button type="success" :loading="loading" @click="submitForm('ruleFormPrng')">Next</el-button>
                  </el-form-item>
            
                </el-form>
              </el-col>
            </el-row>

        </el-tab-pane>

        <el-tab-pane label="Brain Wallet / Voucher" name="brain">
          
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="16">
              <el-form :model="ruleFormBrain" :rules="rulesBrain" ref="ruleFormBrain" label-width="70px" label-position="top" class="information">
          
                <el-form-item label="Wallet name" prop="wname">
                  <el-input type="text" v-model="ruleFormBrain.wname" auto-complete="off"></el-input>
                </el-form-item>
          
                <el-form-item label="Wallet password" prop="pass">
                  <el-input :type="inputypeBrain" v-model="ruleFormBrain.pass" auto-complete="off">
                    <el-button slot="append" @click="showpassBrain">
                      <vicon :name="iconBrain" :color="icolorBrain"></vicon>
                    </el-button>
                  </el-input>
                </el-form-item>

                
                <el-form-item label="Network" prop="network">
                  <el-select v-model="ruleFormBrain.network" placeholder="Network">
                    <el-option-group v-for="group in networks" :key="group.label" :label="group.label">
                      <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-option-group>
                  </el-select>
                </el-form-item>

                
                <el-form-item>
                  <el-button type="success" :loading="loading" @click="submitForm('ruleFormBrain')">Next</el-button>
                </el-form-item>
          
              </el-form>
            </el-col>
          </el-row>

        </el-tab-pane>
      </el-tabs>


    </el-col>

  </el-row>
  
</template>
<script>
import nem from 'nem-sdk';
import Vicon from './vicon';
import { Message } from 'element-ui';
import { Loading } from 'element-ui';


export default {
  data() {
    var checkPK = (rule, value, callback) =>{
      if (!value) {
        return callback(new Error('Simple wallet requires a private key'));
      } else if (!nem.utils.helpers.isPrivateKeyValid(value)){
        return callback(new Error('Incorrect private key!'));
      } else{
        callback();
      }
    };
    return {
      inputypePrng: 'password',
      inputypeBrain: 'password',
      inputypePrng2: 'password',
      iconPrng: 'eye-slash',
      iconBrain: 'eye-slash',
      iconPrng2: 'eye-slash',
      icolorPrng: '#13CE66',
      icolorBrain: '#13CE66',
      icolorPrng2: '#13CE66',
      ruleFormPrng: {
        pass: '',
        wname: '',
        pk: '',
        network: '',
      },
      ruleFormBrain: {
        pass: '',
        wname: '',
        network: '',
      },
      networks: [{
        label: 'NEM network (public)',
        options: [{
          value: 104,
          label: 'Mainnet'
        },]
      }, {
        label: 'Mijin network (private)',
        options: [{
          value: 96,
          label: 'Mijin'
        },]
      }, {
        label: 'Test network (dev)',
          options: [{
            value: -104,
            label: 'Testnet'
          },]
      }
      ],
      rulesPrng: {
        pass: [
          { required: true, message: 'Please input your wallet password', trigger: 'blur' },
          { min: 6, message: 'The password should be at least 6 charachters', trigger: 'blur' },
        ],
        wname: [
          { required: true, message: 'Please input your wallet name', trigger: 'blur' }
        ],
        pk: [
          { validator: checkPK, trigger: 'blur' }
        ],
        network: [
          { type: 'number', required: true, message: 'Please choose a network', trigger: 'change' }
        ],
      },
      rulesBrain: {
        pass: [
          { required: true, message: 'Please input your wallet password', trigger: 'blur' },
          { min: 6, message: 'The password should be at least 6 charachters', trigger: 'blur' },
        ],
        wname: [
          { required: true, message: 'Please input your wallet name', trigger: 'blur' }
        ],
        network: [
          { type: 'number', required: true, message: 'Please choose a network', trigger: 'change' }
        ],
      },
     activeName: 'prng',
     loading: false,
    };
  },
  methods: {
    handleClick(tab, event) {
      this.activeName = tab.name;
    },
    showpassPrng: function () {
      if (this.inputypePrng === 'password') {
        this.inputypePrng = 'text';
        this.iconPrng = 'eye';
        this.icolorPrng = '#FF4949';
      } else if(this.inputypePrng === 'text'){
        this.inputypePrng = 'password';
        this.iconPrng = 'eye-slash';
        this.icolorPrng = '#13CE66';
      }
    },
    showpassBrain: function () {
      if (this.inputypeBrain === 'password') {
        this.inputypeBrain = 'text';
        this.iconBrain = 'eye';
        this.icolorBrain = '#FF4949';
      } else if (this.inputypeBrain === 'text') {
        this.inputypeBrain = 'password';
        this.iconBrain = 'eye-slash';
        this.icolorBrain = '#13CE66';
      }
    },
    showpassPrng2: function () {
      if (this.inputypePrng2 === 'password') {
        this.inputypePrng2 = 'text';
        this.iconPrng2 = 'eye';
        this.icolorPrng2 = '#FF4949';
      } else if (this.inputypePrng2 === 'text') {
        this.inputypePrng2 = 'password';
        this.iconPrng2 = 'eye-slash';
        this.icolorPrng2 = '#13CE66';
      }
    },
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) { 
          this.loading = true;
          // if it's valid we create a wallet and commit evry information to the store
          this.$store.commit('setWtype', this.activeName);
          if(this.activeName === 'prng'){

            // we commit name and pass to the store
            this.$store.commit('setName', this.ruleFormPrng.wname);
            this.$store.commit('setPassword', this.ruleFormPrng.pass);
            // with the pass and pk we create and commit a common
            var common = nem.model.objects.create("common")(this.ruleFormPrng.pass, this.ruleFormPrng.pk);
            this.$store.commit('setCommon', common);

            const _this = this; // we preserve the this scope (to work inside the nem functions)

            // create a simple or import wallet
            const wallet = nem.model.wallet
              .importPrivateKey(
              _this.$store.getters.getName, 
              _this.$store.getters.getPassword, 
              _this.$store.getters.getCommon.privateKey, 
              _this.ruleFormPrng.network);

          this.$store.commit('setWallet', wallet); // commit the wallet to the store

          if(nem.model.address.isValid(wallet.accounts[0].address)){
            this.$store.commit('setAddress', nem.utils.format.address(wallet.accounts[0].address));
          }else{
            Message.error({
              showClose: true,
              message: 'Invalid address!',
            });
            this.loading = false;
            return false;
          }

          }else if(this.activeName === 'brain'){

            // we commit the name and pass to the store
            this.$store.commit('setName', this.ruleFormBrain.wname);
            this.$store.commit('setPassword', this.ruleFormBrain.pass);

            const _this = this; // we preserve the this scope (to work inside the nem functions)

            // create a brain wallet
            const wallet = nem.model.wallet
              .createBrain( 
              _this.$store.getters.getName,
              _this.$store.getters.getPassword,
              _this.ruleFormBrain.network);

            this.$store.commit('setWallet', wallet); // we save the wallet

            // create a common object it's the object that will contain the pass and pk
            const common = nem.model.objects.create('common')(this.$store.getters.getPassword, '');

            // Get the wallet account to decrypt
            const account = wallet.accounts[0];

            // we check and commit the address to the store
            if (nem.model.address.isValid(wallet.accounts[0].address)) {
              this.$store.commit('setAddress', nem.utils.format.address(wallet.accounts[0].address));
            } else {
              Message.error({
                showClose: true,
                message: 'Invalid address!',
              });
              this.loading = false;
              return false;
            }

            // Decrypt account private key in the common object
            nem.crypto.helpers.passwordToPrivatekey(common, account, wallet.accounts[0].algo);

            this.$store.commit('setCommon', common); // push the common to the store
          }
          this.$router.replace('dashboard');

        } else {
          Message.error({
            showClose: true,
            message: 'Form invalid!',
          });
          return false;
        }
      });
    }
  },
  components: {
    Vicon
  }
};
</script>
<style>
</style>
