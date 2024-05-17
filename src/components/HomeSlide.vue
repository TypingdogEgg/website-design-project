<script setup>
import { Button } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
const { userData } = storeToRefs(userStore)

const router = useRouter();

function goDown(){
    let offsetHeight = document.querySelectorAll('.news')[0].offsetTop
    window.scrollTo({
        top: offsetHeight,
        left: 0,
        behavior: 'smooth'
    })
}

</script>

<template>
    <div class="home-slide">
        <div class="video-bg">
            <video controls muted loop autoplay="autoplay" poster="@/assets/default.png">
                <source src="@/assets/home-video.mp4" type="video/mp4">
            </video>
        </div>
        <div class="over-content">
            <div class="container">
                <div class="tagline">
                    <h2 class="title">智博会</h2>
                    <h3 class="title-en" style="margin-left: 10px;">Smart China Expo</h3>
                    <h1 class="topic">智能创新・共赢未来</h1>
                    <p style="margin-left: 20px;">china's bold future is here</p>
                </div>
                <div class="bottom-text">
                    <Button v-if="userData==null" class="button" @click="router.push('/login')">现在注册</Button>
                    <Button v-else class="button" @click="goDown">
                        进入智博会
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.home-slide {
    font-family: 'title-font';
    position: relative;
    height: 100vh;
    background-color: #658cf7;

    .video-bg {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;

        video {
            // width: 100%;
            height: 100%;
        }
    }

    .over-content {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 100;
        top: 0;
        left: 0;
        background: linear-gradient(359deg, #00010a, #0000005e, #0f0f0f96, #030303);

        .container {
            padding-top: 350px;
            margin: 0 auto;
            width: 80%;
            height: 700px;

            .tagline {
                width: 50%;
                border-bottom: 1px solid #fff;
                padding-bottom: 25px;

                .title {
                    font-family: 'title-font';
                    font-size: 90px;
                    // font-weight: 700;
                    color: #fff;
                }

                .title-en {
                    font-family: 'Helvetica';

                    font-style: italic;
                    font-size: 25px;
                    color: #fff;
                }

                .topic {
                    font-family: 'title-font';

                    font-size: 70px;
                    color: #fff;
                }

                p {
                    font-family: 'Helvetica';

                    margin-left: 7px;
                    margin-top: 10px;
                    font-size: 16px;
                    color: #fff;
                    letter-spacing: 1px;
                }
            }

            .bottom-text {
                .button {
                    margin-top: 20px;
                    width: 100px;
                    height: 30px;
                    border-radius: 25px;
                    color: #fff;
                    border: none;
                    background-color: #3c6df4;
                }
            }
        }
    }
}
</style>