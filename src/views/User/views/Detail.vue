<script setup>
import { ref, reactive, onMounted, onBeforeMount } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()
let userData = {}

onBeforeMount(() => {
    userData = userStore.getUserData()
})
</script>

<template>
    <div class="detail">
        <div class="title">
            基本资料
        </div>
        <div class="content">
            <div class="info"><span>昵称：</span>{{ userData.username }}</div>
            <div class="info"><span>邮箱：</span>{{ userData.email }}</div>
            <div class="info"><span>上次登录时间：</span>{{ userData.logintime }}</div>

        </div>
    </div>
</template>

<style scoped lang="less">
.detail{
    position: relative;
    .title{
        font-size: 18px;
        color: #585858;
        margin: 30px 50px;
    }

    .content{
        display: flex;
        // justify-content: center;
        flex-direction: column;
        // align-items: start;

        position: absolute;
        left: 50%;
        top: 120px;
        transform: translateX(-50%);

        font-size: 16px;

        
        .info{
            margin-bottom: 20px;

            span{
                font-weight: 700;
            }
        }

    }

}
</style>