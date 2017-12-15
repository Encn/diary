<template>
  <div class="common-header">
    <a v-if="!hideBack" v-on:click="goBack" class="action-back">
      <i class="iconfont icon-fanhui" aria-hidden="true"></i>
    </a>

    <span class="title">{{ title }}</span>
    <span v-if="textbtn" class="actionbtn" @tap="change">{{ textbtn }}</span>
  </div>
</template>

<script>
export default {
  name: 'common-header',
  props: ['title', 'hideBack', 'textbtn', 'isEditBack'],
  methods: {
    goBack () {
      if (this.isEditBack) {
        this.$emit('back'); // 返回当前页
        // this.$router.push('/user/resume');
      } else {
        this.$router.go(-1);
      }
    },
    change() {
      this.$emit('todo');
    }
    // goHome () {
    //   this.$router.replace({
    //     name: '/'
    //   })
    // }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/lib/mixin";

  .common-header {
    height: 2.75rem;
    line-height: 2.75rem;
    text-align: center;
    // border-bottom: 1px solid @borderColor;
    background: @mainColor; // @white;
    color: @white;
    position: fixed;
    width: 100%;
    z-index: 100;

    .title {
      .font-dpr(18px);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: inline-block;
      max-width: 15.625rem;
    }
    .action-back {
      position: absolute;
      padding-left: .625rem;
      left: 0;
      top: -2px;

      i {
        .font-dpr(15px);
        vertical-align: middle;
        color: @white;
      }
    }
    .actionbtn {
      position: absolute;
      padding-right: .625rem;
      right: 0;
      top: 0;
    }
  }
</style>
