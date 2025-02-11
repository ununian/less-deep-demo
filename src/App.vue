<template>
  <div class="content">
    <Com />
  </div>
</template>
<script setup lang="ts">
import Com from './Com.vue';
</script>

<style scoped lang="less">
.content {
  ::v-deep .Com {
    &-title {
      font-size: 3rem;
    }
  }
}
</style>
