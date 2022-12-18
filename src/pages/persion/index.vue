<template>
  <view>
    <view class="edgeInsetTop" />

    <uni-indexed-list :options="list" :show-select="false" />
    <view class="edgeInsetBottom" />
  </view>
</template>

<script setup lang="ts">
const list = ref<any>([])

for (let index = 0; index < 10; index++) {
  const n = index + 1
  list.value.push({
    letter: n,
    data: [
      `阿克苏机场${n}`,
      `阿拉山口机场${n}`,
      `阿勒泰机场${n}`,
      `阿里昆莎机场${n}`,
      `安庆天柱山机场${n}`,
      `澳门国际机场${n}`,
    ],
  })
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
