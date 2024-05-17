<script setup>
import Header from '@/components/Header.vue'

</script>

<template>
    <Header></Header>
    <router-view></router-view>
</template>

<style scoped lang="less">
@import '@/styles/color.less';



h1 {
    color: @background;
}
</style>