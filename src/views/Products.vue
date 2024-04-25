<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { getProducts } from '@/api'
import { getAssetsImg } from '@/utils/base'
import Footer from '@/components/Footer.vue';
// import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

const route = useRoute()

const exhibitorData = ref({
    id: 1,
    name: '科大讯飞股份有限公司',
    logoUrl: 'exhibitor.png',
    introduction: '科大讯飞股份有限公司成立于1999年，是亚太地区知名的智能语音和人工智能上市企业。自成立以来，一直从事智能语音、自然语言理解、计算机视觉等核心技术研究并保持了国际前沿技术水平；积极推动人工智能产品和行业应用落地，致力让机器“能听会说，能理解会思考，用人工智能建设美好世界”。',
    products: [
        {
            id: 1,
            name: '科大讯飞AI虚拟人交互平台',
            introduction: '科大讯飞AI虚拟人交互平台具备多模感知、多维表达、情感贯穿、自主定制四大核心特点，提供媒体、金融、政企、文旅、教育、文娱等多场景的解决方案，致力于为客户提供一站式的虚拟人服务。依托讯飞开放平台产业生态，AI虚拟人交互平台构建了从个体到行业、从应用技术到解决方案的全链路生态，为数字经济的发展提供助力，让虚拟人成为人类的伙伴。',
            imgUrls: 'p-1.png'
        },
        {
            id: 2,
            name: 'AIGC内容创作基地——讯飞智作',
            introduction: '科大讯飞打造的AIGC内容创作基地——讯飞智作，它是一个虚拟的“AI演播室”，通过简单地输入文稿，选定虚拟主播，即可一键完成音视频内容的输出。平台可为用户提供“AI配音”、“虚拟人视频播报”、“声音定制”、“形象定制”等服务，大大提高了各种场景下音视频内容生产效率。目前，讯飞智作已应用于媒体、金融、政务、文旅、文娱等领域。',
            imgUrls: 'p-2.png'
        },
        {
            id: 3,
            name: '羚羊数字工匠',
            introduction: '羚羊数字工匠导入企业内部知识库和工业知识库，有效沉淀企业知识。企业可围绕研发、生产、服务、营销等各类场景问题进行提问，企业知识大脑均能提供有效解决方案。',
            imgUrls: 'p-3.png'
        },
    ]
})

onMounted(async () => {
    const id = route.query.id
    // const res = await getProducts(id)
    // newsData.value = res.data

})
</script>

<template>
    <div class="products">
        <div class="exhibitor">
            <div class="ex-container">
                <div class="title">
                    <h1 class="name">{{ exhibitorData.name }}</h1>
                    <div class="logo" :style="`background-image: url(${getAssetsImg(exhibitorData.logoUrl)})`"></div>
                </div>
                <div class="descrip">
                    {{ exhibitorData.introduction }}
                </div>
            </div>
        </div>
        <div class="products-swiper">
            <!-- 大图+介绍 -->
            <div class="show-area">
                <div class="exhibit">
                    <img src="" alt="">
                </div>
                <div class="description">
                    <div class="title"></div>
                    <div class="content"></div>
                </div>
            </div>
            <!-- 缩略图 -->
            <Swiper class="swiper" :slides-per-view="3">
                <SwiperSlide class="slide" v-for="p in exhibitorData.products" :key="p.id">
                    <img :src="getAssetsImg(p.imgUrls)" alt="">
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped lang="less">
.products {
    height: 100vh;
    width: 100%;
    padding: 30px;
    padding-top: 100px;
    background-color: #f0f0f0;

    display: flex;

    .exhibitor {
        flex: 1;
        background-color: #1d3d97;
        height: 100%;

        .ex-container {
            width: 100%;
            height: 100%;
            padding: 30px;

            .title {
                display: flex;
                align-items: center;
                h1 {
                    width: 188px;
                    line-height: 30px;
                    display: inline-block;
                    font-size: 28px;
                    color: #fff;
                    font-weight: 700;

                    // margin-right: 20px;
                }

                .logo {
                    width: 120px;
                    height: 80px;
                    background-size: cover;
                }
            }

            .descrip{
                width: 100%;
                height: 100%;
                padding-top: 30px;
                color: #fff;
                font-size: 14px;
                line-height: 1.5rem;
            }
        }
    }

    .products-swiper {
        flex: 3;
        background-color: #fff;

        .swiper{

            width: 80%;
            height: 120px;

            .slide{
                width: 175px;
                height: 120px;

                img{
                    width: 175px;
                    height: 120px;
                }
            }
        }
    }
}
</style>