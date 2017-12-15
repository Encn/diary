
<template>
  <div class="boxWrap">
    <common-header :title="headertitle" :hideBack="hideBack"></common-header>
    <div class="con">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell photoItem">
          <a class="mui-navigate-right">头像
            <span class="photo">
              <svg v-if="sex == '女'" class="icon" aria-hidden="true">
                <use xlink:href="#icon-nv"></use>
              </svg>
              <svg v-else class="icon" aria-hidden="true">
                <use xlink:href="#icon-nan1"></use>
              </svg>
            </span>
          </a>
        </li>
        <li class="mui-table-view-cell" @click="edit_name">
          <a class="mui-navigate-right">名字
            <span class="inputCon">{{ name }}</span>
          </a>
        </li>
        <li class="mui-table-view-cell" @click="edit_depart">
          <a class="mui-navigate-right">部门
            <span class="inputCon">{{ department }}</span>
          </a>
        </li>
        <li class="mui-table-view-cell" @click="edit_account">
          <a class="mui-navigate-right">账号
            <span class="inputCon">{{ userId }}</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">性别
            <span class="inputCon">{{ sex }}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- layer -->
    <div>
      <edit-name class="mui-backdrop" v-if="nameActive" @edit="handleName" @hideLayer="hide1"></edit-name>
      <edit-depart class="mui-backdrop" v-if="departActive" @edit="handleDepart" @hideLayer="hide2"></edit-depart>
      <edit-account class="mui-backdrop" v-if="accountActive" @edit="handleAccount" @hideLayer="hide3"></edit-account>

    </div>
  </div>
</template>
<script>
import commonHeader from '@/views/common/common_header';
import editName from './components/edit_name';
import editDepart from './components/edit_depart';
import editAccount from './components/edit_account'
export default {
  name: 'userResume',
  data() {
    return {
      headertitle: '个人资料',
      hideBack: false,
      nameActive: false,
      departActive: false,
      accountActive: false,
      sex: '女',
      name: '3', // 名字
      department: '',
      userId: '',
    }
  },
  components: {
    commonHeader,
    editName,
    editDepart,
    editAccount
  },
  mounted() {},
  methods: {
    // 显示姓名编辑
    edit_name() {
      this.nameActive = true;
    },
    // 抛出修改姓名
    handleName(val) {
      this.name = val;
      this.nameActive = false;
    },
    // 隐藏姓名编辑
    hide1() {
      this.nameActive = false;
    },
    // 显示部门编辑
    edit_depart() {
      this.departActive = true;
    },
    hide2() {
      this.departActive = false;
    },
    handleDepart(val) {
      this.department = val;
      this.departActive = false;
    },
    // 编辑账户
    edit_account() {
      this.accountActive = true;
    },
    hide3() {
      this.accountActive = false;
    },
    handleAccount(val) {
      this.userId = val;
      this.accountActive = false;
    },

  }
}
</script>
<style lang="less" scoped>
@import '../../assets/lib/mixin.less';
.con {
  background-color: @bgColor;
  padding: 3.6875rem 0 0;

  .mui-table-view {
    &:after {
      height: 0;
    }
    &:before {
      height: 0;
    }
    .mui-table-view-cell {
      &:after {
        left: 0;
        background-color: @grayWhite;
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

  .photoItem {
    height: 6.25rem;
    .mui-navigate-right {
      line-height: 6.25rem;
      position: relative;
      overflow: visible;
      &:after {
        content: ''
      }
    }
    .photo {
      position: absolute;
      width: 4.6875rem;
      height: 4.6875rem;
      right: .9375rem;
      background: @grayWhite;
      display: block;
      top: .7813rem;
      .border-radius(50%);
      svg {
        width: 100%;
        height: 100%;
        margin-top: -.25rem;
      }
    }
  }
}
</style>
