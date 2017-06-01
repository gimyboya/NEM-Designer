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
      this.canvas.setWidth($('#editor-container').width());
      this.canvas.setHeight($('#editor-container').height());
      console.log(this.canvas.getWidth());
      console.log(this.canvas.getHeight());
      this.canvas.viewportCenterObject(this.canvas.getObject(rect));
    }
  },
  mounted: function () {
  

    const _this = this; // we save the scope
    // we get the size of the canvas container to adjust it to it

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
