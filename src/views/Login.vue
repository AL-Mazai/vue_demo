<template>
    <div class="login">
        <el-form ref="loginForm" :rules="rules" :model="user" label-width="100px" style="max-width: 60vw;min-width: 30vw">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="user.name" placeholder="请输入用户名"/>
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input type="password" autocomplete="off" v-model="user.password" placeholder="请输入密码"/>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="loginForm()">登录</el-button>
                <el-button type="danger" @click="resetForm()">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
    <HelloWorld msg="这是一个HelloWorld组件"></HelloWorld>
</template>

<script>
import axios from 'axios'
import HelloWorld from "@/components/HelloWorld";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login",
    components:{
        // eslint-disable-next-line vue/no-unused-components
        HelloWorld
    },
    data() {
        return {
            user: {
                name: '',
                password: ''
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: '请首先输入用户名',
                        trigger: 'blur'
                    },
                ],
                password: [
                    {
                        required: true,
                        message: '请首先输入密码',
                        trigger: 'blur',
                    },
                    {min: 6, max: 10, message: '密码必须是6-10位', trigger: 'change'}
                ],
            }
        }
    },
    methods: {
        resetForm() {
            this.user.name = '';
            this.user.password = '';
        },
        loginForm() {
            this.$refs.loginForm.validate(async (valid) => {
                if (valid) {
                    axios.post('http://localhost:8084/login', this.$qs.stringify(this.user)
                    ).then(response => {
                        let userInf = response.data;
                        if (userInf === '' || userInf == null || userInf === undefined) {
                            alert('用户名或者密码错误！');
                        } else {
                            // 将返回的数据存储到浏览器的会话存储
                            this.$setSessionStorage('user', userInf);
                            this.$router.push({path: '/about'});
                        }
                    })
                } else {
                    return;
                }
            });
        }
    }
}
</script>

<style scoped>
.login{
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
</style>