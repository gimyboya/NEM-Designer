<template>
<section>
  <el-row class="tac custom-scrollbar" id="vpic_sidebar">
    <el-col :span="24">
      <div class="logo">
        <img src="./assets/img/logo.png" width="50px">
      </div>
      <el-menu unique-opened default-active="1-2" class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title"><vicon name="object-ungroup"></vicon>Elements</template>
          <el-menu-item index="1-1">
            <div class="menue-checkboxes">
              <el-checkbox :indeterminate="isIndeterminateText" v-model="checkAllTexts" @change="handleCheckAllTextsChange">Include all texts</el-checkbox>
              <div style="margin: 15px 0;"></div>
              <el-checkbox-group v-model="checkedTexts" @change="handlecheckedTextsChange">
                <el-checkbox v-for="text in texts" :label="text" :key="text">{{text}}</el-checkbox>
              </el-checkbox-group>          
            </div>
          </el-menu-item>
          <el-menu-item index="1-2" >
            <div class="menue-checkboxes">
              <el-checkbox :indeterminate="isIndeterminateQR" v-model="checkAllQR" @change="handleCheckAllQRChange">Include all QR codes</el-checkbox>
              <div style="margin: 15px 0;"></div>
              <el-checkbox-group v-model="checkedQR" @change="handlecheckedQRChange">
                <el-checkbox v-for="qr in qrs" :label="qr" :key="qr">{{qr}}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</section>
</template>

<script>
import Vicon from './vicon';
import $ from 'jquery';

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
        brightness: 0,
        contrast: 0,
        hue: 0,
        saturation: 0,
        greyscale: false,
        invert: false,
        blur: 0,
        noise: 0,
        sharpen: 0,
        sunrise: false,
        filterList: [
          {
            name: 'sunrise',
            preview: './static/image/filter-sunrise.jpg',
            desc: '日出辉映',
          },
          {
            name: 'lomo',
            preview: './static/image/filter-lomo.jpg',
            desc: '经典Lomo',
          },
          {
            name: 'clarity',
            preview: './static/image/filter-clarity.jpg',
            desc: '这一刻 更清晰',
          },
          {
            name: 'hazyDays',
            preview: './static/image/filter-hazyDays.jpg',
            desc: '这一刻 更朦胧',
          },
          {
            name: 'crossProcess',
            preview: './static/image/filter-crossProcess.jpg',
            desc: '怀旧电影',
          },
          {
            name: 'concentrate',
            preview: './static/image/filter-concentrate.jpg',
            desc: '美式咖啡',
          },
          {
            name: 'jarques',
            preview: './static/image/filter-jarques.jpg',
            desc: '抑郁深蓝',
          },
          {
            name: 'nostalgia',
            preview: './static/image/filter-nostalgia.jpg',
            desc: '泛黄记忆',
          },
          {
            name: 'pinhole',
            preview: './static/image/filter-pinhole.jpg',
            desc: '黑白胶片',
          },
          {
            name: 'sinCity',
            preview: './static/image/filter-sinCity.jpg',
            desc: '水墨印染',
          },
        ],
        opensource: [
          {
            link: 'https://vuejs.org/',
            logo: 'background: url(./static/sprites/vue.png);',
            name: 'Vue.js',
          },
          {
            link: 'https://webpack.js.org/',
            logo: 'background: url(./static/sprites/webpack.png);',
            name: 'Webpack',
          },
          {
            link: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
            logo: 'background: url(./static/sprites/canvas.png);',
            name: 'Canvas',
          },
        ],
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

</style>
