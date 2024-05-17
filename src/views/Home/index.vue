<script setup>
import HomeSlide from '@/components/HomeSlide.vue'
import ShowData from '@/components/ShowData.vue';
import News from '@/components/News.vue'
import ExhibitingBrand from '@/components/ExhibitingBrand.vue'
import ExhibitingPerson from '@/components/ExhibitingPerson.vue'
import Footer from '@/components/Footer.vue'
import History from '@/components/History.vue'
import Comments from '@/components/Comments.vue';
import Qaa from '@/components/Qaa.vue'
import { BackTop } from 'ant-design-vue';
</script>

<template>
    <div class="home">
        <HomeSlide></HomeSlide>
        <ShowData></ShowData>
        <News></News>
        <ExhibitingBrand></ExhibitingBrand>
        <ExhibitingPerson></ExhibitingPerson>
        <div class="transition3">
            <div class="title">
                往届回顾
                <p>Follow the Smart China Expo together to review the dribs of past
                </p>
            </div>
        </div>
        <History></History>
        <Comments></Comments>
        <Qaa></Qaa>
        <Footer></Footer>
        <BackTop class="float-button"></BackTop>
    </div>
</template>

<style scoped lang="less">
.home {
    overflow: hidden;
    width: 100%;

    .float-button {
        z-index: 10000;
    }

    .float-button:hover {
        background-color: rgb(216, 216, 216);
    }

    .transition1 {
        position: relative;
        // z-index: 1;
        height: 80px;

        // background-image: linear-gradient(to top,#fff,#000000);
        .bg {

            width: 200px;
            position: absolute;
            z-index: 10;
            left: -45px;
            top: -200px;

            img {
                scale: 0.9;
            }
        }
    }

    .transition2 {
        position: relative;
        // z-index: 1;
        height: 100px;
        background-color: #000;

        // background-image: linear-gradient(to top,#fff,#000000);
        .bg {
            width: 200px;
            position: absolute;
            z-index: 10;
            right: -157px;
            top: -140px;

            img {
                // scale: 1.8;
                rotate: -10deg;
            }
        }
    }

    .transition3 {
        height: 200px;
        background-color: #000;

        .title {
            text-align: end;
            margin-right: 50px;
            padding-top: 50px;
            font-size: 30px;
            color: #fff;


            p {
                margin-top: 5px;
                font-size: 20px;
                color: #fff;
            }
        }
    }
}
</style>