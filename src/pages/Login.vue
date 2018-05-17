<template>
	<div class="login-wrap">
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
		</el-form>
        <div class="btn-wrap">
            <el-button @click="login">登录</el-button>
            <!-- <el-button @click="regist">注册</el-button> -->
        </div>
	</div>
</template>
<script>
    export default{
        name: 'Login',
        data(){
            return {
                form: {
                    name: '',
                    password: ''
                }
            }
        },
        methods: {
            login(){}/*,
            regist(){
                this.$router.push('/regist');
            }*/
        }
    }
</script>
<style>
    .login-wrap{
        margin: 80px auto;
        width: 300px;
        text-align: center;
    }
</style>
