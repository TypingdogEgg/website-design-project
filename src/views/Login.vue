<script setup>
import Footer from '@/components/Footer.vue'
import { ref, reactive, computed,onMounted } from 'vue';
import { Form, FormItem, Input, Button, Checkbox, message } from 'ant-design-vue';
import { MailOutlined, LeftOutlined, LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import { register,login } from '@/api';

onMounted(()=>{
    window.scrollTo({ top: 0 })

})

const loginFormState = reactive({
    email: '',
    password: '',
    remember: true
})

const loginDisabled = computed(() => {
    return !(loginFormState.email != '' && loginFormState.password != '')
})

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
    return !(loginFormState.username && loginFormState.password);
});

let isRegister = ref(false);

const registerFormState = reactive({
    email: '',
    username: '',
    password: '',
    confirmPwd: ''
})

const registerDisabled = computed(() => {
    return !(registerFormState.email != '' && registerFormState.username != '' && registerFormState.confirmPwd != '' && registerFormState.password != '')
})

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const handleRegister = async ()=>{
    if (registerFormState.password !== registerFormState.confirmPwd){
        message.warning('两次输入的密码不一致！')
        return;
    }

    const registerForm = {
        email:registerFormState.email,
        username:registerFormState.username,
        password:registerFormState.password,
    }
    const res = await register(registerForm)
    if(res.code == 200){
        message.success('注册成功！')
        isRegister.value = false
    }else{
        message.warning(res.msg)
        return;
    }
}

const handleLogin = async()=>{
    const loginForm = {
        email:loginFormState.email,
        password:loginFormState.password
    }

    const res = await login(loginForm)
    if (res.code == 200) {
        message.success('登录成功！')
        // 跳转主页
        // 存store token
    } else {
        message.warning(res.msg)
        return;
    }
}

</script>

