<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { SendOutlined } from '@ant-design/icons-vue'

const blocks = ref([
    {
        isHidden: true,
        title: 'Title of section 1',
        descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rer',
        path: 'ab',
        year: '2018',
    },
    {
        isHidden: true,
        title: 'Title of section 1',
        descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rer',
        path: 'ab',
        year: '2018',
    },
    {
        isHidden: true,
        title: 'Title of section 1',
        descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rer',
        path: 'ab',
        year: '2018',
    },
    {
        isHidden: true,
        title: 'Title of section 1',
        descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rer',
        path: 'ab',
        year: '2018',
    },
    {
        isHidden: true,
        title: 'Title of section 1',
        descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rer',
        path: 'ab',
        year: '2018',
    },
    {
        isHidden: true,
        title: 'Title of section 1',
        descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rer',
        path: 'ab',
        year: '2018',
    },
    {
        isHidden: true,
        title: 'Title of section 1',
        descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rer',
        path: 'ab',
        year: '2018',
    },
    // Add more blocks as needed
]);
let timeline = ref(null)
let blockRefs = ref(null);
// let timer = null;

window.addEventListener('scroll', () => {
    // if (blockRefs) {
    //     console.log('window.scrollY', window.scrollY);
    //     console.log('window.innerHeight', window.innerHeight);
    //     blockRefs.value.forEach((i) => {
    //         console.log('blockRefs.value', i.offsetTop);
    //     })
    //     blocks.value = blocks.value.map((block, i) => {
    //         if (block.isHidden && window.scrollY + window.innerHeight * 0.75 > blockRefs.value[i].offsetTop) {
    //             block.isHidden = false;
    //         }
    //         return block;
    //     });
    // }
    handleScroll()
});
function handleScroll() {
    if (blockRefs) {
        console.log(timeline.value.scrollTop);
        // console.log('window.scrollY', window.scrollY);
        // console.log('window.innerHeight', window.innerHeight);
        // console.log('blockRefs.value', blockRefs.value);

        blocks.value = blocks.value.map((block, i) => {
            if (block.isHidden && timeline.value.scrollTop + timeline.value.offsetHeight > blockRefs.value[i].offsetTop) {
                block.isHidden = false;
            }
            return block;
        });
    }
}

</script>

<template>
    <div class="timeline">
        <div class="scroll-bar" @scroll="handleScroll" ref="timeline">
            <section id="cd-timeline" class="cd-container">
                <div class="cd-timeline-block" ref="blockRefs" v-for="(block, index) in blocks" :key="index"
                    :class="block.isHidden ? 'is-hidden' : 'bounce-in'">
                    <div class="cd-timeline-img cd-picture">
                        <SendOutlined class="img" />
                    </div>

                    <div class="cd-timeline-content" :class="block.isHidden ? 'is-hidden' : 'bounce-in'">
                        <h2>{{ block.title }}</h2>
                        <p>{{ block.descrip }}</p>
                        <router-link :to="block.path" class="cd-read-more">Read more</router-link>
                        <span class="cd-date">{{ block.year }}</span>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped lang="less">
.timeline {
    font-size: 100%;
    font-family: "Droid Serif", serif;
    color: #7f8c97;
    background-color: #e9f0f5;

}

a {
    color: #acb7c0;
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
}

img {
    max-width: 100%;
}

h1,
h2 {
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
}

.scroll-bar {
    overflow-y: scroll;
    height: 520px;
}

.scroll-bar::-webkit-scrollbar {
    display: none;
}

.cd-container {
    width: 90%;
    max-width: 1170px;

    margin: 0 auto;
    /* background-color: #f5f5f5; */
}


.cd-container::after {
    /* clearfix */
    content: "";
    display: table;
    clear: both;
}

#cd-timeline {
    position: relative;
    padding: 2em 0;
    margin-top: 2em;
    margin-bottom: 2em;
}

#cd-timeline::before {
    content: "";
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 4px;
    background: #d7e4ed;
}

