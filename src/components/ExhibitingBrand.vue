<script setup>
import { ref, computed, onMounted } from 'vue';
import { getAssetsImg } from '@/utils/base';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { getExhibitors } from '@/api';
// const brandsData = [
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
//     {
//         id: 1,
//         name: 'ORACLE',
//         imgUrl: 'logo-demo.png'
//     },
// ]

const brandsData = ref([])

onMounted(async () => {
    const res = await getExhibitors()
    brandsData.value = res.data || []
})

const scrollData1 = computed(() => {
    return brandsData.value.filter((data, index, self) => index < self.length / 2)
})
const scrollData2 = computed(() => {
    return brandsData.value.filter((data, index, self) => index >= self.length / 2)
})

function goProductPage(){

}

</script>

<template>
    <div class="exhibiting-brand">
        <div class="scroll-window">
            <div class="title">
                参展品牌
            </div>
            <div class="scroll-row">
                <Swiper :observer="true" :observe-parents="true" :autoplay="{
                    delay: 0,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                    reverseDirection: true
                }" :loop="true" :slides-per-view="4" :free-mode="true" :speed="3000">
                    <SwiperSlide class="slide" v-for="(item, index) in scrollData1" :key="index">
                        <img @click="goProductPage(item.id)" class="logo" :src="item.logoUrl" :alt="item.name">
                        <p>{{ item.name }}</p>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="scroll-row">
                <Swiper :observer="true" :observe-parents="true" :autoplay="{
                    delay: 0,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                    reverseDirection: true
                }" :loop="true" :slides-per-view="4" :free-mode="true" :speed="3000">
                    <SwiperSlide class="slide" v-for="(item, index) in scrollData2" :key="index">
                        <img class="logo" :src="item.logoUrl" alt="item.name">
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.exhibiting-brand {
    height: 500px;
    background-color: #000000;
    padding: 20px;
    color: #fff;

    display: flex;
    justify-content: center;

    .scroll-window {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .title {
            flex: 2;
            padding-top: 30px;
            font-weight: 700;
            font-size: 36px;
            text-align: center;
        }

        .scroll-row {
            flex: 3;
            display: flex;
            justify-content: space-around;

            :deep(.swiper-wrapper) {
                -webkit-transition-timing-function: linear !important;
                -o-transition-timing-function: linear !important;
                transition-timing-function: linear !important;
            }

            .slide {
                width: 200px;

                .logo {
                    margin: 21px;
                    width: 150px;
                    height: 100px;
                }
            }
        }
    }
}
</style>