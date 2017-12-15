<template>
  <div class="boxWrap">
    <common-header :title="headertitle" :hideBack="hideBack" :textbtn="textbtn"></common-header>
    <div class="con">
      <div class="inputWrap">
        <textarea name="" id="" cols="30" rows="5" placeholder="请输入不少于10个字的描述"></textarea>
      </div>

      <span class="actionbtn">提交</span>
    </div>
  </div>
</template>
<script>
import commonHeader from '@/views/common/common_header';

export default {
  name: 'userAdvice',
  data() {
    return {
      headertitle: '意见反馈',
      hideBack: false,
      textbtn: '提交'
    }
  },
  components: {
    commonHeader
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
  padding: 3.6875rem 0 0;
  text-align: center;
  .inputWrap {
    // background-color: @white;
  }
  textarea {
    padding: .625rem;
    border: none;
    overflow: auto;
    color: @baseColor;
  }
  .actionbtn {
    .btn();
    .border-radius();
  }
}
</style>
