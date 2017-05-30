<template>
<section>
  <el-row class="tac custom-scrollbar" id="vpic_sidebar">
    <el-col :span="24">

      <el-menu unique-opened default-active="1-2" class="el-menu-vertical-demo">

        <el-submenu index="1">
          <template slot="title"><vicon name="object-ungroup" scale="1.5" class="menu_icon"></vicon>Elements</template>
          
          <el-submenu index="1-1">
            <template slot="title"><vicon name="font" scale="1.5" class="menu_icon"></vicon>Raw text</template>
              <el-menu-item index="1-1-1">
                <div class="menue-checkboxes">
                  <el-checkbox class="indetermined" :indeterminate="isIndeterminateText" style="margin: 15px 0;" v-model="checkAllTexts" @change="handleCheckAllTextsChange">Include all texts</el-checkbox>
                  <el-checkbox-group v-model="checkedTexts" @change="handlecheckedTextsChange">
                    <el-checkbox v-for="text in texts" :label="text" :key="text">{{text}}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-menu-item>
          </el-submenu>
          
          <el-submenu index="1-2"><template slot="title"><vicon name="qrcode" scale="1.5" class="menu_icon"></vicon>QR code</template>
              <el-menu-item index="1-2" >
                <div class="menue-checkboxes">
                  <el-checkbox class="indetermined" :indeterminate="isIndeterminateQR" style="margin: 15px 0;" v-model="checkAllQR" @change="handleCheckAllQRChange">Include all QR codes</el-checkbox>
                  <el-checkbox-group v-model="checkedQR" @change="handlecheckedQRChange">
                    <el-checkbox v-for="qr in qrs" :label="qr" :key="qr">{{qr}}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>  
    </el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col spane="24">  
      <div class="logo">
        <img src="./assets/img/logo.png" width="30px">
        <img src="./assets/img/power.png" width="50px">
      </div>   
    </el-col>
  </el-row>
</section>
</template>

<script>
import Vicon from './vicon';
import nem from 'nem-sdk';

const Texts = ['PrivateKey', 'Password', 'Wallet name', 'Address'];
const QRs = ['Mobile Import', 'PrivateKey', 'Password', 'Address', 'Password & privateKey'];

  export default {
    data() {
      return {
        heckAll: true,
        checkedTexts: ['PrivateKey', 'Password'],
        texts: Texts,
        qrs: QRs,
        checkedQR: ['Mobile Import', 'PrivateKey'],
        isIndeterminateText: true,
        isIndeterminateQR: true,
      };
    },
    methods: {
      handleCheckAllTextsChange(event) {
        this.checkedTexts = event.target.checked ? Texts : [];
        this.isIndeterminateText = false;
      },
      handleCheckAllQRChange(event) {
        this.checkedQR = event.target.checked ? QRs : [];
        this.isIndeterminateQR = false;
      },
      handlecheckedTextsChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.texts.length;
        this.isIndeterminateText = checkedCount > 0 && checkedCount < this.texts.length;
      },
      handlecheckedQRChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.qrs.length;
        this.isIndeterminateQR = checkedCount > 0 && checkedCount < this.qrs.length;
      },
    },
    components: {
      Vicon,
    }
  };
</script>

<style>

.el-submenu .el-menu-item{
  height: auto;
  white-space: pre-wrap;
}

.submenu__title{
  font-size: 20px;
}
.menu_icon{
  margin-right: 15px;
}
.el-checkbox{
  margin-left: 15px;
}


.el-checkbox__label{
  font-size: 12px;
}

.undetermined{
  font-size: 14px;
}

.logo{
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 200Px;
  bottom: 20px;
  left: 100px;
  align-items: center;
}

.logo img {
  margin: auto;
}


</style>
