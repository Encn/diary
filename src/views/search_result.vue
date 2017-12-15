<template>
  <div id="edit">
    <div class="top">
      <span class="iconImg">
        <svg v-if="sex == '女'" class="icon" aria-hidden="true">
          <use xlink:href="#icon-nv"></use>
        </svg>
        <svg v-else class="icon" aria-hidden="true">
          <use xlink:href="#icon-nan1"></use>
        </svg>
      </span>
      <form action="/edit" ref="form" @click="search">
        <i class="iconfont icon-sousuo searchIcon"></i>
        <input type="search" placeholder="搜索" v-model="inputVal">
        <span class="delbtn" @click="dealCard">删除</span>
      </form>
    </div>
    <div class="content" id="scroller">
      <ul class="card" v-for="(item, indx) in list" :key="indx" :class="{'card-sel': item.active}" @click="topath(item.workReportCode)">
        <!-- <i class="iconfont icon-danxuan" @tap.stop.prevent="change(item)"></i> -->
        <li class="cardItem">
          填写日期：<span>{{ item.date }}</span>
        </li>
        <li class="cardItem">
          项目名称：<span>{{ item.proname }}</span>
        </li>
         <li class="cardItem">
          项目时长：<span>{{ item.time }}h</span>
        </li>
        <li class="cardItem">
          <b>工作描述：</b><span class="descr">{{ item.descr }}</span>
        </li>
      </ul>
    </div>
    <common-footer v-if="!hideFooter"></common-footer>
  </div>
</template>
<script>
import API from './API'
import commonFooter from '@/views/common/footer';

export default {
    name: 'searchRes',
    data() {
      return {
        title: '填表',
        isShowNotFound: false,
        hideFooter: false,
        list: [],
        inputVal: '',
        sex: '女',
        k: 1, // 滚动加载次数
        totalRecord: ''
      }
    },
    components: {
      commonFooter,
    },
    mounted() {
      this.getInitData(1);
      this.initScroll();
      mui.plusReady(function(){
        console.log('222');
        this.list = plus.webview.currentWebview().data;
      })
     // console.log(mui.currentWebview);
    },
    methods: {
      initScroll() {
        //mui初始化，配置下拉刷新
        var self = this;
        mui.init({
          pullRefresh: {
            container: '#scroller',
            up : {
              height: 50,//可选.默认50.触发上拉加载拖动距离
              auto: true,//可选,默认false.自动上拉加载一次
              contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
              contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
              callback : function() {  //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
                  //TODO 上拉刷新回调 成功结束进度条this.endPullupToRefresh(true|false);
                self.getInitData();
                if (self.k >= self.totalRecord / 5) {
                  this.endPullupToRefresh(true);
                }
                self.k ++;
              }
            }

          }
        });
      },
      getInitData() {
        var self = this;
        API.postSearchReportInfo({
          userId: '',
          departmentCode: '',
          userName: '',
          startDate: '',
          endDate: '',
          proLevel: '',
          workProjectCode: '',
          pageNum: 1,
          pageSize: 5 * self.k // 每次滚动加载总条数
        }).then((res) => {
          console.log(res.data);
          if (res.data) {
            res.data.forEach((item) => {
              item.date = item.reportDate;
              item.proname = item.workProjectCode;
              item.time = item.workTime;
              item.descr = item.content;
              item.workReportCode = item.workReportCode;
              item.active = false;
            })
            this.list = res.data;
          }
          if (res.totalRecord) {
            this.totalRecord = res.totalRecord.totalRecord;
          }
        })
      },
      search() {
        // 搜索内容
        console.log(this.inputVal);
        this.$router.push('/search');
      },
      back() {  // 返回
        this.$router.go(-1)
      },
      // change(item) {
      //   item.active = !item.active
      // },
      dealCard() {
        // 删除功能
        var arr = [];
        this.list.forEach((item) => {
          if (item.active) {
            var obj = {};
            obj.workReportCode = item.workReportCode;
            arr.push(obj);
          }
        });
        API.deleteWorkReport({
          // data参数问题: json格式[{0:'xxx'}]
          data: arr,
          status: 0
        }).then((res) => {
          if (res.code === '1') {
            this.$router.go(-1)
          }
        })
      },
      topath(id) {
        // 详情页跳转
        this.$router.push('/detail?id=' + id);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/lib/mixin";
  #edit {
    background-color: @bgColor;
  }
  .top {
    height: 2.75rem;
    background: @mainColor;
    color: @white;
    position: fixed;
    line-height: 2.75rem;
    width: 100%;
    z-index: 100;
    .font-dpr(12px);
    padding: .4375rem 0 0 3.5313rem;

    .iconImg {
      position: absolute;
      top: .4375rem;
      left: .75rem;
      width: 1.875rem;
      height: 1.875rem;
      display: inline-block;
      background: @white;
      .border-radius(50%);
      svg {
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
    }
    form {
      height: 1.875rem;
      padding: .0938rem;
      overflow: hidden;
      position: relative;
    }
    .searchIcon {
      position: absolute;
      left: .625rem;
      top: -.375rem;
      .font-dpr(15px);
    }
    input {
      width: 15.875rem;
      height: 1.6875rem;
      padding-left: 1.6563rem;
      .border-radius(20px);
      text-align: left;
      float: left;
      background: #269af7;
      &::-webkit-input-placeholder { /* WebKit browsers */
        color:#fefefe;
        font-size: 12px;
        .opacity(.5);
      }

    }
    .delbtn {
      .btn(2.6875rem, 1.6875rem, 12px, #269af7, #eaeaea);
      display: inline-block;
      .border-radius(10px);
      .opacity(.9);
      float: left;
      margin-left: .625rem;
    }
  }
  .content {
    padding: 3.375rem .75rem;
    min-height: 100%;
    .card {
      width: 100%;
      height: 8.75rem;
      background-color: #ffffff;
      padding: .75rem 0 .75rem 1.5rem;
      margin-bottom: .9375rem;
      position: relative;
      &:last-child {
        margin-bottom: 0;
      }
      i {
        position: absolute;
        top: .5rem;
        right: .5rem;
        .font-dpr(14px);
        color: #f3f3f3;
      }
      &.card-sel {
        i{
          color: #40e18c;
        }
      }
    }
    .cardItem {
      .font-dpr(16px);
      line-height: 1;
      margin-bottom: .8125rem;
      color: #999999;
      b{
        font-weight: normal;
        vertical-align: top;
      }
      span {
        color: @baseColor;
        &.descr {
          display: inline-block;
          max-width: 10.625rem;
          .one-line();
        }
      }
    }
  }
</style>
