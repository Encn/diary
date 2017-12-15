<template>
  <div class="common-footer">
    <router-link :class="[{'footer-active': active == 0}, 'item']" to="/add" @click.native="clickactive(0)">
      <div class="icon-wrap">
        <i class="iconfont icon-tianbao" aria-hidden="true"></i>
      </div>
      填报
    </router-link>

    <router-link :class="[{'footer-active': active == 1}, 'item']" to="/list" @click.native="clickactive(1)">
      <div class="icon-wrap">
        <i class="iconfont icon-chazhao" aria-hidden="true"></i>
      </div>
      查询
    </router-link>

    <router-link :class="[{'footer-active': active == 2}, 'item']" to="/user" @click.native="clickactive(2)">
      <div class="icon-wrap">
        <i class="iconfont icon-wo" aria-hidden="true"></i>
      </div>
      自己
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'common-footer',
  created () {
  },
  methods: {
    clickactive(indx) {
      this.active = indx;
    }
  },
  data () {
    return {
      active: 0
    }
  },
  mounted() {
    switch (this.$route.path) {
      case '/add':
        this.active = 0;
        break;
      case '/list':
        this.active = 1;
        break;
      case '/user':
        this.active = 2;
        break;
    }
  }
}
</script>

<style scoped lang="less">
@import "../../assets/lib/mixin";
.common-footer {
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  .box-shadow(0px -8px 30px 0px
		rgba(0, 0, 0, 0.1));
    z-index: 99;
  // height: 3.0625rem;

  .notice {
    position: absolute;
    top: -35px;
    .font-dpr(7.5px);
    background: #fff;
    line-height: 34px;
    height: 34px;
    left: 0;
    right: 0;
    padding: 0 15px;
    box-shadow: 0 -2px 5px #ccc;

    i {
      float: right;
      .font-dpr(10px);
      margin-top: 5px;
    }
  }
  .item {
    display: block;
    -webkit-box-flex: 1;
    text-align: center;
    padding: 5px 15px;
    color: @grayWhite;
      .font-dpr(10px);
      line-height: 1;
    &.footer-active {
      color: @mainColor;
    }
    .icon-wrap {
      text-align: center;
      margin-bottom: .3125rem;
      i {
        .font-dpr(20px);
        vertical-align: middle;
      }
    }
  }
}
</style>
