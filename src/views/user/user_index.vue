<template>
  <div class="userWrap">
    <common-header :title="headertitle" :hideBack="hideBack"></common-header>
    <div class="con">
      <ul class="mui-table-view">
        <router-link tag="li" class="mui-table-view-cell mui-media" to="/user/resume">
            <a href="javascript:;" class="mui-navigate-right">
              <span class="mui-pull-left imgbox">
                <svg v-if="sex == '女'" class="icon" aria-hidden="true">
                  <use xlink:href="#icon-nv"></use>
                </svg>
                <svg v-else class="icon" aria-hidden="true">
                  <use xlink:href="#icon-nan1"></use>
                </svg>
              </span>
              <div class="mui-media-body mediaItemr">
                  幸福
                  <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
              </div>
            </a>
        </router-link>
        <router-link tag="li" class="mui-table-view-cell item" to="/user/setting">
            <a class="mui-navigate-right">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shezhi"></use>
              </svg>设置
            </a>
        </router-link>
        <router-link tag="li" class="mui-table-view-cell item" to="/user">
            <a class="mui-navigate-right">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-changjianwenti"></use>
              </svg>常见问题
            </a>
        </router-link>
        <router-link tag="li" class="mui-table-view-cell item" to="/user/advice">
            <a class="mui-navigate-right">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fankuiyijian"></use>
              </svg>反馈意见
            </a>
        </router-link>
        <router-link tag="li" class="mui-table-view-cell item" to="/user/version">
            <a class="mui-navigate-right">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xinbanben"></use>
              </svg>新版本
            </a>
        </router-link>
    </ul>
    </div>
  </div>
</template>
<script>
import commonHeader from '@/views/common/common_header';

export default {
  name: 'userIndex',
  data() {
    return {
      headertitle: '我',
      hideBack: true,
      sex: '女'
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
  // min-height: 41.6875rem;
  padding: 2.8rem 0 0;
  .mui-table-view {
    background-color: transparent;
    &:before {
      height: 0;
    }
    &:after {
      height: 0;
    }
  }
  .mui-table-view-cell {
    background-color: @white;
    margin-bottom: 1rem;
    &:after {
      height: 0;
    }
    &:nth-child(2) {
      margin-bottom: 0;
      &:after {
        height: 1px;
        left: 0;
        background-color: @grayWhite;
      }
    }

  }
  .item {
    height: 2.875rem;
  }
  .mui-navigate-right {
    padding: .75rem;
    color: @fontColor;
    .font-dpr(15px);
  }
  .imgbox {
    width: 4.6875rem;
    height: 4.6875rem;
    display: block;
    background: @grayWhite;
    .border-radius(50%);
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .mediaItemr {
    margin-left: 5.6875rem;
    color: @baseColor;
    padding: .6875rem 0 0 0;
    p {
      margin-top: 1rem;
    }
  }
  svg {
    width: 1.375rem;
    height: 1.375rem;
    margin-right: .5625rem;
    vertical-align: sub;
  }
}
</style>
