<template>
    
<section id="editor-container" v-resize:debounce="onResize">
  <canvas id="editor"></canvas>
</section>

</template>

<script>
import resize from 'vue-resize-directive'
import { mapActions } from 'vuex';
import { EventBus } from '../assets/js/eventbus.js';
import $ from 'jquery';





export default {
  directives: {
    resize,
  },
  data() {
    return {
      canvas: {},
      zoom: null,
    };
  },
  computed: {
    // zoom: ()=>{
    //   this.zoom = this.canvas.getZoom();
    // }
    // ...mapGetters([
    //   'getCanvas',
    // ])
    
  },
  watch: {
    // height: function (newHeight) {
    //   this.canvas.setDimensions({
    //     cwidth: this.width,
    //     cheight: newHeight
    //   });
    // },
    // width: function (newWidth) {
    //   this.canvas.setDimensions({
    //     cwidth: newWidth,
    //     cheight: this.height
    //   });
    // },
    // zoom: function(newZoom){
    //   this.canvas.setZoom(newZoom);
    // }
  },
  methods: {
    onResize(event){
      let scalX = (this.canvas.getWidth() / this.canvas.getHeight());
      let scalY = (this.canvas.getHeight() / this.canvas.getWidth());
      console.log(scalX);
      this.canvas.setWidth($('#editor-container').width());
      this.canvas.setHeight($('#editor-container').height());
      // this.canvas.viewportCenterObject(this.canvas.getObject(rect));
      this.canvas.renderAll();
      
      let objects = this.canvas.getObjects();
      for (var i in objects) {
        console.log(objects[i].scaleX);
        console.log(objects[i].scaleY);
        objects[i].scaleX = objects[i].scaleX * 1;
        objects[i].scaleY = objects[i].scaleY * 1;
        objects[i].left = 100;
        objects[i].top = 200;
        objects[i].setCoords();
      }
      this.canvas.renderAll();
    }
  },
  mounted: function () {
  

    const _this = this; // we save the scope

    this.canvas = new fabric.Canvas('editor');
    this.canvas.setDimensions({
      width: _this.width,
      height: _this.height,
    });
    
    this.canvas.setBackgroundColor({
      source: './assets/img/opbg.jpg',
      repeat: 'repeat',
      width: 10,
      height: 10,
    }, _this.canvas.renderAll.bind(_this.canvas));

    fabric.Image.fromURL('../static/image/Jabo_Paper_Wallet_1200-480.jpg', function (oImg) {
      _this.canvas.add(oImg);
    });

    // create a rectangle object
    let rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 100,
      height: 100
    });
    
    _this.canvas.add(rect);
    _this.canvas.viewportCenterObject(rect); 

  
  },
};
</script>

<style>
.canvas-container{
  margin: auto;
  padding: 0;
}
</style>
