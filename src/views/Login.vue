<script setup>
import Footer from '@/components/Footer.vue'
import { ref, reactive, computed } from 'vue';
import { Form, FormItem, Input, Button, Checkbox } from 'ant-design-vue';
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue';

const loginFormState = reactive({
    email: '',
    password: '',
    remember: true
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

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

</script>

<template>
    <div class="login-register">
        <div class="background">
            <div class="name">加入智博会</div>
        </div>
        <div class="content">
            <h1 class="title">
                加入智博会了解更多新科技新变化
            </h1>
            <div class="function">
                <template v-if="isRegister">
                    <div class="login">
                        <a @click="isRegister = !isRegister" style="cursor: pointer;">
                            < 返回登录</a>
                                <!-- 注册表单 -->
                                <Form v-bind="layout" :model="registerFormState" name="register" class="register-form"
                                    @finish="registerFinish" @finishFailed="registerFinishFailed">
                                    <FormItem label="邮箱" name="email"
                                        :rules="[{ required: true, message: 'Please input your email!' }]">
                                        <Input v-model:value="registerFormState.email"></Input>
                                        <UserOutlined class="site-form-item-icon" />
                                    </FormItem>
                                    <FormItem label="用户名" name="username"
                                        :rules="[{ required: true, message: 'Please input your username!' }]">
                                        <Input v-model:value="registerFormState.username"></Input>
                                        <UserOutlined class="site-form-item-icon" />
                                    </FormItem>
                                    <FormItem label="密码" name="password"
                                        :rules="[{ required: true, message: 'Please input your password!' }]">
                                        <Input v-model:value="registerFormState.password">
                                        </Input>
                                        <LockOutlined class="site-form-item-icon" />
                                    </FormItem>
                                    <FormItem label="确认密码" name="confirmPwd"
                                        :rules="[{ required: true, message: 'Please input your password!' }]">
                                        <Input v-model:value="registerFormState.confirmPwd">
                                        </Input>
                                        <LockOutlined class="site-form-item-icon" />
                                    </FormItem>

                                    <FormItem>
                                        <Button :disabled="disabled" type="primary" html-type="submit"
                                            class="login-form-button">
                                            登录
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
                            <FormItem label="邮箱" name="email"
                                :rules="[{ required: true, message: 'Please input your email!' }]">
                                <Input v-model:value="loginFormState.email"></Input>
                                <UserOutlined class="site-form-item-icon" />
                            </FormItem>

                            <FormItem label="密码" name="password"
                                :rules="[{ required: true, message: 'Please input your password!' }]">
                                <Input v-model:value="loginFormState.password">
                                </Input>
                                <LockOutlined class="site-form-item-icon" />

                            </FormItem>

                            <FormItem>
                                <FormItem name="remember" no-style>
                                    <Checkbox class="check" v-model:checked="loginFormState.remember">Remember me
                                    </Checkbox>
                                </FormItem>
                                <!-- <a class="login-form-forgot" href="">Forgot password</a> -->
                            </FormItem>

                            <FormItem>
                                <Button :disabled="disabled" type="primary" html-type="submit"
                                    class="login-form-button">
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
    background-color: #f4f4f4;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 2;

    .background {
        height: 300px;
        background: url('../assets/images/bg.png');
        display: flex;
        justify-content: center;
        align-items: center;

        .name {
            padding-top: 20px;
            color: #fff;
            letter-spacing: 5px;
            font-size: 36px;
            font-weight: 700;
        }
    }

    .content {
        display: flex;
        flex-direction: column;

        margin: 20px auto;
        width: 60%;
        height: 400px;
        border-radius: 2%;
        box-shadow: 3px 3px 5px 3px hsla(0, 0%, 79%, 0.58);
        background-color: #fff;

        .title {
            flex: 1;
            padding-top: 30px;
            text-align: center;
            font-size: 16px;
        }

        .function {
            flex: 5;
            display: flex;
            padding: 0 50px;

            .register {
                flex: 1;
                margin-right: 10px;

                button {
                    margin-top: 30px;
                    width: 60px;
                    height: 32px;
                }
            }

            .login {
                flex: 1;

                p {
                    font-size: 18px;
                    margin-bottom: 30px;
                }

                .register-form {
                    text-align: center;
                    max-width: 300px;

                    .login-form-button {
                        width: 20%;
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
                    max-width: 300px;

                    .login-form-button {
                        width: 20%;
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