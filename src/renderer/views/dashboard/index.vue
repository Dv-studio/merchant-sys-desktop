<template>
  <div class="dashboard-container">
    <div class="dashboard-text">欢迎进入系统</div>
    <div class="dashboard-text">角色:<span v-for='role in roles' :key='role'>销售</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
