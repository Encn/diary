/**
 * 数据接口
 */
import axios from 'axios';
import Qs from 'qs';
import 'babel-polyfill';

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  console.log(config);
  // if(config.method === 'post') {
  // }
  // 在发送请求之前做些什么
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// // 添加响应拦截器
// axios.interceptors.response.use(function(response) {
//   // 对响应数据做点什么
//   return response;
// }, function(error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });

/**
 * [wrHost 请求接口]
 * @type {String}
 */
const wrHost = 'http://10.0.60.97:8080/workReport'; // '/api'; //

// 定义类 API
class API {
  constructor() {
  //  this.urlHost = '/api';
    this.createModel();
  }

  createModel() {
    /**
     * [postRegister 注册请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postRegister = (arg) => this.post(`${wrHost}/saveUser`, arg);

    /**
     * [postLogin 登录请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postLogin = (arg) => this.post(`${wrHost}/loginUser`, arg);

    /**
     * [saveWorkReport 新增日报]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.saveWorkReport = (arg) => this.post(`${wrHost}/saveWorkReport`, arg);

    /**
     * [postSearchReportInfo 查询日报列表]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postSearchReportInfo = (arg) => this.post(`${wrHost}/findWorkReportInfo`, arg);

    /**
     * [postfindWorkReport 查看日报详情]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postfindWorkReport = (arg) => this.post(`${wrHost}/findWorkReport`, arg);

    /**
     * [deleteWorkReport 删除日报]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.deleteWorkReport = (arg) => this.post(`${wrHost}/deleteWorkReport`, arg);

    /**
     * [updateWorkReport 修改日报]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.updateWorkReport = (arg) => this.post(`${wrHost}/updateWorkReport`, arg);

    /**
     * [sendEmail 忘记密码-邮箱验证]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.sendEmail = (arg) => this.post(`${wrHost}/sendEmail`, arg);

    /**
     * [checkRandomCode 忘记密码-邮箱验证码验证]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.checkRandomCode = (arg) => this.post(`${wrHost}/checkRandomCode`, arg);

  }

  /**
   * get 请求方法
   * @param  url
   * @param  arg
   * @return {Promise}
   */
  get(url, arg) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: arg,
        withCredentials: true,
        timeout: 5000
      }).then((res) => {
        resolve(res);
      }, () => {
        reject('get请求链接失败');
      }).catch(() => {
        reject('get请求链接失败');
      });
    });
  }
  /**
   * post 请求方法
   * @param  url
   * @param  arg
   * @return {Promise}
   */
  post(url, arg) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        data: 'data=' + JSON.stringify(arg),
        headers: {
          'Access-Control-Allow-Origin': 'http://10.0.60.90:8080',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        withCredentials: true,
        timeout: 50000
      }).then((res) => {
        console.log(res);// {code: "1", msg: "操作成功！"}
        resolve(res);

        if (res.code === '0' || (res.status && res.status.code === '0')) {
          mui.alert(res.msg || res.status.msg, '提示', '确定');
        }
      }).catch((err) => {
        reject('post请求链接失败:' + err);
      });
    });
  }
}
export default new API();
