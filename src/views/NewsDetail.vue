<script setup>
import Footer from '@/components/Footer.vue'
import { useRoute } from "vue-router"
import { ref,onMounted,computed } from 'vue';
import { getNews } from '@/api/index';
const route = useRoute()

const newsData = ref([])
const contentList = ref([])
onMounted(async() => {
    window.scrollTo({ top: 0 })

    const id = route.query.id
    const res = await getNews(id)
    newsData.value = res.data
    contentList.value = res.data.content.split('\n').map(item=>item.trim())
})

const contents = computed(()=>{
    return contentList.value.filter((i,index)=>index>3)
})


</script>

<template>
    <div class="news-detail">
        <div class="context">
            <div class="title">{{ newsData.title }}</div>
            <div class="date">{{ newsData.date }} &nbsp;&nbsp; 来源:{{ newsData.from }}</div>

            <div class="content">
                <p>{{ contentList[0] }}</p>
                <p>{{ contentList[1] }}</p>
                <p>{{ contentList[2] }}</p>
                <p>{{ contentList[3] }}</p>
                <div class="img">
                    <img :src="newsData.imgUrl" alt="">
                </div>
                <p v-for="(item, index) in contentList" :key="index">{{ item }} <br></p>
            </div>

        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped lang="less">
.news-detail{
    padding-top: 80px;
    position: relative;
    background-color: #f2f2f2;

    .context{
        margin: 0 auto;
        padding: 0 120px;
        width: 80%;
        background-color: #fff;

        .title{
            text-align: center;
            font-size: 30px;
            font-weight: 700;
            padding: 30px;
            margin-bottom: 10px;
        }

        .date{
            text-align: end;
            margin-bottom: 30px;
        }
        .content{
            padding-bottom: 50px;
            p{
                text-indent: 2rem;
            }

            img {
                    // margin-top: 30px
                    float: right;
                    width: 500px;
                    padding-left: 10px;
                    padding-bottom: 10px;
                }
        }
    }

}
</style>