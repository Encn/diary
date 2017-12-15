<template>
  <div class="search">
    <common-header :title="headertitle" :hideBack="false"></common-header>
    <form action="" class="form">
       <div class="inputItem">
        <input type="text" readonly placeholder="开始日期" name="reportDate" v-model="reportDate" @tap="selectDate" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('reportDate') }">
        <span class="font">*</span>
      </div>

      <div class="inputItem">
        <input type="text" placeholder="项目名称" name="protitle" v-model="protitle" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('protitle') }">
        <span class="font">*</span>
      </div>

      <div class="inputItem timeItem">
        <input type="text" placeholder="项目时长(h)" name="time" v-model="time" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('time') }">
        <span class="font">*</span>
      </div>

      <div class="inputItem">
        <textarea placeholder="工作内容描述..." name="descr" v-model="descr" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('descr') }"></textarea>
      </div>
      <div class="btnWrap">
        <span class="actionbtn" @click="submitForm">提交</span>
      </div>
    </form>
     <common-footer></common-footer>
  </div>
</template>
<script>
import API from './API';
import commonHeader from '@/views/common/common_header';
import commonFooter from '@/views/common/footer';
export default {
  name: '',
  data() {
    return {
      headertitle: '填报',
      reportDate: '',
      protitle: '',
      time: '',
      descr: '',
      userId: '',
      data: [], // 日记详情数据
      reportId: ''
    }
  },
  components: {
    commonHeader,
    commonFooter
  },
  create() {
    this.reportId = this.$route.query.reportId;
    if (this.reportId !== undefined) {
      // 1. 获取该日记detail 2. 保存更改
      this.getReportDetail();
    }
  },
  mounted() {
    mui('.search').scroll().scrollTo(0,0,100);//100毫秒滚动到顶
    this.getDefaultDate();
  },
  methods: {
    submitForm() {
        // 1.表单验证 2.保存日记: 修改或新增
      this.$validator.validateAll().then((res) => {
        if (res) {
          if (this.reportId !== undefined) {
            this.updateData();
          } else {
            this.addData();
          }
        }

      })
    },
    addData() {
      // 新增日记保存
      API.saveWorkReport({
          userId: this.userId,
          type: '',
          content: this.descr,
          workTime: this.time,
          reportDate: this.reportDate,
          status: 1,
          workProjectCode: this.protitle
        }).then((res) => {
          if(res.code === '1') {
            this.$router.push('/list');
          }
        })
    },
    getReportDetail() {
      // 获取更改日记详情
      API.postfindWorkReport({
        workReportCode: this.reportId
      }).then((res) => {
        console.log(res);
        if (res.data) {
          // 处理数据
          let data = res.data;
          this.reportDate =  data.reportDate;
          this.protitle = data.workProjectCode;
          this.time = data.workTime;
          this.descr = data.content;
          // this.reportId = data.workReportCode;
         // this.userId = data.userId;
        }
      })
    },
    updateData() {
      // 修改日记保存
      API.updateWorkReport({
        workReportCode: this.reportId,
        reportDate: this.reportDate,
        content: this.descr,
        workTime: this.time,
        workProjectCode: this.protitle
      }).then((res) => {
        console.log(res);
        this.$router.push('/list');
      })
    },
    getDefaultDate() {
      this.reportDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    },
    selectDate() {
      // 时间选择
      var self = this;
      var options = {
        type: 'date',
        beginDate: new Date(2000, 1, 1),//设置开始日期
        endDate: new Date(),//设置结束日期
      };
      var dtPicker = new mui.DtPicker(options);
     // dtPicker.setSelectedValue("1988-01-01")
      dtPicker.show(function (selectItems) {
        self.reportDate = selectItems.y.value + '-' + selectItems.m.value + '-' + selectItems.d.value;
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/lib/mixin.less';
.search {
  min-height: 39.1875rem;
  background-color: #fff;
}
.form {
  padding: 3.375rem .75rem 3.0625rem;
  input {
    height: 2.25rem;
    margin-bottom: 1rem;
    background-color: transparent!important;
    border-color: #ccc;
  }
  textarea {
    height: 14rem;
    overflow: auto;
    margin-bottom: 2.0313rem;
    background-color: transparent!important;
    border-color: #ccc;
  }
  .btnWrap {
    text-align: center;
  }
  .actionbtn {
    width: 3.125rem;
    .btn(12.5rem, 2rem, 16px, @mainColor, @white);
    .border-radius(5px);
    margin-bottom: 3.0625rem;
  }
  .inputItem {
    position: relative;
    .font {
      position: absolute;
      right: .625rem;
      top: .75rem;
    }
    .is-danger {
      border-color: @redColor;
    }
  }
}
</style>
