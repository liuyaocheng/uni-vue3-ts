<template>
  <view class="content">
    <image class="w-full rounded-full" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">
        {{ title }}
      </text>
    </view>
    <view>
      <text>{{ user.name }}</text>
    </view>
    <uni-badge size="small" :text="100" absolute="rightBottom" type="primary">
      <button @click="handelClick">
        右下
      </button>
    </uni-badge>
    <List />
  </view>
</template>
<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'
import { useUserStore } from '@/stores/user'
const title = ref('Hello')
const user = useUserStore()
console.log(user)

const handelClick = () => {
  title.value = 'Hello World1'
  user.name = '123123'
}
onShow(() => {
  console.log('onShow')
})
</script>
<style lang="scss">
.clickme {
  background-color: $uni-color-primary;
}
</style>
