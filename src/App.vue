<template>
  <div id="app">
    <!-- <common-header :title="title" :hideBack="false"></common-header> -->
    <router-view></router-view>
    <div v-if="isShowNotFound">
      <error-page></error-page>
    </div>
    <!-- <common-footer v-if="!hideFooter" v-bind:footerTab="footerTab"></common-footer> -->

  </div>
</template>

<script>
import commonHeader from '@/views/common/header';
import commonFooter from '@/views/common/footer';
import errorPage from '@/views/error/404.vue';

  export default {
    data() {
      return {
        title: '首页',
        isShowNotFound: false,
        hideFooter: false,
        footerTab: ''
      }
    },
    components: {
      // commonHeader,
      // commonFooter,
      errorPage
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
#app {
  /* min-height: 39.1875rem; */
  /* background-color: #fff; */
}
</style>
