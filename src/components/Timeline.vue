<script setup>
import { ref, computed } from 'vue';
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons-vue';

let offset = ref(0);
let maxOffset = 0;
let minOffset = -3;
let startYear = 2018;  // 修改起始年份为2018

const cards = ref([
    {
        year: 2018,
        title: '《你的孤独，虽败犹荣》',
        passage: '如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。'
    },
    {
        year: 2019,
        title: '《你的孤独，虽败犹荣》',
        passage: '如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。'
    },
    {
        year: 2020,
        title: '《你的孤独，虽败犹荣》',
        passage: '如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。'
    },
    {
        year: 2021,
        title: '《你的孤独，虽败犹荣》',
        passage: '如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。'
    },
    {
        year: 2022,
        title: '《你的孤独，虽败犹荣》',
        passage: '如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。'
    },
    {
        year: 2023,
        title: '《你的孤独，虽败犹荣》',
        passage: '如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。'
    },
    {
        year: 2024,
        title: '《你的孤独，虽败犹荣》',
        passage: '如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。'
    },
]);

let slides = computed(() => {
  let result = [];
  for (let i = -60, year = startYear - 1; i < 420; i += 6) {
    let slide = {
      degree: i,
      year: i % 60 === 0 ? year : null
    };
    if (i % 60 === 0) {
      year++;
    }
    result.push(slide);
  }
  return result;
});

function slideToPrev() {
    offset.value = Math.min(maxOffset, offset.value + 1);
}

function slideToNext() {
    offset.value = Math.max(minOffset, offset.value - 1);
}

let clockRotate = computed(() => {
    return `rotate(${offset.value * 60}deg)`;
});
</script>

<template>
    <div class="timeline">
        <!-- <i class="iconfont icon-arrow-up-bold" id="up-btn" onclick="slideToPrev()"></i> -->
        <!-- <i class="iconfont icon-arrow-down-bold" id="down-btn" onclick="slideToNext()"></i> -->
        <CaretUpFilled @click="slideToPrev()" />
        <CaretDownFilled @click="slideToNext()" />

        <div id="content">
            <div class="card" v-for="(card, index) in cards" :key="index"
                :style="{ transform: `translateY(${offset * 100}%)` }">
                <div class="card-time">
                    {{ card.year }}
                </div>
                <div class="card-title">
                    {{ card.title }}
                </div>
                <div class="card-passage">
                    {{ card.passage }}
                </div>
            </div>
        </div>

        <div id="clock" :style="{ transform: clockRotate }">
            <div id="clock-center"></div>
            <div id="clock-pointer"></div>
            <div id="clock-table">
                <div v-for="(slide, index) in slides" :key="index" class="invisible-table"
                    :style="{ transform: `rotate(${slide.degree}deg)` }">
                    <div v-if="slide.year" class="clock-thick">
                        <span>{{ slide.year }}</span>
                    </div>
                    <div v-else class="clock-scale"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.timeline {
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    background-color: #5053fc;
    overflow: hidden;

    .iconfont {
        width: 80px;
        height: 80px;
        position: absolute;
        left: 27%;
        z-index: 999;
        font: 900 80px '';
        color: #fff;
    }

    #up-btn {
        top: 5%;
    }

    #down-btn {
        bottom: 5%;
    }

    #content {
        width: 30%;
        height: 100%;
        position: absolute;
        left: 15%;
        overflow: hidden;

        .card {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: white;
            transition: transform .8s ease-in-out;

            .card-time {
                font-size: 40px;
                font-weight: 700;
            }

            .card-title {
                font-size: 50px;
                font-weight: 500;
                padding-bottom: 10px;
                border-bottom: 1px solid white;
                margin-bottom: 10px;
            }

            .card-passage {
                font-size: 24px;
                font-weight: 300;
            }

        }
    }





    #clock {
        height: 130%;
        /* 纵横比为1:1 */
        aspect-ratio: 1 / 1;
        position: absolute;
        right: -28%;
        top: -15%;
        border-radius: 50%;
        background-color: white;
        border: #ff9214 30px solid;
    }

    @media(max-width:1000px) {
        #clock {
            right: -90%;
        }
    }

    #clock-table {
        width: 96%;
        height: 96%;
        border-radius: 50%;
        position: absolute;
        top: 2%;
        left: 2%;
        transition: transform .8s ease-in-out;
    }

    .invisible-table {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform-origin: 50% 50%;
        position: absolute;
    }

    .clock-thick {
        width: 6%;
        height: 6px;
        background-color: #5053fc;
        position: absolute;
        top: calc(50% - 3px);
        left: 0px;
    }

    .clock-thick span {
        font-size: 50px;
        position: absolute;
        left: 140%;
        top: calc(50% - 30px);
        color: #5053fc;
    }

    .clock-scale {
        width: 4%;
        height: 2px;
        background-color: #5053fc;
        position: absolute;
        top: calc(50% - .5px);
        left: 0px;
    }

}
</style>