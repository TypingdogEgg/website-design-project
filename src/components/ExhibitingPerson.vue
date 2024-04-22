<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';
import 'swiper/css';
import { getGuests } from '@/api';
import { ref, onMounted } from 'vue';
// const guestsData = [
//     {
//         id: 1,
//         name: '陈思琪',
//         imgUrl: 'guest-demo.png',
//         descrip: '很牛逼的一个人'
//     },
//     {
//         id: 1,
//         name: '陈思琪',
//         imgUrl: 'guest-demo.png',
//         descrip: '很牛逼的一个人'
//     },
//     {
//         id: 1,
//         name: '陈思琪',
//         imgUrl: 'guest-demo.png',
//         descrip: '很牛逼的一个人'
//     },
//     {
//         id: 1,
//         name: '陈思琪',
//         imgUrl: 'guest-demo.png',
//         descrip: '很牛逼的一个人'
//     }, {
//         id: 1,
//         name: '陈思琪',
//         imgUrl: 'guest-demo.png',
//         descrip: '很牛逼的一个人'
//     }, {
//         id: 1,
//         name: '陈思琪',
//         imgUrl: 'guest-demo.png',
//         descrip: '很牛逼的一个人'
//     }, {
//         id: 1,
//         name: '陈思琪',
//         imgUrl: 'guest-demo.png',
//         descrip: '很牛逼的一个人'
//     }, {
//         id: 1,
//         name: '陈思琪',
//         imgUrl: 'guest-demo.png',
//         descrip: '很牛逼的一个人'
//     }, {
//         id: 1,
//         name: '陈思琪',
//         imgUrl: 'guest-demo.png',
//         descrip: '很牛逼的一个人'
//     }, {
//         id: 1,
//         name: '陈思琪',
//         imgUrl: 'guest-demo.png',
//         descrip: '很牛逼的一个人'
//     },
// ]
const guestsData = ref([])
onMounted(async () => {
    const res = await getGuests()
    guestsData.value = res.data
})

const slider = ref({
    activeIndex: 0
})

// let currentIndex = ref(0)
function onSwiper(swiper) {
    slider.value = swiper
}

function slidePrev() {
    slider.value.slidePrev()
}

function slideNext() {
    slider.value.slideNext()
}
</script>

<template>
    <div class="exhibiting-person">
        <div class="bg">
            <img src="../assets/images/blurb.png" alt="">
        </div>
        <div class="scroll-window">
            <div class="title">
                参展专家
                <p>Leading and Advancing China's Tech Landscape</p>
            </div>
            <div class="scroll-row">
                <Swiper class="swiper" :slides-per-view="5" :loop="true" @swiper="onSwiper" :speed="1000"
                    :autoplay="{ delay: 2000 }">
                    <SwiperSlide class="slide" v-for="(item, index) in guestsData" :key="index">
                        <div class="main">
                            <div class="content">
                                <img class="image" :src="item.imgUrl" :alt="item.name">
                            </div>
                            <div class="words">
                                <p class="name">{{ item.name }}</p>
                                <p class="descrip">{{ item.descrip }}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div class="prev" @click="slidePrev">
            <LeftOutlined class="icon"></LeftOutlined>
        </div>
        <div class="next" @click="slideNext">
            <RightOutlined class="icon"></RightOutlined>
        </div>
    </div>
</template>

<style scoped lang="less">
.exhibiting-person {
    height: 100vh;
    background-color: #000000;
    padding: 20px;
    position: relative;
    overflow: hidden;

    .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        // background: linear-gradient(45deg, rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0));
        animation: blurb 8s infinite ease;
        -webkit-animation: blurb 8s infinite ease;
    }

    .prev {
        font-size: 50px;
        color: #fff;
        z-index: 10;
        position: absolute;
        left: 20px;
        top: 50%;
    }

    .next {
        font-size: 50px;
        color: #fff;
        z-index: 10;
        position: absolute;
        right: 10px;
        top: 50%;
    }

    .scroll-window {
        width: 100%;
        display: flex;
        flex-direction: column;
        // align-items: center;

        .title {
            flex: 1;

            font-size: 36px;
            // font-weight: 700;
            color: #fff;

            margin-left: 30px;

            p {
                font-size: 22px;
                color: #fff;
            }
        }

        .scroll-row {
            padding-top: 150px;
            flex: 3;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;


            .main {
                width: 240px;
                height: 375px;
                background-color: #000;
                transition: all .4s ease-in-out;
                -webkit-transition: all .4s ease-in-out;

                .content {
                    width: 100%;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    background-color: #000;
                }

                .words {
                    background-color: #000;
                    width: 100%;

                    p {
                        color: #fff;
                    }

                    .name {
                        font-size: 21px;
                        margin-bottom: 5px;
                        margin-top: 5px;
                    }

                    .descrip {
                        font-size: 14px;

                    }
                }

                .content::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(181deg, #0c0c0c33, #14141400, #00000021, #000000);
                }
            }

            .main:hover {
                scale: 1.1;
                // border-radius: 10% 0 10% 10%; // 没效果
                /* 放大1.1倍 */
            }
        }



    }
}

@keyframes blurb {
    0% {
        top: -10%;
        right: -40%;
        transform: scale(1.2);
        width: 100%;
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -ms-transform: scale(1.2);
        -o-transform: scale(1.2);
    }

    25% {
        top: -15%;
        right: 20%;
        transform: scale(1.2);
        width: 80%;
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -ms-transform: scale(1.2);
        -o-transform: scale(1.2);
    }

    55% {
        top: -20%;
        right: 60%;
        transform: scale(1.2);
        width: 100%;
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -ms-transform: scale(1.2);
        -o-transform: scale(1.2);
    }

    85% {
        top: -15%;
        right: 20%;
        transform: scale(1.2);
        width: 80%;
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -ms-transform: scale(1.2);
        -o-transform: scale(1.2);
    }

    100% {
        top: -10%;
        right: -30%;
        transform: scale(1.2);
        width: 100%;
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -ms-transform: scale(1.2);
        -o-transform: scale(1.2);
    }
}
</style>