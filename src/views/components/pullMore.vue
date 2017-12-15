<template>
  <div class="more">
    {{ msg }}

    <!-- 上拉滚动加载 -->
    <div class="mui-content mui-scroll-wrapper" id="pullrefresh" >
      <div class="mui-scroll">
        <!--数据列表-->
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell" v-for="(item, indx) in list" :key="indx">
						<a href="" class="mui-navigate-right">Item {{ item }}</a>
					</li>
				</ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'scroller',
  data() {
    return {
      msg: '上拉滚动加载',
      list: [1, 2, 3, 4, 5, 6, 7 , 8, 9, 0, 2, 3, 4, 6, 7, 8, 8,8,8]
    }
  },
  created() {
   // mui.scrollTo(0,50); // 1秒钟之内滚动到页面顶部
    let self = this;
    var count = 0;
    mui.ready(function(){
      mui.init({
        pullRefresh:{
          container: '#pullrefresh',
          up: {
            contentrefresh: '正在加载...',
            callback: function() {
              var count = 0;
              /**
               * 上拉加载具体业务实现
               */
              setTimeout(function() {
                mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
                for(var i= 100; i < 110; i++){
                  this.list.push(i);
                }
                mui.alert('upAjax','提示', '确定');
              }, 1500);
            }
          }
        }
      });
    })

    // if(mui.os.plus) {
    //   mui.plusReady(function() {
    //       setTimeout(function() {
    //           mui('#pullrefresh').pullRefresh().pullupLoading();
    //       }, 1000);
    //   });
    // } else {
    //     mui.ready(function() {
    //         mui('#pullrefresh').pullRefresh().pullupLoading();
    //     });
    // }
  },
  mounted() {
  },
  methods: {
    pulldownRefresh () {
      console.log('downRefresh');
      setTimeout(() => {
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
      },1500)
    },
    pullupRefresh () {
      var count = 0;
			/**
			 * 上拉加载具体业务实现
			 */
      setTimeout(function() {
        mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
        for(var i= 100; i < 110; i++){
          this.list.push(i);
        }
        mui.alert('upAjax','提示', '确定');
      }, 1500);
    },
    getJoke() {
      alert('1');
    },
    // 上拉加载
    // pullScroll() {
   // },
    go() {
      mui.init({
        pullRefresh : {
          container: '#scroll',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
          up: {
            auto:true,//可选,默认false.自动上拉加载一次
            contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
            contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
            callback: function() {
              // ajax request true:没有更多数据了
              console.log(1);
              this.endPullupToRefresh(false);
            } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
          },
          down : {
            style:'circle',//必选，下拉刷新样式，目前支持原生5+ ‘circle’ 样式
            color:'#2BD009', //可选，默认“#2BD009” 下拉刷新控件颜色
           // height:'5px',//可选,默认50px.下拉刷新控件的高度,
           // range:'100px', //可选 默认100px,控件可下拉拖拽的范围
           // offset:'0px', //可选 默认0px,下拉刷新控件的起始位置
            auto: true,//可选,默认false.首次加载自动上拉刷新一次
            callback : function() {
              console.log(2);
              mui.alert(2);
              this.endPulldownToRefresh(false);
              mui('#pullrefresh').pullRefresh().refresh(true);
            } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
          }
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../assets/lib/mixin.less';
.scroller-wrap {
  // height: 300px;
  border: 1px solid #333333;
  overflow: auto;
}
    .mui-card:nth-last-child(1){margin-bottom:70px;}
    .mui-card-header>img:first-child{width:100%;height: 100%;}
    .mui-pull-bottom-pocket{position:inherit}
</style>
