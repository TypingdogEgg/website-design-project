<script setup>
import Header from '@/components/Header.vue';
import { useUserStore } from '@/stores/user';
import { ref, reactive, onMounted, onBeforeMount } from 'vue';
import { Avatar } from 'ant-design-vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const userStore = useUserStore()
let userData = {}

onBeforeMount(() => {
    userData = userStore.getUserData()
})

</script>

<template>
    <Header></Header>
    <div class="user-platform">
        <div class="content">
            <div class="list">
                <div class="info">
                    <div class="avatar">
                        <Avatar :size="100" style="background-color: #658cf7;cursor: pointer;">
                            {{ userData.username }}
                        </Avatar>
                    </div>
                    <div class="name">{{ userData.username }} </div>
                </div>
                <div class="tab-list">
                    <ul class="tabs">
                        <li class="tab"><router-link :to="{ name: 'detail' }">
                                <span :class="{ 'choose': route.name == 'detail' }">基本资料</span>
                            </router-link></li>
                        <li class="tab"><router-link :to="{ name: 'myfocus' }">
                                <span :class="{ 'choose': route.name == 'myfocus' }">我的关注</span>
                            </router-link></li>
                        <!-- <li class="tab"><router-link :to="{ name: 'changepwd' }">
                                <span :class="{ 'choose': route.name == 'changepwd' }">修改密码</span>
                            </router-link></li> -->
                    </ul>
                </div>
            </div>
            <div class="context">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.user-platform {
    height: 100vh;
    background-color: #f1f2f6;
    overflow: hidden;

    .content {
        width: 80%;
        background-color: #f1f2f6;
        margin: 0 auto;
        padding-top: 80px;
        height: 100%;

        .list {
            background-color: #fff;
            margin-top: 80px;
            float: left;
            height: 100%;
            width: 25%;
            position: relative;

            .info {
                position: absolute;
                top: -60px;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
                margin-bottom: 50px;

                .name {
                    font-size: 20px;
                    font-weight: 700;
                    margin-top: 10px;
                }
            }

            .tab-list {
                padding-top: 110px;
                display: flex;
                justify-content: center;

                .tabs {
                    width: 50%;
                    text-align: center;

                    .tab {
                        height: 40px;
                        line-height: 40px;
                        margin-bottom: 30px;
                        border-bottom: #e7e7e7 1px solid;
                    }

                    a:hover {
                        color: #5578d7;
                    }

                    .choose {
                        color: #658cf7;
                    }
                }
            }
        }

        .context {
            background-color: #f9f9f9;
            margin-top: 20px;
            float: right;
            height: 100%;
            width: 73%;

        }
    }


}
</style>