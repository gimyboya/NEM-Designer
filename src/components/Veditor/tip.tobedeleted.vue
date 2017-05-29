<template>
  <div>
    <el-alert
      v-show="uploaded"
      type="success"
      :title="successTip.title"
      :description="successTip.desc">
    </el-alert>
    <el-alert
      v-show="!uploaded"
      type="info"
      :title="importTip.title"
      :description="importTip.desc">
    </el-alert>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        successTip: {
          title: 'Image imported successfully',
          desc: '1.Hold down the left mouse button to drag the picture; 2. Slide the wheel zoom to the best viewing angle; 3. Double click to switch to the screenshot tool；',
        },
        importTip: {
          title: 'import a picture',
          desc: '1.Drag & drop 2.pick a file；',
        },
      };
    },
    computed: {
      uploaded() {
        return this.$store.state.uploaded;
      },
    },
  };
</script>

<style>
  .el-alert {
    position: absolute;
    z-index: 1;
  }
</style>
