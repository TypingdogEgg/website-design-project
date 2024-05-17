<script setup>
import { Comment, Avatar, Tooltip, FormItem, Button ,message } from 'ant-design-vue';
import dayjs from 'dayjs';
import { LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
import { ref,reactive, onMounted, computed } from 'vue';
import { getCommentList, addComment } from '@/api/index'
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
dayjs.extend(relativeTime);

const router = useRouter()
const userStore = useUserStore()
const commentList = ref([])

onMounted(async () => {
    const res = await getCommentList()
    console.log(res);
    commentList.value = res.data
})

const col1 = computed(() => {
    const totalComments = commentList.value.length;
    return commentList.value.slice(0, Math.ceil(totalComments / 3));
});

const col2 = computed(() => {
    const totalComments = commentList.value.length;
    const col1Comments = Math.ceil(totalComments / 3);
    return commentList.value.slice(col1Comments, col1Comments + Math.ceil((totalComments - col1Comments) / 2));
});

const col3 = computed(() => {
    const totalComments = commentList.value.length;
    const col1Comments = Math.ceil(totalComments / 3);
    const col2Comments = Math.ceil((totalComments - col1Comments) / 2);
    return commentList.value.slice(col1Comments + col2Comments, totalComments);
});


const likes = reactive(new Array(100).fill(0));
const dislikes = ref(0);
const action = ref();

const like = (index) => {
    console.log(likes,index);
    likes[index] = 1;
    // dislikes.value = 0;
    action.value = 'liked';
};

const dislike = (index) => {
    likes[index] = 0;
    // dislikes.value = 1;
    action.value = 'disliked';
};

const submitting = ref(false);
const response_value = ref('');
const handleSubmit = () => {
    if (!response_value.value) {
        return;
    }

    submitting.value = true;


    if(userStore.userData){
        if (checkSensitiveWords(response_value.value)) {
            submitting.value = false
            message.error('评论里包含违禁词！请嘴下留情')
            return;
        }
        setTimeout(async () => {
            submitting.value = false;
            console.log(userStore.userData);
            const res = await addComment({
                user_id: userStore.userData.userid,
                text: response_value.value
            })
            response_value.value = '';
            // 评论成功 重新获取评论列表
            if(res.code==200){
                const res1 = await getCommentList()
                console.log(res1);
                commentList.value = res1.data
            }

        }, 1000);
    }else{
        router.push('/login')
    }    
}

// 正则 检测脏话
function checkSensitiveWords(text){
    const regExp = new RegExp(badWordsList.join('|'), 'i');
    if (regExp.test(text)) {
        return true;
    } else {
        return false;
    }
}

const badWordsList = ['你妈','傻逼','笨蛋', '混蛋',];



</script>

<template>
    <div class="comments">
        <div class="content">
            <div class="title">讨论区</div>
            <div class="comment-area">
                <div class="comment-col">
                    <div class="comment-item" v-for="(item,index) in col1" :key="item.id" data-aos="fade-up"
                        :data-aos-delay="index * 50">
                        <Comment>
                            <template #actions>
                                <span key="comment-basic-like">
                                    <Tooltip title="Like">
                                        <template v-if="likes[index] === 1">
                                            <LikeFilled style="color: #fff;" @click="dislike(index)" />
                                        </template>
                                        <template v-else>
                                            <LikeOutlined style="color: #fff;" @click="like(index)" />
                                        </template>
                                    </Tooltip>
                                    <span style="padding-left: 8px; cursor: auto;color: #fff;">
                                        {{ likes[index] }}
                                    </span>
                                </span>
                            </template>
                            <template #author><a style="color: #fff;">{{ item.username }}</a></template>
                            <template #avatar>
                                <Avatar :size="30" style="background-color: #658cf7;cursor: pointer;">
                                    {{ item.username }}
                                </Avatar>
                            </template>
                            <template #content>
                                <p style="color: #fff;">
                                    {{ item.text }}
                                </p>
                            </template>
                            <template #datetime>
                                <Tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
                                    <span style="color: #b5b5b5;">{{ item.time > 0 ? `${item.time}天前` : '今天' }}</span>
                                </Tooltip>
                            </template>
                        </Comment>
                    </div>
                </div>
                <div class="comment-col">
                    <div class="comment-item" v-for="(item, index) in col2" :key="item.id" data-aos="fade-up"
                        :data-aos-delay="index * 50">
                        <Comment>
                            <template #actions>
                                <span key="comment-basic-like">
                                    <Tooltip title="Like">
                                        <template v-if="likes[index+10] === 1">
                                            <LikeFilled style="color: #fff;" @click="dislike(index+10)" />
                                        </template>
                                        <template v-else>
                                            <LikeOutlined style="color: #fff;" @click="like(index+10)" />
                                        </template>
                                    </Tooltip>
                                    <span style="padding-left: 8px; cursor: auto;color: #fff;">
                                        {{ likes[index+10] }}
                                    </span>
                                </span>
                            </template>
                            <template #author><a style="color: #fff;">{{ item.username }}</a></template>
                            <template #avatar>
                                <Avatar :size="30" style="background-color: #658cf7;cursor: pointer;">
                                    {{ item.username }}
                                </Avatar>
                            </template>
                            <template #content>
                                <p style="color: #fff;">
                                    {{ item.text }}
                                </p>
                            </template>
                            <template #datetime>
                                <Tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
                                    <span style="color: #b5b5b5;">{{ item.time > 0 ? `${item.time}天前` : '今天' }}</span>
                                </Tooltip>
                            </template>
                        </Comment>
                    </div>
                </div>
                <div class="comment-col">
                    <div class="comment-item" v-for="(item, index) in col3" :key="item.id" data-aos="fade-up"
                        :data-aos-delay="index * 50">
                        <Comment>
                            <template #actions>
                                <span key="comment-basic-like">
                                    <Tooltip title="Like">
                                        <template v-if="likes[index+20] === 1">
                                            <LikeFilled style="color: #fff;" @click="dislike(index+20)" />
                                        </template>
                                        <template v-else>
                                            <LikeOutlined style="color: #fff;" @click="like(index+20)" />
                                        </template>
                                    </Tooltip>
                                    <span style="padding-left: 8px; cursor: auto;color: #fff;">
                                        {{ likes[index+20] }}
                                    </span>
                                </span>
                            </template>
                            <template #author><a style="color: #fff;">{{ item.username }}</a></template>
                            <template #avatar>
                                <Avatar :size="30" style="background-color: #658cf7;cursor: pointer;">
                                    {{ item.username }}
                                </Avatar>
                            </template>
                            <template #content>
                                <p style="color: #fff;">
                                    {{ item.text }}
                                </p>
                            </template>
                            <template #datetime>
                                <Tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
                                    <span style="color: #b5b5b5;">{{ item.time > 0 ? `${item.time}天前` : '今天' }}</span>
                                </Tooltip>
                            </template>
                        </Comment>
                    </div>
                </div>
            </div>
            <div class="response-area">
                <Comment>
                    <template #avatar>
                        <Avatar v-if="userStore.userData" :size="30"
                            style="background-color: #658cf7;cursor: pointer;">
                            {{ userStore.userData.username }}
                        </Avatar>
                    </template>
                    <template #content>
                        <FormItem>
                            <a-textarea style="border: 1px solid #fff;background-color: #000;color: #fff;padding: 5px;"
                                v-model:value="response_value" :rows="4" />
                        </FormItem>
                        <FormItem style="color: #fff;margin-top: 10px;">
                            <Button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit"
                                style="padding: 0 10px;background-color: #658cf7;">
                                添加评论
                            </Button>
                        </FormItem>
                    </template>
                </Comment>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.comments {
    height: 100vh;
    width: 100%;
    background-color: #000;

    .content {
        width: 80%;
        height: 100%;
        background-color: #000;

        margin: 0 auto;

        .title {
            padding-top: 70px;
            text-align: center;
            font-size: 30px;
            color: #fff;
            margin-bottom: 70px;
        }

        ::-webkit-scrollbar {
            display: none;
        }

        .comment-area {
            overflow: auto;
            display: flex;
            height: 430px;
            justify-content: space-between;

            .comment-col {
                width: 32%;
                height: 430px;

                .comment-item {
                    background-color: #21282e;
                    width: 100%;
                    padding: 10px 20px;
                    border-radius: 10px;
                    margin-bottom: 20px;

                    .ant-comment-inner {}

                }
            }

        }

        .response-area {}


    }

}
</style>