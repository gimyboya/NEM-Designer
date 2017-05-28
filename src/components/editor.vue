<template>

  <section id="vpic" class="clearfix">
    <div id="vmenu" class="fl">
      <div class="logo">
        <img src="../assets/img/logo.png">
      </div>
      <vsidebar></vsidebar>
    </div>
    <div id="vmain" class="">
      <vtoolbar></vtoolbar>
      <veditor></veditor>
    </div>
  </section>


</template>
<script>
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import Vtoolbar from './components/toolbar_module/index';
import Vsidebar from './components/sidebar';
import Veditor from './components/Veditor/index';

export default {
  name: 'vnem',
  components: {
    Cropper,
    Vtoolbar,
    Vsidebar,
    Veditor,
  },
};
}
</script>
<style>

.fl {
  float: left;
}

.fr {
  float: right;
}

.clearfix:after {
  content: '';
  display: table;
  clear: both;
}

</style>
