<template>
  <div class="errpr-page">
    <p>
      您找的页面不在地球上
    </p>

    <router-link class="vue-btn vue-btn-full" to="histroy.go(-1)">返回</router-link>
  </div>
</template>

<script>

export default {
  name: 'error_404'
}

</script>

<style scoped lang="less">
  @import "../../assets/lib/mixin";

  .errpr-page {
    padding: 30px;

    p {
      text-align: center;
      margin-bottom: 30px;
    }
  }

</style>
