<template>
<div class="product-item">
    <nuxt-link :to="'/ProductDetail/' + product.id" class="product-item-image">
        <img :src="'https://learn.huuhait.me/api/v2/public/products/'+ product.id +'/image'">
      <div class="box-see"> XEM CHI TIẾT </div>
    </nuxt-link>
    <div class="product-item-details">
      <nuxt-link :to="'/ProductDetail/' + product.id" class="product-item-name">
        {{product.name}}
      </nuxt-link>
      <div class="product-item-price has-discount">
        {{product.price}}
        <span class="default-price">{{product.price}}</span>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from "nuxt-property-decorator"
import Product from "../type";

@Component({
    components: {
    },
})
export default class ProductItem extends Vue {
  @Prop() product: Product;
}
</script>

<style lang="css">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.product-item {
    display: inline-block;
    width: 25%;
    padding: 0 16px
}

.product-item-image {
    position: relative;
    display: block;
    width: 100%;
    height: 250px;
    background-color: #fff;
    overflow: hidden
}

.product-item-image img {
    width: 100%
}
.product-item-image .box-see {
    position: absolute;
    width: 100%;
    height: 35px;
    line-height: 35px;
    background-color: #668eca;
    color: #fff;
    bottom: -35px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    transition: all .3s
}
.product-item-image:hover .box-see {
    bottom: 0
}

.product-item-details {
    padding-top: 12px;
    padding-bottom: 12px
}

.product-item-name {
    font-size: 16px;
    margin-bottom: 8px
}

.product-item-price {
    display: flex;
    font-size: 22px;
    font-weight: 700;
    align-items: center
}

.product-item-price .default-price {
    margin-left: 8px;
    font-size: 14px;
    color: #b7b9bc;
    text-decoration: line-through
}
</style>
