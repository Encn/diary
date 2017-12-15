<template>
  <div class="login">
    <!-- {{msg}}
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-nv"></use>
    </svg> -->

    <!-- 横线标题 -->
    <line-title :title="title"></line-title>

    <!-- 所有路由页面 -->
    <!-- <div class="mui-card" style="margin-bottom: 35px;">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell" v-for="(item, index) in Routes" :key="index">
          <router-link class="mui-navigate-right" :to="{ name: item.name }">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div> -->

    <!-- 上拉滚动加载 -->
    <scroll-more></scroll-more>
  </div>
</template>
<script>
import router from '@/router'
import lineTitle from './components/line_title'
import horizontalScroll from './components/horizontalscroller'
import scrollMore from './components/pullMore'
export default {
  name: '',
  data() {
    return {
      msg: 'hello',
      title: 'Diary',
      Routes: [],
    }
  },
  created() {
    this.Routes = router.options.routes.filter(t => t.name !== this.$route.name)
  },
  components: {
    lineTitle,
    horizontalScroll,
    scrollMore
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/lib/mixin.less';
.mui-scroll-wrapper {
  background: pink;
  top: 20px;
  height: 100px;
}
</style>
