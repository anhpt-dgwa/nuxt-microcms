<template>
  <div class="col-md-4" v-for="product in products?.contents" :key="product.id">
    <div class="product-item">
      <div class="product-thumb">
        <img
          :src="product.eyecatch?.url"
          :width="product.eyecatch?.width"
          :height="product.eyecatch?.height"
          v-bind:alt="product.title"
          class="img-responsive"
        />
        <div class="preview-meta">
          <ul>
            <li>
              <span data-toggle="modal" :data-target="`#${product.id}`">
                <i class="tf-ion-ios-search-strong"></i>
              </span>
            </li>
            <li>
              <a href="#!"><i class="tf-ion-android-cart"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="product-content">
        <h4><NuxtLink :to="`product/${product.id}`">{{ product.title }}</NuxtLink></h4>
        <p class="price">{{ product.price }}</p>
      </div>
    </div>
  </div>
<!-- Modal -->
<div class="modal product-modal fade" v-for="product in products?.contents" :key="product.id" :id="`${product.id}`">
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <i class="tf-ion-close"></i>
  </button>
    <div class="modal-dialog " role="document">
      <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <div class="modal-image">
                  <img
                    :src="product.eyecatch?.url"
                    :width="product.eyecatch?.width"
                    :height="product.eyecatch?.height"
                    v-bind:alt="product.title"
                    class="img-responsive"
                  />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="product-short-details">
                  <h2 class="product-title">{{ product.title }}</h2>
                  <p class="product-price">{{ product.price }}</p>
                  <p class="product-short-description">
                    {{ product.description }}
                  </p>
                  <a href="cart.html" class="btn btn-main">Add To Cart</a>
                  <NuxtLink :to="`product/${product.id}`" class="btn btn-transparent">View Product Details</NuxtLink>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div><!-- /.modal -->

  
</template>

<script setup lang="ts">
import { Product } from "~~/types/product";
const { data: products } = await useMicroCMSGetList<Product>({
  endpoint: "products",
  queries: { limit: 10 },
});
console.log(products)
</script>

<!-- <script>
export default {
  async asyncData({ $microcms }) {
    const products = await $microcms.get({
      endpoint: 'products',
      queries: { limit: 2 },
    })
    return {
      products,
    }
  },
}
</script> -->