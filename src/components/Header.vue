<script setup>
import { Space } from 'ant-design-vue';
// 导航列表 to暂定 name暂定
const navList = [
    {
        id: 1,
        name: '智博会',
        to: 'a'
    },
    {
        id: 2,
        name: '智博会',
        to: 'a'
    },
    {
        id: 3,
        name: '智博会',
        to: 'a'
    },
    {
        id: 4,
        name: '智博会',
        to: 'a'
    },
]

</script>

<template>
    <div class="header">
        <div class="title">
            <div class="logo">
                <span class="top">智博会</span>
                <span class="under">Smart China Expo</span>
            </div>
        </div>
        <div class="navbar">
            <ul class="bar">
                <Space :size="40">
                    <li class="nav-item" v-for="item in navList" :key="item.id">
                        <router-link :to="item.to">{{ item.name }}</router-link>
                    </li>
                </Space>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="less">
.header {
    position: relative;
    z-index: 999;
    margin: 0 auto;
    // background-color: pink;
    width: 80%;
    height: 78px;
    display: flex;

    .title {
        width: 40%;
        height: 100%;

        .logo {
            height: 100%;
            width: 120px;
            display: flex;
            flex-direction: column;

            span {
                font-style: italic;
            }


            .top {
                font-size: 16px;

            }
        }
    }

    .navbar {
        width: 60%;
        height: 100%;

        .bar {
            height: 100%;
            display: flex;
            justify-content: flex-end;

            .nav-item {
                height: 100%;

                a {
                    height: 100%;
                }
            }
        }
    }
}
</style>