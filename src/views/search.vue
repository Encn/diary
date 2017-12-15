<template>
  <div class="search">
    <common-header :title="title" :hideBack="hideBack" :textbtn="textbtn" @todo="todo"></common-header>
    <div class="form">
      <ul class="mui-table-view list">
      <li class="mui-table-view-cell item" @tap="selectDate">
        <a class="mui-navigate-right">开始日期</a>
        <div class="con">{{ startDate }}</div>
      </li>
      <li class="mui-table-view-cell item" @tap="selectDate2">
        <a class="mui-navigate-right">结束日期</a>
        <div class="con">{{ endDate }}</div>
      </li>
      <li class="mui-table-view-cell item" @tap="select3">
        <a class="mui-navigate-right">部门</a>
        <div class="con">
          {{ department }}
        </div>
      </li>
      <li class="mui-table-view-cell item" @tap="select4">
        <a class="mui-navigate-right">姓名</a>
        <div class="con">
          {{ userName }}
        </div>
      </li>
    </ul>
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
      title: '查询条件',
      hideBack: false,
      textbtn: '搜索',
      startDate: '',
      endDate: '',
      department: '',
      departmentId: '',
      userName: '',
      userNameId: '',
      showResult: false,
      listData: [],
      departmentList:[ // 部门下拉选择数据
        {
          value: "1",
          text: "第一项"
        }, {
          value: "2",
          text: "第二项"
        }, {
          value: "3",
          text: "第三项"
        }, {
          value: "4",
          text: "第四项"
        }, {
          value: "5",
          text: "第五项"
        }
      ],
      userNameList:[ // 姓名下拉选择数据
        {
          value: "1",
          text: "章三"
        }, {
          value: "2",
          text: "李四"
        }, {
          value: "3",
          text: "小二"
        }, {
          value: "4",
          text: "吴尊"
        }, {
          value: "5",
          text: "韩寒"
        }
      ]
    }
  },
  components: {
    commonHeader
  },
  mounted() {
    // $('.form').on('submit', function(e){
    //   // 你想做的事
    //   return false;
    // });
  },
  methods: {
    getData() {
      API.postSearchReportInfo({
        userId: '',
        departmentCode: this.departmentId,
        userName: this.userNameId,
        startDate: this.startDate,
        endDate: this.endDate,
        proLevel: '',
        workProjectCode: '',
        pageNum: 1,
        pageSize: 5 // 每次总条数
      }).then((res) => {
        console.log(res);
        localStorage.setItem("searchData", res.data);
        var webview = mui.openWindow({
          url:'/#/list',
          id: '/#/list',
          extras:{
            data: res.data  //扩展参数
          }
        });
      })
    },
    todo() {
      this.getData();
    },
    selectDate() {
      // 时间选择
      var self = this;
      var options = {
        type: 'date',
        beginDate: new Date(2000, 1, 1),//设置开始日期
        endDate: new Date(),//设置结束日期
       // labels: ["年", "月", "日"] ,//设置默认标签区域提示语
      };
      var dtPicker = new mui.DtPicker(options);
      dtPicker.show(function (selectItems) {
        self.startDate = selectItems.y.value + '-' + selectItems.m.value + '-' + selectItems.d.value;
      })
    },
    selectDate2() {
      // 时间选择2
      var self = this;
      var options = {
        type: 'date',
        beginDate: new Date(2000, 1, 1),//设置开始日期
        endDate: new Date(),//设置结束日期
      };
      var dtPicker = new mui.DtPicker(options);
      dtPicker.show(function (selectItems) {
        self.endDate = selectItems.y.value + '-' + selectItems.m.value + '-' + selectItems.d.value;
      })
    },
    select3() {
      var self = this;
      // 部门选择
      self.picker = new mui.PopPicker();
      self.picker.setData(self.departmentList);
      self.picker.pickers[0].setSelectedIndex(4, 2000);
      self.picker.show(function(SelectedItem) {
        self.department = SelectedItem[0].text;
        self.departmentId = SelectedItem[0].value;
        console.log('departmentId：' + self.departmentId);
      })
    },
    select4() {
      var self = this;
      // 姓名选择
      self.picker2 = new mui.PopPicker();
      self.picker2.setData(self.userNameList);
      self.picker2.pickers[0].setSelectedIndex(4, 2000);
      self.picker2.show(function(SelectedItem) {
        self.userName = SelectedItem[0].text;
        self.userNameId = SelectedItem[0].value;
        console.log('userNameId:' + self.userNameId);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit LESS to this component only -->
<style lang="less" scoped>
@import '../assets/lib/mixin.less';
.search {
  color: #333;
  .form {
    padding: 3.375rem 1.875rem 0;
    background: #fff;
    .con {
      line-height: 1.25rem;
    }
  }
  .mui-table-view-cell>a:not(.mui-btn) {
    margin: -.6875rem 0;
  }
  .item {
    padding: .6875rem 0;
    position: relative;
    &:after {
      left: 0;
    }
    a {
      color: #999;
    }
  }
  .list {
    &:before {
      height: 0;
    }
    &:after {
      height: 0;
    }
  }
}
</style>
