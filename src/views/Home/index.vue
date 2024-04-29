<script setup>
// import Carousel from '@/components/Carousel.vue'
import HomeSlide from '@/components/HomeSlide.vue'
import ShowData from '@/components/ShowData.vue';
import Timeline from '@/components/Timeline.vue';
import Introduction from '@/components/Introduction.vue'
import News from '@/components/News.vue'
import ExhibitingBrand from '@/components/ExhibitingBrand.vue'
import ExhibitingPerson from '@/components/ExhibitingPerson.vue'
import Footer from '@/components/Footer.vue'
import History from '@/components/History.vue'
import { BackTop } from 'ant-design-vue';
import { UpOutlined } from '@ant-design/icons-vue';


</script>

<template>
    <div class="home">
        <HomeSlide></HomeSlide>
        <ShowData></ShowData>
        <!-- <Introduction></Introduction> -->
        <!-- <Timeline></Timeline> -->
        <News></News>
        <div class="transition1">
            <div class="bg"><img src="../../assets/images/bg.png" alt=""></div>
        </div>
        <ExhibitingBrand></ExhibitingBrand>
        <div class="transition2">
            <!-- <div class="bg"><img src="../../assets/images/bg.png" alt=""></div> -->
        </div>
        <ExhibitingPerson></ExhibitingPerson>

        <div class="transition3">
            <div class="title">
                回望历史
                <p>跟随重庆智博会一起回顾六年来的点点滴滴</p>
            </div>
        </div>
        <History></History>
        <Footer></Footer>
        <BackTop class="float-button"></BackTop>
    </div>
</template>

<style scoped lang="less">
.home {
    overflow: hidden;
    // position: absolute;
    width: 100%;
    // left: 0;
    // top: 0;
    // z-index: 2;

    .float-button {
        z-index: 10000;
    }

    .float-button:hover {
        background-color: rgb(216, 216, 216);
    }

    .transition1{
        position: relative;
        // z-index: 1;
        height: 100px;
        // background-image: linear-gradient(to top,#fff,#000000);
        .bg{

            width: 200px;
            position: absolute;
            z-index: 10;
            left: -45px;
            top: -200px;
        }
    }
    .transition2{
        position: relative;
        // z-index: 1;
        height: 100px;
        background-color: #000;
        // background-image: linear-gradient(to top,#fff,#000000);
        .bg{
            width: 200px;
            position: absolute;
            z-index: 10;
            right: -157px;
            top: -140px;

            img{
                // scale: 1.8;
                rotate: -10deg;
            }
        }
    }

    .transition3{
        height: 200px;
        background-color: #000;

        .title{
            margin-left: 50px;
            padding-top: 50px;
            font-size: 30px;
            color: #fff;
            

            p{
                margin-top: 10px;
                font-size: 16px;
                color: #fff;
            }
        }
    }
}
</style>