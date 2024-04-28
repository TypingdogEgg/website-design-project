<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router';
import { getProducts } from '@/api'
import { getAssetsImg } from '@/utils/base'
import Footer from '@/components/Footer.vue';
// import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { HeartOutlined, HeartFilled } from '@ant-design/icons-vue';

const route = useRoute()

const exhibitorData = ref({
//     id: 1,
//     name: '科大讯飞股份有限公司',
//     logoUrl: 'exhibitor.png',
//     introduction: '科大讯飞股份有限公司成立于1999年，是亚太地区知名的智能语音和人工智能上市企业。自成立以来，一直从事智能语音、自然语言理解、计算机视觉等核心技术研究并保持了国际前沿技术水平；积极推动人工智能产品和行业应用落地，致力让机器“能听会说，能理解会思考，用人工智能建设美好世界”。',
//     products: [
//         {
//             id: 1,
//             name: '科大讯飞AI虚拟人交互平台',
//             description: '科大讯飞AI虚拟人交互平台具备多模感知、多维表达、情感贯穿、自主定制四大核心特点，提供媒体、金融、政企、文旅、教育、文娱等多场景的解决方案，致力于为客户提供一站式的虚拟人服务。依托讯飞开放平台产业生态，AI虚拟人交互平台构建了从个体到行业、从应用技术到解决方案的全链路生态，为数字经济的发展提供助力，让虚拟人成为人类的伙伴。',
//             imageUrls: 'p-1.png'
//         },
//         {
//             id: 2,
//             name: 'AIGC内容创作基地——讯飞智作',
//             description: '科大讯飞打造的AIGC内容创作基地——讯飞智作，它是一个虚拟的“AI演播室”，通过简单地输入文稿，选定虚拟主播，即可一键完成音视频内容的输出。平台可为用户提供“AI配音”、“虚拟人视频播报”、“声音定制”、“形象定制”等服务，大大提高了各种场景下音视频内容生产效率。目前，讯飞智作已应用于媒体、金融、政务、文旅、文娱等领域。',
//             imageUrls: 'p-2.png'
//         },
//         {
//             id: 3,
//             name: '羚羊数字工匠',
//             description: '羚羊数字工匠导入企业内部知识库和工业知识库，有效沉淀企业知识。企业可围绕研发、生产、服务、营销等各类场景问题进行提问，企业知识大脑均能提供有效解决方案。',
//             imageUrls: 'p-3.png'
//         },
//     ]
})

onMounted(async () => {
    window.scrollTo({top:0})

    const id = route.query.id
    const res = await getProducts(id)
    exhibitorData.value = res.data

})

// 当前产品id
let activeIndex = ref(0)
// 当前产品数据
let currentProduct = computed(() => {
    console.log(activeIndex.value, currentProduct);
    if (!exhibitorData.value.products) return {}
    return exhibitorData.value.products.filter((item, index) => index == activeIndex.value)[0]
})

let isFocus = ref(false)
let focusList = reactive([])


// 点击关注按钮
function handleFocus() {
    // 未关注
    if (!isFocus) {
        // 先验证是否登陆 查看cookie

        // 未登录就跳转到/login

        // 携带用户id、cookie发请求 添加关注

        // 成功 改值；失败log
        isFocus.value = !isFocus.value
    }else{
        // 取消关注
        // 发取消关注的请求
    }
}

// 先判断是否登陆 若登陆，带展商id和用户id发请求获取focusList，
// 未登录 根据展品数组长度 初始化focusList为false数组
function getFocusList(){

}

</script>

<template>
    <div class="products">
        <div class="exhibitor">
            <div class="ex-container">
                <div class="title">
                    <h1 class="name">{{ exhibitorData.name }}</h1>
                    <div class="logo" :style="`background-image: url(${exhibitorData.logoUrl})`"></div>
                </div>
                <div class="descrip">
                    {{ exhibitorData.introduction }}
                </div>
            </div>
        </div>
        <div class="products-swiper">
            <!-- 大图+介绍 -->
            <div class="show-area">
                <!-- focusList 要用数组数组 -->
                <!--  -->
                <!--  -->
                <div class="focus" @click="handleFocus">
                    <template v-if="!isFocus">
                        <div class="focus-span">
                            <span>关注</span>
                            <HeartOutlined class="icon" />
                        </div>
                    </template>
                    <template v-else>
                        <div class="focus-span">
                            <span style="color: #1d3d97;">已关注</span>
                            <HeartFilled class="icon" style="color: #1d3d97;" />
                        </div>
                    </template>
                </div>
                <!--  -->
                <!--  -->
                <!--  -->
                <div class="exhibit">
                    <div class="img-box">
                        <img :src="currentProduct.imageUrls" alt="">
                    </div>
                </div>
                <div class="description">
                    <div class="title">
                        {{ currentProduct.name }}
                    </div>
                    <div class="content">
                        {{ currentProduct.description }}
                    </div>
                </div>
            </div>
            <!-- 缩略图 -->
            <Swiper class="swiper" :slides-per-view="4">
                <SwiperSlide class="slide" v-for="(p, pIndex) in exhibitorData.products" :key="p.id">
                    <img :src="p.imageUrls" :class="{ 'border': pIndex == activeIndex }" :alt="p.name"
                        @click="activeIndex = pIndex">
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

    display: flex;

    .exhibitor {
        flex: 1;
        background-color: #1d3d97;
        height: 100%;

        .ex-container {
            overflow: auto;
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
                // height: 100%;
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
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 50px;

        .show-area {
            width: 100%;
            height: calc(100% - 120px);

            display: flex;
            position: relative;

            .focus {
                position: absolute;
                right: 0;
                bottom: 0;
                font-size: 20px;
                cursor: pointer;

                div {
                    span {
                        font-size: 15px;
                        margin-right: 3px;
                    }

                }

            }

            .focus:hover {
                // color: #1d3d97;
                transform: scale(1.1);
                transition: all .3s;
            }

            .exhibit {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px 50px;
                background-color: #fff;

                text-align: center;

                .img-box {
                    padding: 100px 50px;
                    border: 1px dotted #adadad;

                    img {
                        width: 100%;
                        // height: 100%;
                    }
                }
            }

            .description {
                flex: 1;
                margin-top: 80px;
                overflow-y: auto;
                margin-bottom: 80px;




                .title {
                    font-size: 36px
                }

                .content {
                    padding: 10px;
                    font-size: 16px;
                    color: #666666;
                    line-height: 28px;
                    margin-top: 20px;
                }

            }
        }

        .swiper {
            padding: 0 50px;
            width: 100%;
            height: 120px;

            .slide {
                width: 175px;
                height: 120px;

                img {
                    width: 175px;
                    height: 120px;
                }

                .border {
                    border: 1px solid #1d3d97
                }
            }
        }
    }
}
</style>