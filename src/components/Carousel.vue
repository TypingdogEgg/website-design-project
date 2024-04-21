<script setup>
// Import Swiper styles
import 'swiper/less';
import { Parallax, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Parallax,Pagination,Navigation]

const swiperData = [
    {
        id:1,
        title:'智博会',
        subtitle:'smart china expo',
        text:'中国牛逼重庆工商大学牛逼！！！'
    },
    {
        id:2,
        title:'智博会2',
        subtitle:'smart china expo',
        text:'中国牛逼重庆工商大学牛逼！！！'
    },
    {
        id:3,
        title:'智博会3',
        subtitle:'smart china expo',
        text:'中国牛逼重庆工商大学牛逼！！！'
    },
    {
        id:4,
        title:'智博会3',
        subtitle:'smart china expo',
        text:'中国牛逼重庆工商大学牛逼！！！'
    },
]

</script>

<template>
    <div class="carousel">
        <Swiper class="swiper" @slideChange="onSlideChange" :autoplay="{ delay: 3000 }" :loop="true" :parallax="true"
            :navigation="true" :pagination="{ clickable: true }" :speed="1000">
            <SwiperSlide class="slide" v-for="data in swiperData" :key="data.id"
                :style="data.id % 2 === 0 ? 'align-items: flex-end;text-align: end;' : 'align-items: flex-start;'">
                <h1 class="title">{{ data.title }}</h1>
                <h2 class="subtitle">{{ data.subtitle }}</h2>
                <div class="text">
                    <p>{{ data.text }}</p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style scoped lang="less">

.swiper {
    height: 100vh;
    background-color: #658cf7;

    .slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        box-sizing: border-box;
        padding: 0 10%;
            /* 初始状态 */
        background-color: transparent;

        .title {
            font-size: 30px;
            margin-top: 0;
            margin-bottom: 10px ;
        }

        .subtitle {
            font-size: 30px;
            margin-top: 0;
            margin-bottom: 10px ;
        }

        .text {
            font-size: 30px;
            max-width: 430px;
            line-height: 1.32;
        }
    }
}
</style>