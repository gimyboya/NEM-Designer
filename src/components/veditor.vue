<template>
    
<section class="editor-container">
  <canvas id="editor"></canvas>
</section>

</template>

<script>


// var cropper = new Cropper(canvas, {
//   aspectRatio: 16 / 9,
//   crop: function (e) {
//     console.log(e.detail.x);
//     console.log(e.detail.y);
//     console.log(e.detail.width);
//     console.log(e.detail.height);
//     console.log(e.detail.rotate);
//     console.log(e.detail.scaleX);
//     console.log(e.detail.scaleY);
//   }
// });




export default {
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  mounted: function () {
    let canvas = document.getElementById('editor');

    canvas = new fabric.Canvas('editor');
    canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
    // create a rectangle object
    let rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    });

    // "add" rectangle onto canvas
    canvas.add(rect);
  },
};
</script>

<style>
.canvas-container{
  margin: auto;
  padding: 0;
}
</style>
