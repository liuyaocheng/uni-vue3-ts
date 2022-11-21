<template>
  <view class="bg-red-200">
    <view class="h-[200vh]">
      {{ count }}
    </view>
    <view class="p-20 bg-green-200" @click="add">
      +
    </view>
  </view>
  <view class="edgeInsetBottom"></view>
  <view class="fixedView right-1 w-100 h-100 rounded-full bg-green-500 text-white" @click="add">+</view>
</template>

<script setup lang="ts">
const count = ref(0)
const add = () => {
  count.value++
}
</script>
<style>
.edgeInsetBottom {
  width: 750rpx;
  height: var(--window-bottom);
}

.fixedView {
  position: fixed;
  bottom: var(--window-bottom);
}
</style>
