<template>
    <div id="veditor">
        <vactiontip></vactiontip>
        <vupload></vupload>
        <vcanvas></vcanvas>
    </div>
</template>

<script>
  import Vactiontip from './tip';
  import Vupload from './upload_module/index';
  import Vcanvas from './canvas';

  export default {
    name: 'Veditor',
    components: {
      Vactiontip,
      Vupload,
      Vcanvas,
    },
  };
</script>

<style>
</style>
