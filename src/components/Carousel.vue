<script setup lang="ts">
import { Carousel } from 'ant-design-vue';
</script>

<template>
    <div class="carousel">
        <Carousel autoplay>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
        </Carousel>
    </div>
</template>

<style scoped lang="less">
.Carousel {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

/* For demo */
:deep(.slick-slide) {
    text-align: center;
    height: 100vh;
    background: #364d79;
    overflow: hidden;
}

:deep(.slick-slide h3) {
    color: #fff;
}
</style>