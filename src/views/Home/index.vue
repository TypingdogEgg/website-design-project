<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
</script>

<template>
    <div class="home">
        <div class="inner"></div>
        <Carousel></Carousel>
        <h1>我是home</h1>
    </div>

</template>

<style scoped lang="less">
.home {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 2;

    .inner {
        position: absolute;
        left: 50%;
        top: 0px;
        transform: translateX(-50%);
        width: 1200px;
        margin-top: 80px;
        height: calc(100vh - 80px);
        background-color: pink;
    }
}
</style>