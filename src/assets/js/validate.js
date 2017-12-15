/**
 * vee-validator ^2.0.0-rc.25
 * 自定义表单验证
 * zh_CN.js 从mode_modules/vee-validator/dist/locale下拷贝此文件，或者直接引入
 * 2017-12-10
 */
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate';
import messages from './zh_CN';

// 配置中文
Validator.updateDictionary({
    zh_CN: {
      messages
    }
});
const config = {
  errorBagName: 'errors', // change if property conflicts.
  delay: 0,
  locale: 'zh_CN',
  messages: null,
  strict: true,
  events: 'input',// 'blur',
  inject: true
};

Vue.use(VeeValidate,config);


// 自定义validate内置规则的错误信息提示
const dictionary = {
  zh_CN: {
    messages: {
      confirmed: (a, b) => '两次密码输入不一致',
      email: () => '请输入正确的邮箱格式',
      required: ( field )=> "请输入" + field
    },
    attributes:{
      email:'邮箱', // input的name属性, 也即是field
      passwd:'密码',
      confirmpassword: '确认密码',
      name: '账号',
      phone: '手机号',
      userName: '姓名',
      userId: '用户名/邮箱'
    }
  }
};
Validator.updateDictionary(dictionary);

// 扩展自定义校验规则
// 手机号
Validator.extend('phone', {
  messages: {
    zh_CN:field => field + '必须是11位手机号码',
  },
  validate: value => {
    return value.length == 11 && /^1[34578]\d{9}$/.test(value)
  }
});
// 密码
Validator.extend('passwd', {
  messages: {
    zh_CN:field => field + '必须是8-16位非纯数字密码',
  },
  validate: value => {
    return /^(?![0-9]*$)[a-zA-Z0-9_]{8,16}$/.test(value)
  }
});
// 确认密码
Validator.extend('confirmpasswd', {
  messages: {
    zh_CN:field => '两次密码输入不一致',
  },
  validate: (value, val2) => {
    return value == val2
  }
});
// 用户名/邮箱
Validator.extend('email', {
  messages: {
    zh_CN:field => '请输入正确用户名/邮箱',
  },
  validate: value => {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
  }
});
