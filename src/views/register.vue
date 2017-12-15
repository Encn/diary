<template>
  <div class="register">
    <common-header :title="title"></common-header>
    <form action="" class="form">
      <div class="inputItem">
        <i class="iconfont icon-yonghuming"></i>
        <input type="text" placeholder="用户名/邮箱" name="userId" v-model="userId" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('userId') }">
        <span v-show="errors.has('userId')" class="help is-danger">{{ errors.first('userId') }}</span>
      </div>

      <div class="inputItem">
        <i class="iconfont icon-mima"></i>
        <input type="password" placeholder="密码" name="passwd" v-model="passwd" v-validate="'required|passwd'" :class="{'input': true, 'is-danger': errors.has('passwd') }">
        <span v-show="errors.has('passwd')" class="help is-danger">{{ errors.first('passwd') }}</span>
      </div>

      <!-- <div class="inputItem">
        <i class="iconfont icon-mima"></i>
        <input type="password" placeholder="确认密码" name="confirmpassword" v-model="confirmpassword" v-validate="'required|confirmpasswd:'+ this.passwd " :class="{'input': true, 'is-danger': errors.has('confirmpassword') }">
        <span v-show="errors.has('confirmpassword')" class="help is-danger">{{ errors.first('confirmpassword') }}</span>
      </div> -->

      <div class="inputItem">
        <i class="iconfont icon-wo-copy"></i>
        <input type="text" placeholder="姓名" name="userName" v-model="userName" v-validate="'required|max: 20'" :class="{'input': true, 'is-danger': errors.has('userName') }">
        <span v-show="errors.has('userName')" class="help is-danger">{{errors.first('phone')}}</span>
      </div>

      <div class="inputItem">
        <i class="iconfont icon-shoujihao-copy"></i>
        <input type="text" placeholder="手机号" name="phone" v-model="telephone" v-validate="'required|phone'" :class="{'input': true, 'is-danger': errors.has('telephone') }">
        <span v-show="errors.has('phone')" class="help is-danger">{{errors.first('phone')}}</span>
      </div>

      <div class="btnWrap">
       <span class="registerbtn" @click="postData">注册</span>
      </div>
    </form>
  </div>
</template>

<script>
import API from './API';
import commonHeader from '@/views/common/header';
export default {
  name: 'register',
  data() {
    return {
      title: '用户注册',
      userId: '',
      passwd: '',
      department: '1', // 下拉
      job: '1', // 下拉
      userName: '',
      telephone: '',
     // confirmpassword: ''
    }
  },
  components: {
    commonHeader
  },
  mounted() {
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    postData() {
     // Validator是以$validator被组件自动注入到Vue实例的.也可以独立的进行调用.
     // 同时校验多个:validator.validateAll(), 只要有一个校验失败了，就返回false
      this.$validator.validateAll().then((res) => {
        // 表单验证通过，发送请求
        if (res) {
          API.postRegister({
          userId: this.userId,
          passWord: this.passwd,
          userName: this.userName,
          sex: '1',
          department: this.department,
          proLevel: this.job,
          phone: this.telephone,
          email: this.userId,
          status: '1' // 0 无效 1有效
        }).then((res) => {
          if(res.code === '1') {
            this.$router.push('/login');
          }
        })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/lib/mixin.less';
.register {
  width: 100%;
  min-height: 41.6875rem;
  background: url('../assets/images/register_bg.gif') no-repeat center top;
}
.form {
  padding: 2.0625rem 1.9rem 0;
  .btnWrap {
    text-align: center;
  }
  .registerbtn {
    .btn(11.625rem, 1.875rem, 14px, @mainColor, @white);
    .border-radius(5px);
    .box-shadow(2px 4px 21px 0px
		rgba(0, 136, 246, 0.4));
  }
  input {
    margin-bottom: 1.5625rem;
    padding-left: 2.25rem;
    .border-radius(5px);
    border-color: #ccc;
    background-color: transparent;
  }
  .inputItem {
    position: relative;

    i.iconfont {
      position: absolute;
      left: .5rem;
      top: .6rem;
      .font-dpr(20px);
      color: @mainColor;
    }
  }
  .help {
    display: block;
    line-height: 1.5625rem;
  }
}

</style>