@media only screen and (min-width: 1170px) {
    #cd-timeline {
        /*margin-top: 3em;
        margin-bottom: 3em;*/
    }

    #cd-timeline::before {
        left: 50%;
        margin-left: -2px;
    }
}

.cd-timeline-block {
    position: relative;
    margin: 2em 0;
}

.cd-timeline-block::after {
    clear: both;
    content: "";
    display: table;
}

.cd-timeline-block:first-child {
    margin-top: 0;
}

.cd-timeline-block:last-child {
    margin-bottom: 0;
}

@media only screen and (min-width: 1170px) {
    .cd-timeline-block {
        margin: 4em 0;
    }

    .cd-timeline-block:first-child {
        margin-top: 0;
    }

    .cd-timeline-block:last-child {
        margin-bottom: 0;
    }
}

.cd-timeline-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /*     box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05); */
}

.cd-timeline-img .img {
    display: block;
    width: 24px;
    height: 24px;
    position: relative;
    left: 50%;
    top: 50%;
    margin-left: -12px;
    margin-top: -12px;
}

.cd-timeline-img.cd-picture {
    background: #75ce66;
}

.cd-timeline-img.cd-movie {
    background: #c03b44;
}

.cd-timeline-img.cd-location {
    background: #f0ca45;
}

@media only screen and (min-width: 1170px) {
    .cd-timeline-img {
        width: 60px;
        height: 60px;
        left: 50%;
        margin-left: -30px;
        -webkit-transform: translateZ(0);
        -webkit-backface-visibility: hidden;
    }

    .cd-timeline-img.is-hidden {
        visibility: hidden;
    }

    .cd-timeline-img.bounce-in {
        visibility: visible;
        animation: cd-bounce-1 0.6s;
    }
}

@-webkit-keyframes cd-bounce-1 {
    0% {
        opacity: 0;
        -webkit-transform: scale(0.5);
    }

    60% {
        opacity: 1;
        -webkit-transform: scale(1.2);
    }

    100% {
        -webkit-transform: scale(1);
    }
}

@-moz-keyframes cd-bounce-1 {
    0% {
        opacity: 0;
        -moz-transform: scale(0.5);
    }

    60% {
        opacity: 1;
        -moz-transform: scale(1.2);
    }

    100% {
        -moz-transform: scale(1);
    }
}

@keyframes cd-bounce-1 {
    0% {
        opacity: 0;
        -moz-transform: scale(0.5);
        -ms-transform: scale(0.5);
        -o-transform: scale(0.5);
        transform: scale(0.5);
    }

    60% {
        opacity: 1;
        -moz-transform: scale(1.2);
        -ms-transform: scale(1.2);
        -o-transform: scale(1.2);
        transform: scale(1.2);
    }

    100% {
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
    }
}

.cd-timeline-content {
    position: relative;
    margin-left: 60px;
    /*   background: #ffffff; */
    border-radius: 0.25em;
    padding: 1em;
    box-shadow: 0 3px 0 #d7e4ed;
}

.cd-timeline-content::after {
    clear: both;
    content: "";
    display: table;
}

.cd-timeline-content h2 {
    color: #303e49;
}

.cd-timeline-content p,
.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
    font-size: 13px;
    font-size: 0.8125rem;
}

.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
    display: inline-block;
}

.cd-timeline-content p {
    margin: 1em 0;
    line-height: 1.6;
}

.cd-timeline-content .cd-read-more {
    float: right;
    padding: 0.8em 1em;
    background: #acb7c0;
    color: #ffffff;
    border-radius: 0.25em;
}

.no-touch .cd-timeline-content .cd-read-more:hover {
    background-color: #bac4cb;
}

.cd-timeline-content .cd-date {
    float: left;
    padding: 0.8em 0;
    opacity: 0.7;
}

/* .cd-timeline-content::before {
    content: "";
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid #ffffff;
} */

