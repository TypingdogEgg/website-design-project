<script setup>

</script>

<template>
    <div class="introduction">
        <div class="center">
            <div class="main">
                <div class="title">什么是智博会？</div>
                <p class="intro">
                    中国国际智能产业博览会（简称"智博会"），是中国最大的智能产业综合性展览会，由工业和信息化部、国家发展改革委、科技部、国家网信办、中国科协、新加坡贸工部和重庆市人民政府共同主办。
                </p>
                <p class="intro">
                    自2018年永久落户重庆以来，至今已连续成功举办五届。习近平总书记三次向智博会致贺信，体现了党中央、国务院对智博会的深情厚爱。在过去的5年里，智博会一直致力于推动数字经济和智能产业的发展，不断提升办会质效，吸引了国内外越来越多的关注和参与。
                </p>
                <p class="intro">
                    2023智博会拟于2023年9月4日至6日在重庆国际博览中心举办。本届大会将按照“专业化、国际化、市场化”的办会方向，以“国际科技合作盛会、国际产业合作盛会、国际经贸合作盛会”为办会目标，重点聚焦**“智能网联新能源汽车”和数字中国**等年度主旨。
                </p>
            </div>
            <div class="video">
                <video controls muted loop autoplay="autoplay" poster="@/assets/default.png">
                    <!-- <source src="@/assets/smartchina.mp4" type="video/mp4"> -->
                </video>
            </div>
        </div>
    </div>
</template>

<style scoped>
.introduction {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 520px;
    background-color: #102284;

    .center {
        display: flex;
        width: 90%;
        justify-content: space-between;

        .main {
            width: 600px;

            .title {
                margin-bottom: 50px;
                font-size: 36px;
                font-weight: 700;
            }

            p {
                color: #f1f1f1;
                margin-bottom: 20px;
            }
        }

        .video {
            margin-top: 50px;
            width: 600px;
            height: 100%;

            video{
                width: 100%;
            }
        }
    }
}
</style>