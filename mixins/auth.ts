import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {},
})
export class AuthMixin extends Vue {
  email = ''
  password = ''

  async login() {
    if (this.email.length === 0) return
    if (this.password.length === 0) return

    const { data } = await this.$axios.post('http://localhost:3000/api/v2/identity/login',
    { email: this.email, password: this.password });
    
    this.$router.push({ path: '/' })
  }
}
