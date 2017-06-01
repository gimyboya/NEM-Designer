<template>
    
<section id="editor-container">
  <canvas id="editor"></canvas>
  <!--<el-input-number size="small" v-model="width"></el-input-number>
  <el-input-number size="small" v-model="height"></el-input-number>
  <el-input-number size="small" v-model="zoom"></el-input-number>-->


</section>

</template>

<script>
import { mapActions } from 'vuex';






export default {
  data() {
    return {
      cwidth: null,
      cheight: null,
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
  },
  mounted: function () {
  

    const _this = this; // we save the scope
    // we get the size of the canvas container to adjust it to it
    let width = document.getElementById('editor-container').offsetWidth;
    let height = document.getElementById('editor-container').offsetHeight;

    this.canvas = new fabric.Canvas('editor');
    this.canvas.setDimensions({
      width: width,
      height: height,
    });

    this.canvas.setBackgroundColor({
      source: './assets/img/opbg.jpg',
      repeat: 'repeat',
      width: 10,
      height: 10,
    }, _this.canvas.renderAll.bind(_this.canvas));

    // create a rectangle object
    let rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 100,
      height: 100
    });

    // listen to windows resize
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas(){
      let newWidth = document.getElementById('editor-container').offsetWidth;
      let newHeight = document.getElementById('editor-container').offsetHeight

      let scalY = (canvas.getWidth() / canvas.getHeight()) * newHeight;
      let scalX = (canvas.getHeight() / canvas.getWidth()) * newWidth;

      // we redrwa all the objects to keep the quality
      reDraw(scalX, scalY);
      canvas.setWidth(canvas.getWidth() * scalX);
      canvas.setHeight(canvas.getHeight() * scalY);
      canvas.renderAll();
      canvas.calcOffset();
      
    }

    function reDraw(scalX, scalY) {

      let objects = _this.canvas.getObjects();
      for (var i in objects) {
        objects[i].scaleX = objects[i].scaleX * scalX;
        objects[i].scaleY = objects[i].scaleY * scalY;
        objects[i].left = objects[i].left * scalX;
        objects[i].top = objects[i].top * scalY;
        objects[i].setCoords();
      }
      
    }

    resizeCanvas();
   // "add" rectangle onto canvas
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
