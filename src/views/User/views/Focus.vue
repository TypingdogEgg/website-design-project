<script setup>
import { Button,message } from 'ant-design-vue';
import {getAllFocus,removeFocus } from '@/api/index';
import {ref,reactive,onMounted,h} from 'vue'
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import { Modal } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
const [modal, contextHolder] = Modal.useModal();

const router = useRouter()

const userStore = useUserStore()

const focusList = ref([])
onMounted( async()=>{
    const user_id = userStore.userData.userid
    const res = await getAllFocus(user_id)
    console.log(res);
    focusList.value = res.data
})
// 点击查看跳转到详细产品页
function goProductPage(exhibitor_id,product_id) {
    console.log('click!');
    router.push({
        path: '/products',
        query: {
            exhibitor_id,
            product_id
        }
    })
}

// 取消关注
function cancelFocus(user_id,product_id){
    modal.confirm({
        title: '确定要取消关注吗',
        icon: h(ExclamationCircleOutlined),
        content: '',
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        async onOk () {
            const res = await removeFocus(user_id, product_id)
            if (res.code == 200) {
                const res1 = await getAllFocus(user_id)
                focusList.value = res1.data
            }
            location.reload()
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}

</script>

<template>
    <div class="focus">
        <div class="body">
            <div class="title">
                我的关注
            </div>
            <div class="content">
                <div v-if="focusList.length==0" class="show-null"
                    style="text-align: center;color: #535353;margin-top: 30px">
                    您的关注列表为空~
                </div>
                <ul v-else class="focus-list">
                    <li class="focus-item" v-for="item in focusList" :key="item.id">
                        <img loading="lazy" :src="item.imageUrls" alt="">
                        <div class="name">
                            <div class="title">{{ item.name }}</div>
                            <div class="descrip">{{ item.description }}</div>
                        </div>
                        <div class="tool-bar">
                            <Button class="check" @click="goProductPage(item.exhibitor_id,item.id)">查看</Button>
                            <Button class="cancel-focus"
                                @click="cancelFocus(userStore.userData.userid,item.id)">取消关注</Button>
                            <contextHolder />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.focus {
    width: 100%;
    height: 100%;

    .body {
        height: 100%;
        width: 100%;
        padding: 20px;

        .title {
            font-size: 18px;
            color: #535353;
        }

        .content {
            width: 100%;
            height: 100%;
            padding: 30px;
            padding-top: 50px;

            // background-color: pink;

            ::-webkit-scrollbar {
                display: none;
            }

            .focus-list {
                overflow: auto;
                height: 100%;


                .focus-item {
                    border-radius: 10px;
                    position: relative;
                    width: 100%;
                    height: 120px;
                    background-color: #fff;
                    margin-bottom: 20px;

                    display: flex;
                    align-items: center;

                    img {
                        margin-left: 10px;
                        width: 200px;
                        height: 100px;
                        border-radius: 10px;
                    }

                    .name {
                        margin-left: 15px;
                        display: flex;
                        flex-direction: column;

                        .title {
                            font-size: 16px;
                            font-weight: 700;
                            margin-bottom: 10px;
                        }

                        .descrip {
                            overflow: hidden;
                            /* 隐藏超出的内容 */
                            white-space: nowrap;
                            /* 不换行，保持单行显示 */
                            text-overflow: ellipsis;
                            width: 300px;
                            font-size: 14px;
                            color: #535353;
                        }
                    }

                    .tool-bar {
                        position: absolute;
                        right: 20px;

                        button {
                            width: 70px;
                            margin-left: 10px;
                        }
                    }

                }


            }

        }
    }
}
</style>