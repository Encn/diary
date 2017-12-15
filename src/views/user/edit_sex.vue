<template>
  <div class="boxWrap">
    <common-header :title="headertitle" :hideBack="hideBack" :textbtn="textbtn" @todo="save"></common-header>
    <div class="con">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">女
        </li>
        <li class="mui-table-view-cell">男</li>
      </ul>
    </div>
  </div>
</template>
<script>
import commonHeader from '@/views/common/common_header';

export default {
  name: 'editName',
  data() {
    return {
      headertitle: '性别选择',
      hideBack: false,
      textbtn: '完成'
    }
  },
  components: {
    commonHeader
  },
  mounted() {},
  methods: {
    save() {
      console.log('233');
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/lib/mixin.less';
.con {
  background-color: @bgColor;
  min-height: 41.6875rem;
  padding: 3.6875rem 0 0;

}
</style>
