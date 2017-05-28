<template>
  <div class="upload" v-if="!uploaded" @change="change" @dragover="dragover" @drop="drop">
    <el-dialog title="Import an image" :visible.sync="dialogTableVisible">
      <el-row :gutter="10">
        <el-col :span="8" v-for="item in preChoiseImg">
          <img class="select-img"
              :data-width="item.width"
              :data-height="item.height"
              :src="item.src"
              :data-name="item.name"
              @click="selectImg">
        </el-col>
        <el-col :span="8">
          <div class="upload-btn J-upload" title="Select local image">
            <span class="upload-icon"></span>
            <input id="file" type="file" accept="image/*" class="sr-only">
          </div>
        </el-col>
      </el-row>
    </el-dialog>
    <div class="import-area J-import" @click="dialogTableVisible = true">
      <span class="icon"></span>
      <p class="tip">Dragged into the picture or <span class="browse">Click Import</span></p>
    </div>
  </div>
</template>

<script>
  // import Vdialog from './dialog';

  export default {
    components: {
    // <vdialog :dialogTableVisible="dialogTableVisible"></vdialog>

      // Vdialog,
    },
    data() {
      return {
        // 预选图片弹窗状态
        dialogTableVisible: false,
        // 系统预选图片 Map
        preChoiseImg: [
          {
            width: '1600',
            height: '900',
            name: 'test-1.jpg',
            src: './assets/img/Jabo_Paper_Wallet_1200-480.jpg',
          },
          {
            width: '1600',
            height: '900',
            name: 'test-2.jpg',
            src: './static/image/test-2.jpg',
          },
          {
            width: '1600',
            height: '900',
            name: 'test-3.jpg',
            src: './static/image/test-3.jpg',
          },
          {
            width: '1600',
            height: '900',
            name: 'test-4.jpg',
            src: './static/image/test-4.jpg',
          },
          {
            width: '1600',
            height: '900',
            name: 'test-5.jpg',
            src: './static/image/test-5.jpg',
          },
          {
            width: '1600',
            height: '900',
            name: 'test-6.jpg',
            src: './static/image/test-6.jpg',
          },
          {
            width: '1600',
            height: '900',
            name: 'test-7.jpg',
            src: './static/image/test-7.jpg',
          },
          {
            width: '1600',
            height: '900',
            name: 'test-8.jpg',
            src: './static/image/test-8.jpg',
          },
        ],
      };
    },
    computed: {
      uploaded() {
        return this.$store.state.uploaded;
      },
    },
    methods: {
      read(file, callback = () => {}) {
        const imgReg = /^image\/\w+$/;
        const imgMaxSize = 3; // 上传图片最大体积，单位 mb
        const imgWarnSize = 0.8; // 上传图片警戒体积，单位 mb
        let reader = null;

        if (file) {
          if (imgReg.test(file.type)) {
            // fileReader读取的文件体积单位为字节 b
            const imgSize = file.size / (1024 * 1024);

            if (imgSize < imgMaxSize) {
              if (imgSize > imgWarnSize) {
                this.$notify({
                  title: 'prompt',
                  message: 'Image size is too large Processing speed may drop',
                  type: 'warning',
                  duration: 4000,
                  offset: 120,
                });
              }

              reader = new FileReader(); // 实例化 Web Api FileReader

              reader.onload = () => {
                // 上传区域置空
                this.$store.dispatch('setUpload');
                // store传递类型以及文件信息
                this.$store.dispatch('setImgMsg', {
                  type: file.type,
                  name: file.name,
                  url: reader.result,
                });

                callback();
              };

              reader.readAsDataURL(file);
            } else {
              this.$message({
                message: 'Picture size should be lower than 3M Please re-select',
                type: 'warning',
              });
              callback();
            }
          } else {
            this.$message({
              message: 'Please select an image file',
              type: 'warning',
            });
            callback();
          }
        } else {
          callback();
        }
      },
      change(e) {
        const target = e.target;
        const files = target.files;

        this.read(files && files[0], () => {
          target.value = '';
        });
      },
      dragover(e) {
        e.preventDefault();
      },
      drop(e) {
        const files = e.dataTransfer.files;
        e.preventDefault();
        this.read(files && files[0]);
      },
      selectImg(e) {
        const target = e.target;
        const url = this.getBase64Image(target);
        const name = target.dataset.name;

        // 上传区域置空
        this.$store.dispatch('setUpload');
        // store传递类型以及文件信息
        this.$store.dispatch('setImgMsg', {
          type: 'image/jpeg',
          name,
          url,
        });
      },
      getBase64Image(img) {
        const canvas = document.createElement('canvas');
        canvas.width = img.dataset.width;
        canvas.height = img.dataset.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.dataset.width, img.dataset.height);
        const dataURL = canvas.toDataURL('image/jpeg');
        return dataURL;
      },
    },
  };
</script>

<style>

</style>
