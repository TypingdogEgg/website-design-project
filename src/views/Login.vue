<script setup>
import Footer from '@/components/Footer.vue'
import { ref, reactive, computed, onMounted } from 'vue';
import { Form, FormItem, Input, Button, Checkbox, message } from 'ant-design-vue';
import { MailOutlined, LeftOutlined, LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import { register, login } from '@/api';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const router = useRouter()
const userStore = useUserStore()


let isActive = ref(false)

const loginFormState = reactive({
    email: '',
    password: '',
})

const registerFormState = reactive({
    email: '',
    username: '',
    password: '',
})

const handleRegister = async () => {
    const res = await register(registerFormState)
    if (res.code == 200) {
        message.success('注册成功！')
        isRegister.value = false
    } else {
        message.warning(res.msg)
        return;
    }
}

const handleLogin = async () => {
    await login(loginFormState).then((res) => {
        if (res.code == 200) {
            message.success('登录成功！')
            // 存store token userinfo
            userStore.saveUserData(res)
            // 跳转主页
            setTimeout(() => {
                // 返回上一个页面并刷新
                const preRoute = localStorage.getItem('preRoute')
                // router.go(0)
                if (preRoute) {
                    location.replace(preRoute)
                } else {
                    location.replace('/')
                }
            }, 500)
        } else {
            message.warning(res.msg)
            return;
        }
    })
}

</script>

<template>
    <div class="login-register">
        <div class="container" id="container" :class="{ 'active': isActive }">
            <div class="form-container sign-up">
                <form>
                    <h1 style="font-size: 28px;margin-bottom: 30px;font-weight: 700;">注册用户</h1>
                    <input v-model="registerFormState.username" type="text" placeholder="Name">
                    <input v-model="registerFormState.email" type="email" placeholder="Email">
                    <input v-model="registerFormState.password" type="password" placeholder="Password">
                    <button style="font-size: 16px;" @click.prevent="handleRegister">注 册</button>
                </form>
            </div>
            <div class="form-container sign-in">
                <form>
                    <h1 style="font-size: 28px;margin-bottom: 30px;font-weight: 700;">登录用户</h1>
                    <input v-model="loginFormState.email" type="email" placeholder="Email">
                    <input v-model="loginFormState.password" type="password" placeholder="Password">
                    <a href="#">Forget Your Password?</a>
                    <button style="font-size: 16px;" @click.prevent="handleLogin">登 录</button>
                </form>
            </div>
            <div class="toggle-container">
                <div class="toggle">
                    <div class="bg"></div>
                    <div class="toggle-panel toggle-left">
                        <h1 style="color: #fff;font-size: 20px;">Welcome Back!</h1>
                        <p style="color: #fff;font-size: 14px;">Enter your personal details to use all of site features
                        </p>
                        <button class="hidden" id="login" @click="isActive = false" style="font-weight: 500;">登
                            录</button>
                    </div>
                    <div class="toggle-panel toggle-right">
                        <h1 style="color: #fff;font-size: 20px;">Hello Friend!</h1>
                        <p style="color: #fff;font-size: 14px;">Register with your personal
                            details to use all of site features</p>
                        <button class="hidden" id="register" @click="isActive = true" style="font-weight: 500;">注
                            册</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.login-register {
    background-color: #c9d6ff;
    background: linear-gradient(to right, #fff, #fff);
    // background-color: #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    .container {
        margin-top: 60px;
        background-color: #fff;
        border-radius: 30px;
        // box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
        position: relative;
        overflow: hidden;
        width: 1200px;
        max-width: 100%;
        min-height: 650px;
    }

    .container p {
        border-color: #fff;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.3px;
        margin: 20px 0;
    }

    .container span {
        border-color: #fff;
        font-size: 12px;
    }

    .container a {
        border-color: #fff;
        font-size: 13px;
        text-decoration: none;
        margin: 15px 0 10px;
    }

    .container button {
        background-color: #000000;
        color: #fff;
        font-size: 12px;
        padding: 10px 45px;
        border: 1px solid transparent;
        border-radius: 8px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-top: 10px;
        cursor: pointer;
    }

    .container button.hidden {
        background-color: transparent;
        border-color: #fff;
    }

    .container form {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        height: 100%;
    }

    .container input {
        background-color: #eee;
        border: none;
        margin: 8px 0;
        padding: 15px 15px;
        font-size: 13px;
        border-radius: 8px;
        width: 100%;
        outline: none;
    }

    .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }

    .sign-in {
        left: 0;
        width: 50%;
        z-index: 2;
    }

    .container.active .sign-in {
        transform: translateX(100%);
    }

    .sign-up {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }

    .container.active .sign-up {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: move 0.6s;
    }

    @keyframes move {

        0%,
        49.99% {
            opacity: 0;
            z-index: 1;
        }

        50%,
        100% {
            opacity: 1;
            z-index: 5;
        }
    }

    .social-icons {
        margin: 20px 0;
    }

    .social-icons a {
        border: 1px solid #ccc;
        border-radius: 20%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 3px;
        width: 40px;
        height: 40px;
    }

    .toggle-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: all 0.6s ease-in-out;
        border-radius: 150px 0 0 100px;
        z-index: 1000;
    }

    .container.active .toggle-container {
        transform: translateX(-100%);
        border-radius: 0 150px 100px 0;
    }

    .toggle {
        background-color: #512da8;
        height: 100%;
        background: linear-gradient(120deg, #7178d3, #2361e5, #7178d3);
        background: url(../assets/images/login.png);
        background-size: cover;
        color: #fff;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: all 0.6s ease-in-out;

        .bg {
            width: 100%;
            height: 100%;
            background-image: linear-gradient(359deg, #00010a, #0000005e, #0000005e, #030303);
            position: absolute;
        }
    }

    .container.active .toggle {
        transform: translateX(50%);
    }

    .toggle-panel {
        position: absolute;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 30px;
        text-align: center;
        top: 0;
        transform: translateX(0);
        transition: all 0.6s ease-in-out;
    }

    .toggle-left {
        border-color: #fff;
        transform: translateX(-200%);
    }

    .container.active .toggle-left {
        border-color: #fff;
        transform: translateX(0);
    }

    .toggle-right {
        border-color: #fff;
        right: 0;
        transform: translateX(0);
    }

    .container.active .toggle-right {
        border-color: #fff;
        transform: translateX(200%);
    }
}
</style>