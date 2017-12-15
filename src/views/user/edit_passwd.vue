<template>
  <div class="boxWrap">
    <common-header :title="headertitle" :hideBack="hideBack" :textbtn="textbtn" @todo="save"></common-header>
    <div class="con">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>旧密码</label>
          <input v-model="oldpasswd" type="password" class="mui-input-password mui-input-clear"
                name="oldpasswd"
                placeholder="请填写旧密码"
                v-validate="{ required: true, regex: /^(?![0-9]*$)[a-zA-Z0-9_]{8,16}$/}"
                :class="{'input': true, 'is-danger': errors.has('oldpasswd') }">
        </div>
        <div class="mui-input-row">
          <label>新密码</label>
          <input v-model="newpasswd" type="password" class="mui-input-password"
                name="newpasswd"
                placeholder="请输入新密码"
                v-validate="{ required: true, regex: /^(?![0-9]*$)[a-zA-Z0-9_]{8,16}$/}"
                :class="{'input': true, 'is-danger': errors.has('newpasswd') }">
        </div>
        <div class="mui-input-row">
          <label>确认密码</label>
          <input v-model="repasswd" type="password" class="mui-input-password"
                name="repasswd"
                placeholder="请再次输入新密码"
                v-validate="{ required: true, regex: /^(?![0-9]*$)[a-zA-Z0-9_]{8,16}$/}"
                :class="{'input': true, 'is-danger': errors.has('repasswd') }">
        </div>
      </form>
      <span  class="tip">{{ errorTips }}</span>
      <!-- <span v-show="errors.has('oldpasswd')" class="tips is-danger">请输入正确6-16位非纯数字旧密码</span>
      <span v-show="errors.has('newpasswd')" class="tips is-danger">请输入正确6-16位非纯数字新密码</span>
      <span v-show="errors.has('repasswd')" class="tips is-danger">请输入正确新密码</span> -->
    </div>
  </div>
</template>
<script>
import commonHeader from '@/views/common/common_header';

export default {
  name: 'editPasswd',
  data() {
    return {
      headertitle: '密码修改',
      hideBack: false,
      textbtn: '完成',
      oldpasswd: '',
      newpasswd: '',
      repasswd: '',
      errorTips: '密码必须包含6-16位非纯数字，字母、数字或下划线的组合。'
    }
  },
  components: {
    commonHeader
  },
  watch: {
    newpasswd() {
      if (this.newpasswd === this.oldpasswd) {
        this.errorTips = '新密码不能与旧密码相同';
      }
    },
    repasswd() {
      if (this.newpasswd !== this.repasswd) {
        this.errorTips = '请重新确认新密码';
      }
    }
  },
  computed: {

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
  .mui-input-row {
    height: 2.875rem;
    input {
      height: 2.875rem;
      border: none;
    }
  }
  .tip {
    .font-dpr(12px);
    margin-left: 1rem;
  }
  .is-danger {
    color: red;
  }
}
</style>
