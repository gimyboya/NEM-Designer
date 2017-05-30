<template>

  <section class="control-container"> 
      <div class="text-qr"></div> 
      <div class="upload"></div> 
  <el-checkbox :indeterminate="isIndeterminateText" v-model="checkAllTexts" @change="handleCheckAllTextsChange">Include all texts</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedTexts" @change="handlecheckedTextsChange">
    <el-checkbox v-for="text in texts" :label="text" :key="text">{{text}}</el-checkbox>
  </el-checkbox-group>
  
  <el-checkbox :indeterminate="isIndeterminateQR" v-model="checkAllQR" @change="handleCheckAllQRChange">Include all QR codes</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedQR" @change="handlecheckedQRChange">
    <el-checkbox v-for="qr in qrs" :label="qr" :key="qr">{{qr}}</el-checkbox>
  </el-checkbox-group>

  </section>

</template>


<script>
const Texts = ['PrivateKey', 'Password', 'Wallet name', 'Address'];
const QRs = ['Mobile Import', 'PrivateKey', 'Password', 'Address', 'Password & privateKey'];
export default {
  data() {
    return {
      checkAll: true,
      checkedTexts: ['PrivateKey', 'Password'],
      texts: Texts,
      qrs: QRs,
      checkedQR: ['Mobile Import', 'PrivateKey'],
      isIndeterminateText: true,
      isIndeterminateQR: true
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

