<template>

  <section id="vpic">
      <vsidebar class="vsidebar"></vsidebar>
      <vtoolbar class="vtoolbar"></vtoolbar>
      <veditor class="veditor"></veditor>
      <vupload class="vupload"></vupload>
  </section>


</template>
<script>
import Cropper from 'cropperjs';
import Vtoolbar from './toolbar_module/index';
import Vupload from './vupload';
import Vsidebar from './vsidebar';
import Veditor from './veditor';


export default {
  name: 'vdashboard',
  components: {
    Cropper,
    Vtoolbar,
    Vupload,
    Vsidebar,
    Veditor,
  },
};
</script>

<style>
#vpic{
  display: grid;
  grid-template: 50px 3fr 1fr / 1fr 3fr ;
  grid-template-areas: 
    "sidebar toolbar"
    "sidebar canvas"
    "sidebar upload";
  align-items: stretch;
  justify-content: stretch;

}

.vsidebar{
  grid-area: sidebar;
  background-color: #EFF2F7;

}
.vtoolbar{
  grid-area: toolbar;
  background-color: burlywood;
}
.veditor{
  grid-area: canvas;
  background-color: goldenrod;
}
.vupload{
  grid-area: upload;
  background-color: cornflowerblue;
}
</style>
