<template>
  <view class="bg-red-200">
    <view class="h-200">
      {{ count }}
    </view>
    <view class="p-20 bg-green-200" @click="add">
      +
    </view>
  </view>
</template>

<script setup lang="ts">
const count = ref(0)
const add = () => {
  count.value++
}
</script>
