<template>
<!-- 非固定顶部头部，白色背景 -->
  <div class="common-header">
    <a v-on:click="goBack" class="action-back">
      <i class="iconfont icon-fanhui" aria-hidden="true"></i>
    </a>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'common-header',
  props: ['title', 'hideBack'],
  methods: {
    goBack () {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="less">
@import "../../assets/lib/mixin";

.common-header {
  height: 2.75rem;
  line-height: 2.75rem;
  text-align: center;
  color: @mainColor;
  width: 100%;
  z-index: 100;
  .title {
    .font-dpr(18px);
    line-height: 2.75rem;
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
    }
  }
}
</style>
