<template>
<div class="list-product">
  <product-item v-for="product in products" :key="product.id"  :product="product"/>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from "nuxt-property-decorator"
import Product from "../type";
import ProductItem from './ProductItem.vue';

@Component({
    components: {
      ProductItem
    },
})
export default class ListProduct extends Vue {
  @Prop() products: Product[];
}
</script>

<style lang="css">
.list-product {
    display: flex;
    flex-wrap: wrap;
}
</style>
