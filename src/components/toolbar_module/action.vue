<template>
  <div class="clearfix">
    <ul class="action-list fl" @click="click" v-show="uploaded">
        <li class="fr"  @click="isOpen = !isOpen">
          <button :class="closeClass" :title="closeTitle"><span class="icon"></span></button>
        </li>
        <li class="fr" v-for="item in actionMap" v-show="isOpen">
          <button :data-action="item.actionType" :class="item.className" :title="item.title"><span class="icon"></span></button>
        </li>
    </ul>
    <ul class="action-list fr" @click="click">
      <li class="fr">
        <a :href="github" target="_blank" class="github-btn btn" title="项目地址"><span class="icon"></span></a>
      </li>
      <li class="fr">
        <a :href="url" :download="name" class="save-btn btn" title="下载保存" v-show="url"><span class="icon"></span></a>
      </li>
      <li class="fr">
        <button data-action="crop" class="croping-btn btn" title="确认剪裁" v-show="cropping"><span class="icon"></span></button>
      </li>
      <li class="fr">
        <button data-action="remove" class="delete-btn btn" title="清空画布" v-show="uploaded &amp;&amp; !cropping"><span class="icon"></span></button>
      </li>
      <li class="fr">
        <button data-action="clear" class="cancel-btn btn" title="取消操作" v-show="cropping"><span class="icon"></span></button>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isOpen: true,
        github: 'https://github.com/licao404/VPic',
        actionMap: [
          {
            actionType: 'cropModel',
            className: 'crop-btn btn',
            title: '剪裁模式',
          },
          {
            actionType: 'moveModel',
            className: 'move-btn btn',
            title: '移动模式',
          },
          {
            actionType: 'rotate-right',
            className: 'rotater-btn btn',
            title: '顺时针旋转',
          },
          {
            actionType: 'rotate-left',
            className: 'rotatel-btn btn',
            title: '逆时针旋转',
          },
          {
            actionType: 'flip-vertical',
            className: 'flip-vertical-btn btn',
            title: '垂直镜像',
          },
          {
            actionType: 'flip-horizontal',
            className: 'flip-horizontal-btn btn',
            title: '水平镜像',
          },
        ],
      };
    },
    computed: {
      uploaded() {
        return this.$store.state.uploaded;
      },
      cropping() {
        return this.$store.state.cropping;
      },
      url() {
        return this.$store.state.imgMsg.url;
      },
      name() {
        return this.$store.state.imgMsg.name;
      },
      closeClass() {
        return this.isOpen ? 'close-btn btn' : 'open-btn btn';
      },
      closeTitle() {
        return this.isOpen ? '折叠' : '展开';
      },
    },
    methods: {
      click(e) {
        const actionType = e.target.dataset.action;

        if (actionType) {
          this.$store.dispatch('setActionType', {
            actionType,
          });
        }
      },
    },
  };
</script>
<style>
 
</style>
