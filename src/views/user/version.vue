<template>
  <div class="boxWrap">
    <common-header :title="headertitle" :hideBack="hideBack"></common-header>
    <div class="con">
     版本无更新
    </div>
  </div>
</template>
<script>
import commonHeader from '@/views/common/common_header';

export default {
  name: 'version',
  data() {
    return {
      headertitle: '新版本',
      hideBack: false
    }
  },
  components: {
    commonHeader
  },
  mounted() {},
  methods: {
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/lib/mixin.less';
.con {
  background-color: @bgColor;
  min-height: 41.6875rem;
  padding: 3.6875rem 0 0;
  text-align: center;
  color: @baseColor;
  .font-dpr(20px);
}
</style>
