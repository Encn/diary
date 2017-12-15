
<template>
  <div class="boxWrap">
    <common-header :title="headertitle" :hideBack="hideBack"></common-header>
    <div class="con">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">手机号
            <span class="inputCon">1234567890</span>
          </a>
        </li>
        <router-link tag="li" to="/user/editPasswd" class="mui-table-view-cell">
          <a class="mui-navigate-right">密码修改</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import commonHeader from '@/views/common/common_header';

export default {
  name: 'setting',
  data() {
    return {
      headertitle: '设置',
      hideBack: false
    }
  },
  components: {
    commonHeader
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="less" scoped>
@import '../../assets/lib/mixin.less';
.con {
  background-color: @bgColor;
  min-height: 41.6875rem;
  padding: 3.6875rem 0 0;

  .mui-table-view {
    background: transparent;
    &:after {
      height: 0;
    }
    &:before {
      height: 0;
    }
    .mui-table-view-cell {
      margin-bottom: .9375rem;
      background-color: @white;
      &:after {
        height: 0;
        // background-color: @grayWhite;
      }
    }
    .mui-navigate-right {
      color: @baseColor;
      .font-dpr(15px);
    }
    .inputCon {
      position: absolute;
      right: 2.25rem;
      top: 0.6rem;
      .font-dpr(14px);
      color: @fontColor;
    }
  }
}
</style>
