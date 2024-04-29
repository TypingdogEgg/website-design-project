<script setup>
import { Space, Dropdown, Menu, MenuItem, Avatar } from 'ant-design-vue';
import { computed, ref, watch, onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
let userData = {}
// const {userData} = storeToRefs(userStore)
onMounted(() => {
    userData = userStore.getUserData()
    // console.log('userdata',userData.value);
    // console.log('userdata',userStore.userData);
})

// 导航列表 to暂定 name暂定
const navList = [
    {
        id: 1,
        name: '首页',
        to: 'home-slide'
    },
    {
        id: 2,
        name: '新闻资讯',
        to: 'news'
    },
    {
        id: 3,
        name: '展品介绍',
        to: 'exhibiting-brand'
    },
    {
        id: 4,
        name: '参展嘉宾',
        to: 'exhibiting-person'
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

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        isFixed.value = true;
    } else {
        isFixed.value = false;
    }
})

function handleScroll(to) {
    // console.log(to);
    let offsetHeight = document.querySelectorAll(`.${to}`)[0].offsetTop

    window.scrollTo({
        top: offsetHeight,
        left: 0,
        behavior: 'smooth'
    })
}

function exit() {
    userStore.removeUserData()
    location.reload()
}

</script>

<template>
    <div class="header" :class="!isFixed && route.path == '/' ? 'header-abs' : 'header-fixed'">
        <div class="header-content">
            <div class="title" @click="router.push('/')" style="cursor: pointer;">
                <div class="logo">
                    <div style="width: 65px;height: 78px;">
                        <img style="width: 65px;" src="../assets/images/logo.png" alt="">
                    </div>
                    <div class="div">
                        <span class="top" style="float: left;">智博会</span>
                        <span class="under">Smart China</span>
                        <span class="under">Expo</span>
                    </div>
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
                                        <a @click="handleScroll(child.to)">{{ child.name }}</a>
                                        </MenuItem>
                                    </Menu>
                                </template>
                            </Dropdown>
                        </li>
                        <li class="nav-item" v-for="nav in navNoChildren" :key="nav.id">
                            <a @click="handleScroll(nav.to)">{{ nav.name }}</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="login" v-if="userData == null">登录/注册</router-link>
                            <Dropdown placement="bottom" arrow v-else>
                                <div>
                                    <Avatar :size="30" style="background-color: #658cf7;cursor: pointer;">
                                        {{ userData.username }}
                                    </Avatar>
                                    <span style="color: #fff;margin-left: 10px;">{{ userData.username }}</span>
                                </div>
                                <template #overlay>
                                    <Menu>
                                        <MenuItem>
                                        <a @click="person">个人中心</a>
                                        </MenuItem>
                                        <MenuItem>
                                        <a @click="exit">退出</a>
                                        </MenuItem>
                                    </Menu>
                                </template>
                            </Dropdown>
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
            color: #ffffff;
            width: 40%;
            height: 100%;

            .logo {
                height: 100%;
                width: 200px;
                display: flex;
                // flex-direction: column;

                .div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                span {
                    width: 120px;
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
    background-color: #071035c5;

}
</style>