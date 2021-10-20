<template>
<div class="header">
    <div class="container">
        <div class="header-content">
            <nuxt-link to="/" class="header-logo">
                <img src="" />
            </nuxt-link>
            <form class="header-search">
                <input type="text" />
                <button type="submit">TÌM KIẾM</button>
            </form>
            <div class="header-nav">
                <nuxt-link to="/product-list" class="header-nav-item">
                    DANH MỤC
                </nuxt-link>
                <template v-if="user == ''">
                   <router-link to="/login" class="header-nav-item">
                        <a-button>Đăng nhập</a-button>
                    </router-link>

                    <router-link to="/register" class="header-nav-item">
                        <a-button>Đăng ký</a-button>
                    </router-link>
                </template>
                <template  v-else >
                     <div class="header-nav-item">
                        Xin chào:
                        <router-link to="/profile">
                            {{ user.email }}
                        </router-link>
                    </div>
                    <button @click="logout">Đăng xuất</button>
                </template>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator';
import store from "../controllers/store";

@Component
export default class Header extends Vue {
    user: any = '';

    data() {
      this.user = store.value.user  
      return {user: this.user}
    }

    async logout() {
      await this.$axios.post('http://localhost:3000/api/v2/identity/logout');
      store.value.user = ""
      this.user = store.value.user
    }
}
</script>

<style lang="css">
.ant-layout-header {
    height: 60px;
    line-height: 1.5;
    background-color: #fff
}

.header-content {
    height: 100%;
    padding: 6px 0;
    display: flex;
    justify-content: space-between
}

.header-logo {
    height: 100%;
    display: flex;
    align-items: center
}

.header-logo img {
    height: 100%
}

.header-search {
    width: 350px;
    margin: auto 0;
    display: flex;
    align-items: center
}

.header-search input {
    height: 35px;
    line-height: 35px;
    padding: 0 12px
}
button {
  cursor: pointer
}

.header-search button {
    margin-left: 12px;
    font-size: 12px;
    width: 100px
}

.header-nav {
    display: flex;
    align-items: center
}

.header-nav-item {
    color: #22293a;
    margin: 0 12px;
    font-size: 16px
}

.header-nav-item.router-link-active {
    text-decoration: underline
}

.ant-layout {
    min-height: 100vh
}

a,
a:hover {
    color: inherit
}

a:hover {
    text-decoration: underline
}

.container {
    height: 100%;
    width: 1200px;
    margin: 0 auto
}

.product-list {
    margin: 30px auto
}

.product-list-title {
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 40px
}

.ant-input-error {
    color: #e73b3b
}


</style>
