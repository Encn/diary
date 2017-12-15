<template>
  <div class="register">
    <common-header
      :title="title" :hideBack="hideBack"
      :isEditBack="isEditBack" :textbtn="textbtn"
      @todo="save">
    </common-header>
    <div class="con">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <input v-show="!flag" type="text" class="mui-input-clear" placeholder="请输入邮箱" v-model="email" name="userId" v-validate="'required'">
          <input v-show="flag" type="text" class="mui-input-clear" placeholder="请输入验证码" v-model="verifyCode" name="verifycode" v-validate="'required'">
        </div>
      </form>
    </div>
    </form>
  </div>
</template>
<script>
import API from './API'
import commonHeader from '@/views/common/common_header';
export default {
  name: 'forget',
  data() {
    return {
      title: '验证邮箱',
      hideBack: false,
      isEditBack: false,
      textbtn: '发送',
      email: '',
      verifyCode: '',
      flag: false
    }
  },
  components: {
    commonHeader
  },
  mounted() {},
  methods: {
    save() {
      if (this.flag === false) {
        // 点击完成按钮或这提交表单,执行
        API.sendEmail({
          receiveMailAccount: this.email
        }).then((res) => {
          console.log(res);
          mui.alert('请到邮箱查看并获取输入验证码', '提示', '确定');
          this.flag = true;
          this.textbtn = '确定';
        })
      } else {
        // send checkcode 请求验证验证码
        API.checkRandomCode({
          email: this.email,
          randomCode: this.verifyCode
        }).then((res) => {
          console.log(res);
          this.$router.push();
          this.flag = false;
          this.textbtn = '发送';
        })
      }

    }
  }
}
</script>
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

