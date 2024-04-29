<script setup>
import { ref, computed, onMounted } from 'vue';
import { getAssetsImg } from '@/utils/base';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { getExhibitors } from '@/api';
import { useRouter } from 'vue-router';
const router = useRouter()
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

function goProductPage(id){
    console.log('click!');
    router.push({
        path:'/products',
        query:{
            id
        }
    })
}

</script>

<template>
    <div class="exhibiting-brand">
        <div class="scroll-window">
            <div class="express">
                <div class="title">
                    展品介绍
                </div>
                <div class="descrip">
                    以下是参展品牌，点击对应logo即可查看参展产品详情
                </div>
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
                        <p class="name">{{ item.name }}</p>
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
                        <img @click="goProductPage(item.id)" class="logo" :src="item.logoUrl" alt="item.name">
                        <p class="name">{{ item.name }}</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.exhibiting-brand {
    height: 100vh;
    background-color: #ffffff;
    padding: 20px;
    color: #0b4d99;

    display: flex;
    justify-content: center;

    .scroll-window {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .express{
            flex: 2;
            margin-top: 60px;
            text-align: center;

            .title {
                    font-weight: 700;
                    font-size: 30px;
                }

                .descrip{
                    margin-top: 20px;
                    font-size: 16px;
                }
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
                    padding: 5px;
                    width: 150px;
                    height: 100px;
                }

                .name{
                    font-size: 14px;
                    margin-left: 0px;
                    // text-align: center;
                }
            }
        }
    }
}
</style>