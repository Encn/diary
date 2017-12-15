<template>
  <div class="boxWrap">
    <common-header
      :title="headertitle"
      :hideBack="hideBack"
      :textbtn="textbtn"
      :isEditBack="isEditBack"
      @back="hide"
      @todo="save">
    </common-header>
    <div class="con">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <input type="text" class="mui-input-clear" placeholder="请输入内容" v-model="email">
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import commonHeader from '@/views/common/common_header';

export default {
  name: 'editName',
  data() {
    return {
      headertitle: '修改账号',
      hideBack: false,
      textbtn: '完成',
      isEditBack: true,
      email: ''
    }
  },
  components: {
    commonHeader
  },
  mounted() {},
  methods: {
    save() {
      // 点击完成按钮或这提交表单,执行
      if (this.name !== '') {
        // 请求成功， 抛出name
        this.$emit('edit', this.email);
      }
    },
    hide() {
      this.$emit('hideLayer');
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../assets/lib/mixin.less';
.con {
  background-color: @bgColor;
  min-height: 41.6875rem;
  padding: 3.6875rem 0 0;
  text-align: center;
  .mui-input-row {
    height: 2.875rem;
    input {
      height: 2.875rem;
      border: none;
    }
  }
}
</style>
