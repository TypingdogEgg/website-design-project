<script setup>
import 'swiper/less';
// import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
// import 'swiper/css'
import { UpOutlined, DownOutlined } from '@ant-design/icons-vue';
import { Navigation } from 'swiper/modules';
import { ref } from 'vue';
import { getAssetsImg } from '@/utils/base';

const slider = ref({
    activeIndex: 0
})

// let currentIndex = ref(0)
function onSwiper(swiper) {
    slider.value = swiper
    console.log(slider.value);
}
// const swiperSlide = ref(useSwiperSlide())
// console.log(Swiper);
const modules = [Navigation]

const images = [
    'history-1.png',
    'history-2.png',
    'history-3.png',
    'history-4.png',
    'history-5.png',
    'history-6.png',
]
const years = [
    2018, 2019, 2020, 2021, 2022, 2023
]

function slidePrev() {
    console.log(slider.value.activeIndex);
    if (slider.value.activeIndex > 0) {
        slider.value.slidePrev()
    }
}

function slideNext() {
    console.log(slider.value.activeIndex);
    if (slider.value.activeIndex < images.length - 1) { 
        slider.value.slideNext() 
    }
}


</script>

<template>
    <div class="history">

        <Swiper :modules="modules" class="swiper" direction="vertical" :loop="true" @swiper="onSwiper">
            <SwiperSlide v-slot="{ isActive }" v-for="(item, index) in images" :key="index">
                <div class="over-content"></div>
                <div class="container">
                    <div class="bg">
                        <img :src="getAssetsImg(item)" alt="">
                    </div>
                </div>
            </SwiperSlide>

            <!-- pagination and navigation -->
            <div class="toolbar">
                <div class="pagination" v-if="slider.activeIndex > 0" @click="slidePrev">
                    <UpOutlined class="icon"></UpOutlined>
                </div>
                <div class="navigation">
                    <ul>
                        <li class="year" @click="slider.slideTo(index)"
                            :class="slider.activeIndex == index ? 'active' : ''" v-for="(y, index) in years"
                            :key="index">{{ y }}</li>
                    </ul>
                </div>
                <div class="pagination" v-if="slider.activeIndex < images.length - 1"
                    @click="slideNext">
                    <DownOutlined class="icon"></DownOutlined>
                </div>
            </div>
        </Swiper>

    </div>
</template>

<style scoped lang="less">
.history {
    height: 100vh;
    width: 100%;
    position: relative;



    .swiper {
        width: 100%;
        height: 100%;
        position: relative;

        .over-content {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 100000;
            background: linear-gradient(359deg, #00010a, #0000000d, #0f0f0f2b, #030303);
        }

        .container {
            width: 100%;
            height: 100%;

            position: relative;

            .bg {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                z-index: 999;

                img {
                    height: 100%;
                }
            }
        }

        .toolbar {
            position: absolute;
            right: 120px;
            top: 0;
            z-index: 999;
            height: 100%;
            width: 100px;
            border-left: 1px solid #ffffffda;
            color: #fff;
            // background-color: #fff;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .pagination {
                cursor: pointer;

                .icon {
                    font-size: 30px;
                }

                
            }

            .navigation {
                ul {
                    .year {
                        color: #cfcfcf;
                        cursor: pointer;
                        font-size: 18px;
                        margin: 35px 0;
                    }

                    .active {
                        color: #fff;
                    }
                }
            }
        }
    }


}
</style>