<template>
  <div>{{ user.name }}</div>
</template>

<script lang='ts' setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
</script>

<style scoped>
</style>
