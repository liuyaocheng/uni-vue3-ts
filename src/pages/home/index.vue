<template>
  <view class="bg-red-200">
    <view class="edgeInsetTop"></view>
    <view class="bg-green-500">asdsd</view>
    <view class="h-[140vh]">
      {{ count }}
    </view>
    <view>asdsad</view>
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

.edgeInsetTop {
  width: 750rpx;
  height: var(--window-top);
}

.fixedView {
  position: fixed;
  bottom: var(--window-bottom);
}
</style>
