<template>
  <div class="demo-split">
    <el-split v-model="split1">
      <div slot="left" class="demo-split-pane">
        Left Pane
      </div>
      <div slot="right" class="demo-split-pane">
        Right Pane
      </div>
    </el-split>
  </div>
</template>
<script>
export default {
  data () {
    return {
      split1: 0.5
    }
  }
}
</script>
<style scoped>
.demo-split .el-split {
  height: 150px;
  border: 1px solid #dcdee2;
}
.demo-split .demo-split-pane {
  padding: 10px;
}
.demo-split .demo-split-pane.no-padding {
  height: 150px;
  padding: 0px;
}
</style>