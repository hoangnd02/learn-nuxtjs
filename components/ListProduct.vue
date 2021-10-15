<template>
<div class="list-product">
  <product v-for="product in products" :key="product.id"  :product="product"/>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from "nuxt-property-decorator"
import Product from './Product.vue';

@Component({
    components: {
      Product
    },
})
export default class ListProduct extends Vue {
  @Prop() products: any;
}
</script>

<style lang="css">
.list-product {
    display: flex;
    flex-wrap: wrap;
}
</style>
