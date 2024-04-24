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

    'history-2.png',
    'history-3.png',
    'history-4.png',
    'history-5.png',
    'history-6.png',
]
const years = [
    2018, 2019, 2020, 2021, 2022, 2023
]

const historyData = [
    {
        id: 1,
        year: 2018,
        imgUrl: 'history-1.png',
        name: '智能科技 塑造未来',
        descrip: '首届智博会在重庆盛大开幕，聚焦智能科技与未来生活的深度融合，开启智能产业发展新篇章。',
        url: 'https://www.smartchina-expo.cn/zbh/wjhg/index.html'
    },
    {
        id: 2,
        year: 2019,
        imgUrl: 'history-2.png',
        name: '智能化经济 添彩生活',
        descrip: '以智能化为核心，探讨智能技术赋能经济发展与生活改善，引领全球智能产业创新潮流。',
        url: 'https://www.smartchina-expo.cn/zbh/wjhg/index.html'
    },
    {
        id: 3,
        year: 2020,
        imgUrl: 'history-3.png',
        name: '智能新生态 构建未来',
        descrip: '本届智博会聚焦智能新生态构建，展示智能科技在各领域的广泛应用，推动智能产业持续发展。',
        url: 'https://www.smartchina-expo.cn/zbh/wjhg/index.html'
    },
    {
        id: 4,
        year: 2021,
        imgUrl: 'history-4.png',
        name: '智能科技 塑造未来',
        descrip: '以智能创新为引擎，展示前沿科技成果，推动智能产业与实体经济深度融合，引领未来发展。',
        url: 'https://www.smartchina-expo.cn/zbh/wjhg/index.html'
    },
    {
        id: 5,
        year: 2022,
        imgUrl: 'history-5.png',
        name: '智能创新 驱动未来',
        descrip: '聚焦智能科技最新成果，探讨智能技术在各领域的应用与创新，为未来智能生活点亮希望之光。',
        url: 'https://www.smartchina-expo.cn/zbh/wjhg/index.html'
    },
    {
        id: 5,
        year: 2023,
        imgUrl: 'history-6.png',
        name: '智能创新 共赢未来',
        descrip: '以智能融合为主题，展示智能科技与各领域的深度结合，共同探索未来智能产业发展新路径。',
        url: 'https://www.smartchina-expo.cn/zbh/wjhg/index.html'
    },
]

function slidePrev() {
    console.log(slider.value.activeIndex);
    // if (slider.value.activeIndex > 0) {
        slider.value.slidePrev()
    // }
}

function slideNext() {
    console.log(slider.value.activeIndex);
    // if (slider.value.activeIndex < images.length - 1) {
        slider.value.slideNext()
    // }
}


function transitionStart(){
    const nowContent = document.querySelectorAll('.content')[slider.value.activeIndex]
    console.log(nowContent);
    nowContent.classList.add('animate__rotateOut')
    nowContent.classList.remove('animate__rotateIn')

}

function transitionEnd(){
    const nowContent = document.querySelectorAll('.content')[slider.value.activeIndex]
    console.log(nowContent);
    nowContent.classList.add('animate__rotateIn')
    nowContent.classList.remove('animate__rotateOut')

}

</script>

<template>
    <div class="history">

        <Swiper :modules="modules" class="swiper" direction="vertical" :speed="800" :rewind="true" @swiper="onSwiper" 
            @slide-change-transition-start="transitionStart" @slide-change-transition-end="transitionEnd">
            <SwiperSlide v-for="item in historyData" :key="item.id">
                <div class="over-content"></div>
                <div class="container">
                    <div class="bg" :style="`background-image: url(${getAssetsImg(item.imgUrl)});`">
                    </div>
                </div>
                <div class="content animate__animated">
                    <div class="title">
                        {{ item.name }}
                        <br>
                        <span>{{ item.year }}</span>
                    </div>
                    <div class="descrip">{{ item.descrip }}</div>
                </div>
            </SwiperSlide>

            <!-- pagination and navigation -->
            <div class="toolbar">
                <div class="pagination" @click="slidePrev">
                <!-- <div class="pagination" v-if="slider.activeIndex > 0" @click="slidePrev"> -->
                    <UpOutlined class="icon"></UpOutlined>
                </div>
                <div class="navigation">
                    <ul>
                        <li class="year" @click="slider.slideTo(index)"
                            :class="slider.activeIndex == index ? 'active' : ''" v-for="(y, index) in years"
                            :key="index">{{ y }}</li>
                    </ul>
                </div>
                <!-- <div class="pagination" v-if="slider.activeIndex < images.length - 1" @click="slideNext"> -->
                <div class="pagination" @click="slideNext">
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
            z-index: 10000;
            background: linear-gradient(to left, #00010a, #0000000d, #0f0f0f00, #03030300);
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
                background-size: cover;
            }
        }

        .content {
            width: 600px;
            height: 200px;
            position: absolute;
            right: 350px;
            top: 300px;
            z-index: 10000;
            animation: move 0.8s;

            .title {
                color: #fff;
                font-size: 40px;
                margin-bottom: 30px;
                span {
                    font-size: 34px;
                    color: #fff;
                }
            }

            .descrip {
                font-size: 24px;
                color: #fff;
            }
        }

        @keyframes move {
            0%{
                transform: translateY(-200px);
            }

            100%{
                transform: translateY(0);
            }
        }

        .toolbar {
            position: absolute;
            right: 200px;
            top: 0;
            z-index: 999;
            height: 100%;
            width: 100px;
            border-left: 1px solid #ffffff76;
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