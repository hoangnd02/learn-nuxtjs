<template>
<div>
    <nuxt-link to="../">Quay lai</nuxt-link>
<div class="product-info">
    <div class="product-info-content container">
        <div class="product-info-image"><img :src="'https://learn.huuhait.me/api/v2/public/products/'+ product.id +'/image'"></div>
        <div class="product-info-details">
            <div class="product-info-details-title">{{product.name}}</div>
            <div class="product-info-details-price">{{product.price}}đ <span class="discount-price">85.000 đ</span></div>
            <div class="product-info-details-stock-left"> Tình trạng: <span>Còn hàng</span></div>
            <div class="product-info-details-view-count"> Lượt xem: <span>{{product.view_count}}</span></div><button class="product-info-button">THÊM VÀO GIỎ</button>
            <div class="product-info-description">
                <div class="product-info-description-title"> Mô tả: </div>
                <div class="product-info-description-content">{{product.description}}</div>
            </div>
        </div>
    </div>
</div>
</div>

</template>

<script lang="ts">
import {
    Component,
    Vue
} from "nuxt-property-decorator"
import Product from '../../type/index'

@Component({})
export default class id extends Vue {
    product: Product = { 
        id: 0, 
        type: "", 
        name: "", 
        description: "", 
        price: 0, 
        "discount_percentage": "", 
        "stock_left": "", 
        special: true, 
        "view_count": 0
    }
    
    async fetch() {
        try {
            const {
                data
            } = await this.$axios(`http://localhost:3000/api/v2/public/products/${this.$route.params.id}`)
            this.product = data
        } catch (error) {
            return error
        }
    }

}
</script>

<style lang="css">
.product-info {
    margin: 20px auto
}

.product-info-content {
    display: flex
}

.product-info-image {
    width: 625px
}

.product-info-image img {
    width: 100%
}

.product-info-description {
    margin-top: 24px
}

.product-info-description-title {
    font-size: 24px;
    margin-bottom: 12px;
    font-weight: 700
}

.product-info-description-content {
    font-size: 16px
}

.product-info-comment {
    margin-top: 50px;
    margin-bottom: 20px
}

.product-info-comment-title {
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 16px
}

.product-info-comment .ant-comment-inner {
    padding: 0;
    margin-bottom: 16px
}

.product-info-comment .ant-comment-content-author>* {
    font-size: 14px;
    line-height: 24px
}

.product-info-comment .ant-comment-content-detail p {
    font-size: 16px
}

.product-info-comment button {
    margin-top: 16px
}

.product-info-comment-note {
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    color: #007aff
}

.product-info-details {
    width: calc(100% - 625px);
    padding-left: 20px
}

.product-info-details-title {
    font-size: 30px;
    margin: 3.5px 0 7px
}

.product-info-details-price {
    color: #a0122b;
    font-size: 26px;
    font-weight: 700;
    display: flex;
    margin-bottom: 8px;
    align-items: center
}

.product-info-details-price .discount-price {
    margin-left: 12px;
    font-size: 18px;
    color: #7c8188;
    text-decoration: line-through
}

.product-info-details-stock-left,
.product-info-details-view-count {
    margin-bottom: 12px;
    font-size: 16px
}

.product-info-details-stock-left span,
.product-info-details-view-count span {
    font-weight: 500
}

.product-info-button {
    max-width: 250px;
    width: 100%;
    display: block;
    padding: 0;
    font-weight: 600;
    background: #007aff;
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    line-height: 36px;
    text-align: center;
    letter-spacing: 2px;
    border-radius: 3px;
    border: 2px solid #007aff
}

.product-info-button:disabled {
    background: #65696b;
    border: none
}
</style>
