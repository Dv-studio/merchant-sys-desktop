<template>
    <div class="sale">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="下单时间">
            <el-date-picker
              v-model="form.createTime"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="下单商品">
            <el-date-picker
              v-model="form.createTime"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="客户手机号">
          <el-input v-model="form.customerPhone" placeholder="请输入手机号" style="width: 220px;"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        createTime: '',
        customerPhone: ''
      }
    }
  },
  methods: {
    onSubmit() {}
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>