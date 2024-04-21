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
        <ExhibitingBrand></ExhibitingBrand>
        <ExhibitingPerson></ExhibitingPerson>

        <!-- <ExhibitingBrand></ExhibitingBrand> -->
        <History></History>
        <Footer></Footer>
        <BackTop class="float-button" ></BackTop>
    </div>
</template>

<style scoped lang="less">
.home {
    // position: absolute;
    width: 100%;
    // left: 0;
    // top: 0;
    // z-index: 2;

    .float-button{
        z-index: 10000;
    }
    .float-button:hover{
        background-color: rgb(216, 216, 216);
    }
}
</style>