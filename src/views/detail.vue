<template>
  <div class="boxWrap">
    <common-header :title="title" :hideBack="hideBack" :textbtn="textbtn" @todo="go"></common-header>
    <div class="form">
      <ul class="mui-table-view list" v-show="data">
        <li class="mui-table-view-cell item">
          <span>开始日期</span>
          <div>{{ data.reportDate }}</div>
        </li>
        <li class="mui-table-view-cell item">
          <span>项目名称</span>
          <div>{{ data.workProjectCode }}</div>
        </li>
        <li class="mui-table-view-cell item">
          <span>项目时长</span>
          <div>{{ data.workTime }}</div>
        </li>
        <li class="mui-table-view-cell item">
          <span>工作描述</span>
          <div class="descr">
            {{ data.content }}
          </div>
        </li>
      </ul>
      <div v-show="!data">暂无数据</div>
    </div>

  </div>
</template>
<script>
import API from './API';
import commonHeader from '@/views/common/common_header';
export default {
  name: '',
  data() {
    return {
      title: '填报详情',
      hideBack: false,
      textbtn: '编辑',
      data: {},
      workReportCode: '' // 日记id
    }
  },
  components: {
    commonHeader
  },
  mounted() {
    this.getData();
  },
  methods: {
    go() {
      // 跳到编辑页
      this.$router.push('/add?reportId=' + this.workReportCode);
    },
    getData() {
      let _id = this.$route.query.id;
      if (_id !== undefined) {
        API.postfindWorkReport({
          workReportCode: _id
        }).then((res) => {
          console.log(res);
          if (res.data) {
            this.data = res.data;
            this.workReportCode = res.data.workReportCode;
          }
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/lib/mixin.less';
.boxWrap {
  color: #333;
  .form {
    background-color: @bgColor;
    padding: 3.375rem .75rem 0;
    .border-radius(10px);
  }
  .mui-table-view-cell>a:not(.mui-btn) {
    margin: -.6875rem 0;
  }
  .list {
    min-height: 33rem;
    padding: 0 .625rem;
    &:before {
      height: 0;
    }
    &:after {
      height: 0;
    }
  }
  .item {
    padding: .6875rem 0;
    position: relative;
    &:after {
      left: 0;
    }
    span {
      color: #999;
    }
    .descr {
      line-height: 1.25rem;
    }
  }
}
</style>
