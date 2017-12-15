<template>
  <div class="boxWrap">
    <common-header
    :title="headertitle"
    :hideBack="hideBack"
    :textbtn="textbtn"
    @todo="save"></common-header>
    <div class="con">
      <form class="mui-input-group" action="/user/resume" ref="form">
        <div class="mui-input-row">
          <input type="password" class="mui-input-clear" placeholder="至少8位数密码，同时包含字母和数字" v-model="passwd">
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import commonHeader from '@/views/common/common_header';

export default {
  name: 'resetCode',
  data() {
    return {
      headertitle: '设置密码', // 标题
      hideBack: false, // 是否显示返回按钮
      textbtn: '确定', // 完成按钮
   //   isEditBack: true, // 控制是否返回当前页
      passwd: ''
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
        // 请求成功
        this.$router.push('/login');
      }
    },
    hide() {
      this.$emit('hideLayer');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/lib/mixin.less';
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