@media only screen and (min-width: 768px) {
    .cd-timeline-content h2 {
        font-size: 20px;
        font-size: 1.25rem;
    }

    .cd-timeline-content p {
        font-size: 16px;
        font-size: 1rem;
    }

    .cd-timeline-content .cd-read-more,
    .cd-timeline-content .cd-date {
        font-size: 14px;
        font-size: 0.875rem;
    }
}

@media only screen and (min-width: 1170px) {
    .cd-timeline-content {
        margin-left: 0;
        padding: 1.6em;
        width: 45%;
    }

    /*  .cd-timeline-content::before {
        top: 24px;
        left: 100%;
        border-color: transparent;
        border-left-color: #ffffff;
    } */

    .cd-timeline-content .cd-read-more {
        float: left;
    }

    .cd-timeline-content .cd-date {
        position: absolute;
        width: 100%;
        left: 122%;
        top: 6px;
        font-size: 16px;
        font-size: 1rem;
    }

    .cd-timeline-block:nth-child(even) .cd-timeline-content {
        float: right;
    }

    .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
        top: 24px;
        left: auto;
        right: 100%;
        border-color: transparent;
        border-right-color: #ffffff;
    }

    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
        float: right;
    }

    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
        left: auto;
        right: 122%;
        text-align: right;
    }

    .cd-timeline-content.is-hidden {
        visibility: hidden;
    }

    .cd-timeline-content.bounce-in {
        visibility: visible;
        animation: cd-bounce-2 0.6s;
    }
}

@media only screen and (min-width: 1170px) {
    .cd-timeline-block:nth-child(even) .cd-timeline-content.bounce-in {
        -webkit-animation: cd-bounce-2-inverse 0.6s;
        -moz-animation: cd-bounce-2-inverse 0.6s;
        animation: cd-bounce-2-inverse 0.6s;
    }
}

@-webkit-keyframes cd-bounce-2 {
    0% {
        opacity: 0;
        -webkit-transform: translateX(-100px);
    }

    60% {
        opacity: 1;
        -webkit-transform: translateX(20px);
    }

    100% {
        -webkit-transform: translateX(0);
    }
}

@-moz-keyframes cd-bounce-2 {
    0% {
        opacity: 0;
        -moz-transform: translateX(-100px);
    }

    60% {
        opacity: 1;
        -moz-transform: translateX(20px);
    }

    100% {
        -moz-transform: translateX(0);
    }
}

@keyframes cd-bounce-2 {
    0% {
        opacity: 0;
        -webkit-transform: translateX(-100px);
        -moz-transform: translateX(-100px);
        -ms-transform: translateX(-100px);
        -o-transform: translateX(-100px);
        transform: translateX(-100px);
    }

    60% {
        opacity: 1;
        -webkit-transform: translateX(20px);
        -moz-transform: translateX(20px);
        -ms-transform: translateX(20px);
        -o-transform: translateX(20px);
        transform: translateX(20px);
    }

    100% {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0);
    }
}

@-webkit-keyframes cd-bounce-2-inverse {
    0% {
        opacity: 0;
        -webkit-transform: translateX(100px);
    }

    60% {
        opacity: 1;
        -webkit-transform: translateX(-20px);
    }

    100% {
        -webkit-transform: translateX(0);
    }
}

@-moz-keyframes cd-bounce-2-inverse {
    0% {
        opacity: 0;
        -moz-transform: translateX(100px);
    }

    60% {
        opacity: 1;
        -moz-transform: translateX(-20px);
    }

    100% {
        -moz-transform: translateX(0);
    }
}

@keyframes cd-bounce-2-inverse {
    0% {
        opacity: 0;
        -webkit-transform: translateX(100px);
        -moz-transform: translateX(100px);
        -ms-transform: translateX(100px);
        -o-transform: translateX(100px);
        transform: translateX(100px);
    }

    60% {
        opacity: 1;
        -webkit-transform: translateX(-20px);
        -moz-transform: translateX(-20px);
        -ms-transform: translateX(-20px);
        -o-transform: translateX(-20px);
        transform: translateX(-20px);
    }

    100% {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0);
    }
}
</style>