<template>
    <div class="login-register">
        <div class="background">
            <div class="name">加入智博会</div>
            <h1 class="title">
                加入智博会了解更多新科技新变化
            </h1>
        </div>
        <div class="content">
            <div class="function">
                <template v-if="isRegister">
                    <a class="back" style="position: absolute;top: 280px;cursor: pointer;color: #000;"
                        @click="isRegister = !isRegister">
                        <LeftOutlined style="color: #000;" /> 返回登录
                    </a>
                    <div class="login" style="margin-left: 29%;">
                        <!-- 注册表单 -->
                        <Form v-bind="layout" :model="registerFormState" name="register" class="register-form"
                            @finish="registerFinish" @finishFailed="registerFinishFailed">
                            <FormItem class="form-item" label="邮箱" name="email"
                                :rules="[{ required: true, message: 'Please input your email!' }]">
                                <Input v-model:value="registerFormState.email"></Input>
                                <MailOutlined class="site-form-item-icon" />
                            </FormItem>
                            <FormItem class="form-item" label="用户名" name="username"
                                :rules="[{ required: true, message: 'Please input your username!' }]">
                                <Input v-model:value="registerFormState.username"></Input>
                                <UserOutlined class="site-form-item-icon" />
                            </FormItem>
                            <FormItem class="form-item" label="密码" name="password"
                                :rules="[{ required: true, message: 'Please input your password!' }]">
                                <Input v-model:value="registerFormState.password">
                                </Input>
                                <LockOutlined class="site-form-item-icon" />
                            </FormItem>
                            <FormItem class="form-item" label="确认密码" name="confirmPwd"
                                :rules="[{ required: true, message: 'Please input your password!' }]">
                                <Input v-model:value="registerFormState.confirmPwd">
                                </Input>
                                <LockOutlined class="site-form-item-icon" />
                            </FormItem>

                            <FormItem class="form-item">
                                <Button :disabled="registerDisabled" type="primary" html-type="submit"
                                    class="login-form-button" @click="handleRegister">
                                    注册
                                </Button>
                            </FormItem>
                        </Form>
                    </div>

                </template>
                <template v-else>
                    <div class="register">
                        <p>点击下面注册</p>
                        <Button class="register-open" @click="isRegister = !isRegister">注册</Button>
                    </div>
                    <div class="login">
                        <p>已经注册？</p>
                        <!-- 登录表单 -->
                        <Form :model="loginFormState" name="login" class="login-form" @finish="onFinish"
                            @finishFailed="onFinishFailed">
                            <FormItem class="form-item" label="邮箱" name="email"
                                :rules="[{ required: true, message: 'Please input your email!' }]">
                                <Input v-model:value="loginFormState.email"></Input>
                                <MailOutlined class="site-form-item-icon" />
                            </FormItem>

                            <FormItem class="form-item" label="密码" name="password"
                                :rules="[{ required: true, message: 'Please input your password!' }]">
                                <Input v-model:value="loginFormState.password">
                                </Input>
                                <LockOutlined class="site-form-item-icon" />

                            </FormItem>

                            <FormItem class="form-item">
                                <FormItem name="remember" no-style>
                                    <Checkbox class="check" v-model:checked="loginFormState.remember">记住我
                                    </Checkbox>
                                </FormItem>
                                <!-- <a class="login-form-forgot" href="">Forgot password</a> -->
                            </FormItem>

                            <FormItem class="form-item">
                                <Button :disabled="loginDisabled" type="primary" html-type="submit"
                                    class="login-form-button" @click="handleLogin">
                                    登录
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </template>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped lang="less">
.login-register {
    background-color: #ffffff;
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 2;

    .background {
        margin-top: 120px;
        height: 150px;
        background: url('../assets/images/bg.png');
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .name {
            font-family: 'title-font';
            padding-top: 20px;
            color: #2033a0;
            letter-spacing: 5px;
            font-size: 50px;
            font-weight: 700;
        }

        .title {
            padding-top: 30px;
            text-align: center;
            font-size: 15px;
        }
    }

    .content {
        flex-direction: column;

        margin: 50px auto;
        width: 50%;
        height: 400px;
        // border-radius: 2%;
        // box-shadow: 3px 3px 5px 3px hsla(0, 0%, 79%, 0.58);
        // background-color: #fff;

        .function {
            display: flex;
            padding: 0 50px;

            .register {
                width: 300px;
                // flex: 1;
                margin-left: 120px;

                margin-right: 50px;

                button {
                    margin-top: 30px;
                    width: 70px;
                    color: #2033a0;
                    border: #2033a0 1px solid;
                    height: 32px;
                }
            }

            .login {
                // flex: 1;
                width: 300px;

                p {
                    font-size: 18px;
                    margin-bottom: 30px;
                }

                .register-form {
                    text-align: center;
                    max-width: 300px;

                    .form-item {
                        margin-bottom: 25px;
                    }


                    .login-form-button {
                        width: 90px;
                        color: #2033a0;
                        border: #2033a0 1px solid;

                    }


                    input {
                        padding-left: 25px;
                        height: 40px;

                        position: relative;
                    }

                    input:last-child {
                        margin-top: 20px;
                    }

                    .site-form-item-icon {
                        color: #6d6d6d;
                        position: absolute;
                        top: 13px;
                        left: 6px;
                    }
                }

                .login-form {

                    .form-item {
                        margin-bottom: 25px;
                    }

                    max-width: 300px;

                    .login-form-button {
                        width: 90px;
                        color: #2033a0;
                        border: #2033a0 1px solid;
                    }


                    input {
                        padding-left: 25px;
                        height: 40px;

                        position: relative;
                    }

                    input:last-child {
                        margin-top: 20px;
                    }

                    .site-form-item-icon {
                        color: #6d6d6d;
                        position: absolute;
                        top: 13px;
                        left: 6px;
                    }



                    .check {
                        margin-bottom: 10px;
                    }
                }
            }

        }
    }
}
</style>