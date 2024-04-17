<script setup lang="ts">
import { Carousel } from 'ant-design-vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Parallax} from 'swiper/modules'
  // Import Swiper styles
  import 'swiper/less';
</script>

<template>
    <div class="carousel">
        <Swiper :module="Parallax">
            <SwiperSlide>234</SwiperSlide>
        </Swiper>
        <!-- <Carousel autoplay>
            <div class="page">
                <div class="content">
                    <p>智博会</p>
                <p>中国国际智能产业博览会（Smart China Expo，简称“智博会”</p>
                </div>
            </div>
            <div class="page">
                <div class="content">
                    <p>智博会</p>
                <p>中国国际智能产业博览会（Smart China Expo，简称“智博会”</p>
                </div>
            </div>
            <div class="page">
                <div class="content">
                    <p>智博会</p>
                <p>中国国际智能产业博览会（Smart China Expo，简称“智博会”</p>
                </div>
            </div>
        </Carousel> -->
    </div>
</template>

<style scoped lang="less">
// .Carousel {
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 1;

//     .page{
        
//         z-index: 2;
//         .content{
//             z-index: 2;
//         }
//     }
// }

// /* For demo */
// :deep(.slick-slide) {
//     text-align: center;
//     height: 100vh;
//     background: #364d79;
//     overflow: hidden;
// }

// :deep(.slick-slide h3) {
//     color: #fff;
// }


</style>