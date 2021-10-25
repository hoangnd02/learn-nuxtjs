<template>
<div class="login container">
    <AuthForm title="Đăng nhập" @submit.prevent="login">
        <AuthInput label="Email" v-model="email" :required="true" />
        <AuthInput v-model="password" label="Password" type="password" :required="true" />
        <div class="auth-form-footer">
            <button type="primary" html-type="submit">Đăng nhập</button>
            <router-link to="/forgot_password">Quên mật khẩu?</router-link>
        </div>
    </AuthForm>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Mixins
} from 'vue-property-decorator'
import AuthForm from '../layouts/Auth/Form.vue'
import AuthInput from '../layouts/Auth/Input.vue'
import { AuthMixin } from '../mixins/auth'

@Component({
    components: {
        AuthForm,
        AuthInput,
    },
})
export default class Login extends Mixins(AuthMixin) {}
</script>

<style lang="less">
.login {
    margin-top: 20px;
}
</style>
