<template>
  <div class="login">
    <!-- header -->
    <div class="header">
      <span class="title">登录</span>
      <router-link to="/forget" class="forgetlink">忘记密码？</router-link>
    </div>
    <p class="logoWrap">
      <img class="logo" src="../assets/images/deer20.png" alt="logo">
    </p>
    <!-- 表单form -->
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

      <span class="loginbtn" @click="postData">登录</span>
      <router-link tag="span" class="registerbtn" to="/register">注册</router-link>
    </form>
    <!-- WeChat -->
    <div class="otherlogin">
      <line-title :title="lineTitle"></line-title>
      <div class="otherWrap">
        <span class="weixin" id="loginByWX">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weixin"></use>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import API from './API';
import lineTitle from './components/line_title'
export default {
  name: 'login',
  data() {
    return {
      title: '登录',
      lineTitle: '第三方登录',
      userId: '',
      passwd: ''
    }
  },
  components: {
    lineTitle
  },
  mounted() {
    this.wechartLogin();
  },
  methods: {
    wechartLogin() {
      var auths=null;
      document.getElementById("loginByWX").addEventListener('tap', function() {
        plus.oauth.getServices( function(services){
          auths = services;

          for(var k in auths){
            console.log(auths[k].id)
          }
          //auths解释0QQ 1微信 2微博 3小米，但是不建议使用auths[1]类似的写法，因为各个设备排序不一样，比较坑爹
          //注意获取使用unionid，此id通用后期的微信端等它会用户共享，（openid完全唯一）
          //var s = auths[1];
          var s;
          for (var i = 0; i < auths.length; i++){
            //用这样的写法指定第三方，参照：
            //[LOG] : xiaomi
            //[LOG] : qq
            //[LOG] : sinaweibo
            //[LOG] : weixin

            if (auths[i].id == 'weixin'){
              s = auths[i];
              break;
            }
          }

          if(!s.authResult){
            s.login(function(e){
              // 获取登录操作结果
              s.getUserInfo( function(e){
                console.log( "获取用户信息成功："+JSON.stringify(s.userInfo) );
                mui.toast('登录成功');
                // 获取?????
                this.$router.push('/add');
              }, function(e){
                console.log( "获取用户信息失败："+e.message+" - "+e.code );
                mui.toast('获取用户信息失败');
              } );

            }, function(e){
              mui.toast('登录认证失败');
            });
          }else{
            //已经登录认证
            mui.toast('登录成功');
          }

        }, function(e){
          console.log( "获取登录失败："+e.message+" - "+e.code );
          mui.toast('登录认证失败');
        });
      });

    },
    postData() {
      this.$validator.validateAll().then((res) => {
        if (res) {
          API.postLogin({
            userId: this.userId,
            passWord: this.passwd
          }).then((res) => {
              if(res.code === '1') {
                this.$router.push('/add');
              }
            }).catch((err) => {
              console.log(err);
            })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/lib/mixin.less';
.login {
  background-color: @white;
  padding-bottom: 4.0438rem;
}
.header {
  position: relative;
  text-align: center;
  height: 2.75rem;
  line-height: 2.75rem;
  .title {
    color: @mainColor;
    .font-dpr(20px);
  }
}
.logoWrap {
   margin: 3.125rem 0 4.125rem;
   text-align: center;
   height: 5rem;
  .logo {
    width: 5rem;
    height: 5rem;
    display: inline-block;
  }
}
.forgetlink {
  position: absolute;
  right: 1rem;
  top: 0;
  color: @grayColor;
  .font-dpr(12px);
}
.form {
  padding: 0 1.875rem 5.625rem;
  text-align: center;
  .inputItem {
    position: relative;

    i.iconfont {
      position: absolute;
      left: .5rem;
      top: .4063rem;
      .font-dpr(20px);
      color: @grayWhite;
      margin-top: -1px;
    }
  }
  input:not([type="checkbox"]) {
    margin-bottom: 1.7188rem;
    height: 2.0625rem;
    .border-radius(.3125rem);
    border: solid .0625rem @borderColor;
    padding-left: 2.0625rem;
    &::-webkit-input-placeholder { /* WebKit browsers */
      color:#ccc;
      font-size: 15px;
    }
  }
  input[type="checkbox"] {
    width: .75rem;
    height: .75rem;
    .border-radius(.125rem);
    display: inline-block;
    vertical-align: middle;
    &:first-child {
      margin-right: 8.4375rem;
    }
  }
  .help {
    display: block;
    line-height: 1.7188rem;
  }
  .passwd {
    margin: 1.875rem 0 .875rem;
  }
  label {
    color: @grayColor;
  }
  .label1 {
    margin-right: 8.375rem;
  }
  .loginbtn {
    .btn(11.625rem, 1.875rem, 14px, @mainColor, @white);
    margin: .125rem 0 1.25rem;
    .border-radius(.3125rem);
    .box-shadow(.125rem .25rem 1.3125rem 0rem rgba(0, 136, 246, 0.4));
  }
  .registerbtn {
    .btn(11.625rem, 1.875rem, 14px, @white, @mainColor);
    .border-radius(.3125rem);
    border: .0625rem solid @mainColor;
  }
}



.otherWrap {
  text-align: center;
  padding-top: .25rem;
}
.weixin {
  width: 2.0625rem;
  height: 1.6875rem;
  display: inline-block;
  svg{
    width: 100%;
    height: 100%;
  }
}
</style>
