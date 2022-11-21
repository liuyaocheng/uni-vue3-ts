<template>
  <div>{{ user.name }}</div>
</template>

<script lang='ts' setup>
const user = useUserStore()
</script>
