<script setup>
import Carousel from '@/components/Carousel.vue'
import ShowData from '@/components/ShowData.vue';
import Timeline from '@/components/Timeline.vue';
import Introduction from '@/components/Introduction.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <div class="home">
        <Carousel></Carousel>
        <ShowData></ShowData>
        <Introduction></Introduction>
        <Timeline></Timeline>
        <div class="div" style="height: 600px"></div>
        <Footer></Footer>
    </div>

</template>

<style scoped lang="less">
.home {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 2;
}
</style>