<template>
  <div class="card" v-if="list.length">
    <ul class="card" v-for="(item, indx) in list" :key="indx" :class="{'card-sel': item.active}" @click="topath(item.workReportCode)">
      <!-- <i class="iconfont icon-icon_complete_nor" @click="change(item)"></i> -->
      <li class="cardItem">
        填写日期：<span>{{ item.date }}</span>
      </li>
      <li class="cardItem">
        标题名称：<span>{{ item.title }}</span>
      </li>
      <li class="cardItem">
        项目名称：<span>{{ item.name }}</span>
      </li>
      <li class="cardItem">
        <b>工作描述：</b><span class="descr">{{ item.descr }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: '',
    props: ['list'],
    data() {
      return {
        msg: 'hello'
      }
    },
    components: {},
    mounted() {},
    methods: {
      topath(id) {
        // 详情页跳转
        this.$router.push('/detail?id=' + id);
      }
    }
  }
</script>
<style lang="less" scoped>
@import '../../assets/lib/mixin.less';
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
</style>
