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
import { Component, Vue } from 'vue-property-decorator';
import AuthForm from '../layouts/Auth/Form.vue';
import AuthInput from '../layouts/Auth/Input.vue';
import store from "../controllers/store";

@Component({
  components: {
    AuthForm,
    AuthInput,
  },
})
export default class Login extends Vue {
  email = '';
  password = '';

  async login() {
    if (this.email.length === 0) return;
    if (this.password.length === 0) return;

    const { data } = await this.$axios.post('http://localhost:3000/api/v2/identity/login', { email: this.email, password: this.password });
    if(data) {
      store.value.user = data
      this.$router.push({ path: '/'})
    }
  }
}
</script>

<style lang="less">
.login {
  margin-top: 20px;
}
</style>
