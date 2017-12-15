<template>
  <div class="boxWrap">
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>
<script>
import commonFooter from '@/views/common/footer';
export default {
  name: 'userCommon',
  data() {
    return {
    }
  },
  components: {
    commonFooter
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="less" scoped>
@import '../../assets/lib/mixin.less';
.con {
  background-color: @bgColor;
  min-height: 41.6875rem;
}
</style>
