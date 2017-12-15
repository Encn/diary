<template>
  <div class="lineTitle">
    <h3 class="title"><span>{{ title }}</span></h3>
  </div>
</template>
<script>
export default {
  name: 'lineTitle',
  props: {
    title: {
      type: String,
      default: 'Deer'
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.lineTitle{
  width: 100%;
  margin: 10px auto;
  .title {
    color: #333;
    font-size: 14px;
    margin-bottom: .625rem;
    text-align: center;
    font-weight: normal;
    line-height: 1.1;
    span {
      display: block;     /*设置为块级元素会独占一行形成上下居中的效果*/
      font-size: 1em;
      color: #999;
      position: relative;   /*定位横线（当横线的父元素）*/

      &:before, &:after {
        content: '';                 /*CSS伪类用法*/
        position: absolute;         /*定位背景横线的位置*/
        top: 52%;
        background: #cdcdcd;       /*宽和高做出来的背景横线*/
        width: 25%;
        height: 1px;
      }
      &:before {
        left: 10%;
      }
      &:after {
        right: 10%;
      }
    }
  }
}
</style>
