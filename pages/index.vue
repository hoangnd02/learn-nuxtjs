<template>
  <div>
    <list-product :products="products"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListProduct from '../components/ListProduct.vue'
import product from '../type'

@Component({
  components: { ListProduct },})
export default class Index extends Vue {
  products: product[] = []

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
