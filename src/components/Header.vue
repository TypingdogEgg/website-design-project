<script setup>
import { Space, Dropdown, Menu, MenuItem } from 'ant-design-vue';
import { computed,ref,watch } from 'vue';
import { useRouter,useRoute } from 'vue-router';
// 导航列表 to暂定 name暂定
const navList = [
    {
        id: 1,
        name: '首页',
        to: 'homeslide'
    },
    {
        id: 2,
        name: '新闻资讯',
        to: 'news'
    },
    {
        id: 3,
        name: '展品介绍',
        to: 'intro'
    },
    {
        id: 4,
        name: '参展嘉宾',
        to: 'guest'
    },
    {
        id: 5,
        name: '往届回顾',
        to: 'history'
    },
]
const navHasChildren = computed(() => {
    return navList.filter((nav) => !nav.to)
})
const navNoChildren = computed(() => {
    return navList.filter((nav) => nav.to)
})

const router = useRouter();
const route = useRoute()

const isFixed = ref(false);

window.addEventListener('scroll',()=>{
    if (window.scrollY >= 200) {
        isFixed.value = true;
    } else {
        isFixed.value = false;
    }
})
</script>

<template>
    <div class="header"
        :class="!isFixed&&route.path=='/'?'header-abs':'header-fixed'">
        <div class="header-content">
            <div class="title" @click="router.push('/')" style="cursor: pointer;">
                <div class="logo">
                    <span class="top">智博会</span>
                    <span class="under">Smart China Expo</span>
                </div>
            </div>
            <div class="navbar">
                <ul class="bar">
                    <Space :size="40">
                        <li class="nav-item" v-for="nav in navHasChildren" :key="nav.id">
                            <Dropdown placement="bottom" arrow>
                                <a @click.prevent>{{ nav.name }}</a>
                                <template #overlay>
                                    <Menu>
                                        <MenuItem v-for="child in nav.children" :key="child.id">
                                        <router-link :to="child.to">{{ child.name }}</router-link>
                                        </MenuItem>
                                    </Menu>
                                </template>
                            </Dropdown>
                        </li>
                        <li class="nav-item" v-for="nav in navNoChildren" :key="nav.id">
                            <router-link :to="nav.to">{{ nav.name }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="login">登录/注册</router-link>
                        </li>
                    </Space>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.header {
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: center;

    .header-content {
        width: 80%;
        height: 100%;
        display: flex;

        .title {
            color: #fff;
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
                        color: #fff;
                    }

                    a:hover {
                        color: #3c6df4;
                    }
                }
            }
        }
    }
}
.header-abs {
    position: absolute;
    top: 0;
    z-index: 999;
}

.header-fixed {
    position: fixed;
    z-index: 999;
    background-color: #000000d4;
    
}
</style>