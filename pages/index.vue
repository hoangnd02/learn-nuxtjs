<template>
  <div>
    <Header/>
    <list-product :products="products"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListProduct from '../components/ListProduct.vue'
import Header from '../components/Header.vue'
import Product from '../type'

@Component({
  components: { ListProduct, Header },})
export default class Index extends Vue {
  products: Product[] = []

  head() {
    return {
      title: "Danh sách sản phẩm"
    };
  }

  async fetch() {
    try {
      const { data } = await this.$axios(
        'http://localhost:3000/api/v2/public/products'
      )
      this.products = data
    } catch (error) {
      return error
    }
  }
}
</script>
