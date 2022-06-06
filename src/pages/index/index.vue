<template>
  <view class="content">
    <view>
      {{ $t('hello') }}{{ $t('index.title') }}
    </view>
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
        {{ $t('you-xia') }}
      </button>
    </uni-badge>
    <List />
    <view class="bg-green-100 text-red-500 px-[30upx]">
      {{ x }}:{{ y }}
    </view>
  </view>
</template>

<script setup lang="ts">
const { x, y } = useMouse()
const title = ref('Hello')
const user = useUserStore()
console.log(uni.getLocale())

const { locale, t } = useI18n()
const parfn = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log(1)
        resolve(1)
      }, 3000)
    }
    catch (error) {
      reject(error)
    }
  })
}
const handelClick = async () => {
  locale.value = 'en'
  title.value = t('hello')
  user.name = '123123'
  const a = await parfn().catch((res) => {
    console.log(22, res)
  })
  console.log(11, a)
}
onShow(() => {
  console.log('onShow')
})
</script>

<style lang="scss">
</style>
