<script setup>
import Footer from '@/components/Footer.vue'
import { useRoute } from "vue-router"
import { ref,onMounted } from 'vue';
import { getNews } from '@/api/index';
const route = useRoute()

const newsData = ref([])
const contentList = ref([])
onMounted(async() => {
    const id = route.query.id
    const res = await getNews(id)
    newsData.value = res.data
    contentList.value = res.data.content.split('\n').map(item=>item.trim())
})

</script>

<template>
    <div class="news-detail">
        <div class="title">{{ newsData.title }}</div>
        <div class="date">{{ newsData.date }}</div>
        <div class="content">
            <p v-for="(item,index) in contentList" :key="index">{{ item }} <br></p>
        </div>
        <div class="img">
            <img :src="newsData.imgUrl" alt="">
        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped lang="less">
.news-detail{
    padding-top: 100px;
    position: relative;

}
</style>