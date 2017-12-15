<template>
  <div class="boxWrap">
    <common-header
    :title="headertitle"
    :hideBack="hideBack"
    :isEditBack="isEditBack"
    @back="hide"
    :textbtn="textbtn"
    @todo="save"></common-header>
    <div class="con">
      <form class="mui-input-group" action="/user/resume" ref="form">
        <div class="mui-input-row">
          <input type="text" class="mui-input-clear" placeholder="请输入内容" v-model="name">
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
      headertitle: '修改姓名', // 标题
      hideBack: false, // 是否显示返回按钮
      textbtn: '完成', // 完成按钮
      isEditBack: true, // 控制是否返回当前页
      name: ''
    }
  },
  components: {
    commonHeader
  },
  mounted() {
    this.$refs.form.addEventListener('submit', this.save(), false);
  },
  methods: {
    save() {
      // 点击完成按钮或这提交表单,执行
      if (this.name !== '') {
        // 请求成功， 抛出name
        this.$emit('edit', this.name);
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
