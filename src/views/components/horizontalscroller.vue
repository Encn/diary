<template>
  <div class="more">
    {{ msg }}
    <!-- 横向滚动 -->
    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
      <div class="mui-scroll">
        <a class="mui-control-item mui-active">
            推荐
        </a>
        <a class="mui-control-item">
            热点
        </a>
        <a class="mui-control-item">
            北京
        </a>
        <a class="mui-control-item">
            社会
        </a>
        <a class="mui-control-item">
            娱乐
        </a>
        <a class="mui-control-item">
            科技
        </a>
        <a class="mui-control-item">
            娱乐2
        </a>
        <a class="mui-control-item">
            科技2
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'scroller',
  data() {
    return {
      msg: '横向滚动'
    }
  },
  created() {
    mui.scrollTo(0,50); // 1秒钟之内滚动到页面顶部
  },
  mounted() {
    this.horizontalScroll();
  },
  methods: {
    horizontalScroll() {
      // mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,100);//100毫秒滚动到顶
      var options = {
        scrollY: true, //是否竖向滚动
        scrollX: false, //是否横向滚动
        startX: 0, //初始化时滚动至x
        startY: 0, //初始化时滚动至y
        indicators: true, //是否显示滚动条
        deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
        bounce: true //是否启用回弹
      }
      // 初始化
      mui('.mui-scroll-wrapper').scroll(options);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../assets/lib/mixin.less';
.mui-scroll-wrapper {
  width: 100%;
}
</style>
