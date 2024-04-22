<script setup>
import { getAssetsImg } from '@/utils/base.js'
import { Button } from 'ant-design-vue';
import {ref , onMounted} from 'vue'
import { getNewsList } from '@/api/index.js'
import { useRouter } from 'vue-router';

const router = useRouter()
const newsData = ref([])
// onMounted(async()=>{
//     // 发送请求获取新闻数据
//     const res = await getNewsList()
//     newsData.value = res.data
// })

// 以params参数传递给细节组件
function goNewsDetail(id){
    router.push({
        path:'/newsdetail',
        query:{
            id
        }
    })
}

</script>

<template>
    <div class="news">
        <div class="bg">
            <img src="../assets/images/blurb.png" alt="">
        </div>
        <div class="container">
            <div class="express">
                <div class="title">最新新闻资讯</div>
                <div class="words">资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯</div>
            </div>
            <div class="news-events">
                <div class="news-item" v-for="item in newsData" :key="item.id">
                    <div class="news-bg" :style="`background-image: url(${item.imgUrl});`">
                    </div>
                    <div class="content">
                        <div class="content-title">{{ item.title }}</div>
                        <br>
                        <br>
                        <div class="descrip">{{ item.descrip }}</div>
                        <br>
                        <!-- <div class="to-link">点击阅读详情 -></div> -->
                        <div class="btn">
                            <Button @click="goNewsDetail(item.id)">查看更多</Button>
                        </div>
                    </div>
                    <!-- </a> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.news {
    height: 100vh;
    width: 100%;
    padding: 20px;
    background-color: #000;
    display: flex;
    justify-content: center;
    // align-items: center;
    overflow: hidden;
    position: relative;

    .bg {
            position: absolute;
            // z-index: 999;
            width: 100%;
            height: 100%;
            // background: linear-gradient(45deg, rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0));
            animation: blurb 8s infinite ease;
            -webkit-animation: blurb 8s infinite ease;
        }

    .container {
        display: flex;
        flex-direction: column;
        // align-items: center;
        width: 90%;

        .express {
            flex: 1;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
            color: #fff;

            .title {
                font-size: 30px;
                font-weight: 700;
                margin-bottom: 10px;
            }

            .words {
                font-size: 14px;
            }
        }

        .news-events {
            flex: 10;
            display: flex;
            justify-content: space-between;
            // align-items: stretch;
            align-items: center; // 1
            flex-wrap: wrap;

            .news-item {
                color: #fff;
                width: 18%;
                // height: 40%;
                height: 60%; //1
                // flex: 1;
                position: relative;
                overflow: hidden;

                .news-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-position: center;
                        background-size: cover;
                }

                .news-bg::before {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(177deg, #00010a00, #00000000, #0f0f0fb5, #030303);
                    content: '';
                }

                .content {
                    position: absolute;
                    top: 322px;
                    font-size: 14px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    width: 100%;
                    padding: 10px;
                    transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
                    z-index: 1;
                    -webkit-transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);

                    .content-title{

                    }

                    .descrip{

                    }
                    .btn{
                        width: 100%;
                        height: 10px;
                        text-align: center;
                        button {
                            padding: 5px;
                                text-align: center;
                                color: #fff;
                                background-color: #3c6df4;
                                border: none;
                            }
                            
                            button:hover{
                                background-color: #335dce;
                            }
                    }
                }
            }

            .news-item:hover .content {
                transform: translateY(calc(-80%));
                -webkit-transform: translateY(calc(-90%));
            }
            .news-item:hover{
                border: 1px solid #fff;
                border-radius: 15px 0 15px 15px;
            }
            .news-item:hover .news-bg::before {
                background-color: #000000dd;
                transition: ease-in-out;
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