<script setup>
import { RightOutlined } from '@ant-design/icons-vue';
import { Collapse, CollapsePanel } from 'ant-design-vue';
import { ref } from 'vue';

const activeKey = ref(['0']);
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;

const list = [
    {
        id: 1,
        header: '什么是智博会？',
        text: '智博会，即中国国际智能产业博览会（Smart China Expo），简称SCE，是在中国重庆举办的一个以智能产业为主题的大型博览会。'
    },
    {
        id: 2,
        header: '智博会通常包含哪些类型的展览和活动？',
        text: '智博会通常包括各种类型的展览，如人工智能、机器人技术、物联网、大数据、云计算、智慧城市解决方案等。此外，还会有研讨会、论坛、产品发布会、网络会议和一对一商务配对会等活动。'
    },
    {
        id: 3,
        header: '谁可以参加智博会？',
        text: '智博会适合各种背景的参与者，包括企业家、投资者、技术专家、学者、政府官员、行业分析师以及对未来技术和智能解决方案感兴趣的公众人士。'
    },
    {
        id: 4,
        header: '参加智博会有哪些好处？',
        text: '参加智博会的好处包括获取最新行业资讯，建立商业联系，了解竞争对手的动态，探索新的市场机会，以及与行业领导者和创新者交流思想和经验。'
    },
    {
        id: 5,
        header: '如何参与智博会？',
        text: '要参与智博会，首先可以访问智博会的官方网站获取相关信息，了解展会日期、地点、参展商名单、活动安排等。可以注册参加作为观众或者申请成为展商。此外，还可以关注智博会的社交媒体账号，以获取实时更新和互动机会。'
    },
]
</script>

<template>
    <div class="qaa">
        <div class="title" data-aos="fade-up">
            <h1>Answers To Your Smart-China-Related Question</h1>
            <p>Premium Designs with Exceptional User Experiences</p>
        </div>
        <div class="content" data-aos="fade-up">
            <Collapse v-model:activeKey="activeKey" :bordered="false" style="background: #000" expandIconPosition="end"
                :ghost="true" accordion>
                <template #expandIcon="{ isActive }">
                    <RightOutlined style="color: #d9d9d9;font-size: 16px;font-weight: 700;"
                        :rotate="isActive ? -90 : 90" />
                </template>
                <Collapse-panel v-for="item in list" :key="item.id" :header="item.header"
                    style="background: #f7f7f7;border-radius: 10px;padding:5px 0;margin-bottom: 15px;border: 0;overflow: hidden;background-color: #000;">
                    <p style="font-size: 14px;color: #d9d9d9;">{{ item.text }}</p>
                </Collapse-panel>
            </Collapse>
        </div>
    </div>
</template>

<style scoped lang="less">
.qaa {
    height: 600px;
    background-color: #000;

    .title {
        text-align: center;
        color: #fff;
        padding-top: 100px;
        margin-bottom: 50px;

        h1 {
            font-size: 34px;
            font-weight: 700;
            color: #fff;
        }

        p {
            font-size: 16px;
            color: #d9d9d9;
        }
    }

    .content {
        background-color: #000;
        width: 65%;
        margin: 0 auto;

        :deep(.ant-collapse-item) {
            border: 1px solid #8a8a8a !important;
            transition: all 0.3s !important;
        }

        :deep(.ant-collapse-header-text) {
            font-size: 14px !important;
            color: #d9d9d9;
            transition: all 0.3s !important;
        }

        :deep(.ant-collapse-item-active) {
            background-color: royalblue !important;
            transition: all 0.3s !important;
        }

        :deep(.ant-collapse-item-active .ant-collapse-header-text) {
            // color: royalblue !important;
            color: #fff !important;
            font-size: 20px !important;
            transition: all 0.3s !important;
            font-weight: 700 !important;
        }

        :deep(.ant-collapse-item-active.ant-collapse-item) {
            border: none !important;
            transition: all 0.3s !important;
        }
    }
}
</style>