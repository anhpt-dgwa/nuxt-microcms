<template v-if="data">
  <section class="single-product">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <ol class="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li class="active">Single Product</li>
          </ol>
        </div>
        <div class="col-md-6">
          <ol class="product-pagination text-right">
            <li><a href="blog-left-sidebar.html"><i class="tf-ion-ios-arrow-left"></i> Next </a></li>
            <li><a href="blog-left-sidebar.html">Preview <i class="tf-ion-ios-arrow-right"></i></a></li>
          </ol>
        </div>
      </div>
      <div class="row mt-20">
        <div class="col-md-5">
          <div class="single-product-slider">
            <div id='carousel-custom' class='carousel slide' data-ride='carousel'>
              <div class='carousel-outer'>
                <!-- me art lab slider -->
                <div class='carousel-inner '>
                  <div :class="['item', {'active': imgIndex === 0}]" v-for="(img, imgIndex) in data?.gallery" :key="imgIndex">
                    <img
                      :src="img.url"
                      :width="img.width"
                      :height="img.height"
                      v-bind:alt="data.title"
                      class="img-responsive"
                    />
                  </div>
                  
                </div>
                
                <!-- sag sol -->
                <a class='left carousel-control' href='#carousel-custom' data-slide='prev'>
                  <i class="tf-ion-ios-arrow-left"></i>
                </a>
                <a class='right carousel-control' href='#carousel-custom' data-slide='next'>
                  <i class="tf-ion-ios-arrow-right"></i>
                </a>
              </div>
              
              <!-- thumb -->
              <ol class='carousel-indicators mCustomScrollbar meartlab'>
                <li data-target='#carousel-custom' data-slide-to='0' :class="[{'active': imgIndex === 0}]" v-for="(img, imgIndex) in data?.gallery" :key="imgIndex">
                  <img
                    :src="img.url"
                    :width="img.width"
                    :height="img.height"
                    v-bind:alt="data.title"
                  />
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="single-product-details">
            <h2>{{ data.title }}</h2>
            <p class="product-price">{{ data.price }}</p>
            
            <div class="product-description mt-20">{{ data.description }}</div>
            <div class="color-swatches mt-20">
              <span>color:</span>
              <ul>
                <li v-for="(color, colorIndex) in data?.color" :key="colorIndex">
                  <a href="#!" class="swatch-violet">{{ color }}</a>
                </li>
              </ul>
            </div>
            <div class="product-size">
              <span>Size:</span>
              <select class="form-control">
                <option v-for="(size, sizeIndex) in data?.size" :key="sizeIndex">{{ size }}</option>
              </select>
            </div>
            <div class="product-quantity">
              <span>Quantity:</span>
              <div class="product-quantity-slider">
                <input id="product-quantity" type="text" value="0" name="product-quantity">
              </div>
            </div>
            <div class="product-category">
              <span>Categories:</span>
              <ul>
                <li v-for="(cat, catIndex) in data?.categories" :key="catIndex">
                  <a href="product-single.html">{{ cat }}</a>
                </li>
              </ul>
            </div>
            <a href="cart.html" class="btn btn-main mt-20">Add To Cart</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="tabCommon mt-20">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#details" aria-expanded="true">Details</a></li>
            </ul>
            <div class="tab-content patternbg">
              <div id="details" class="tab-pane fade active in">
                <h4>Product Description</h4>
                {{ data.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Product } from "~~/types/product";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Product>({
  endpoint: "products",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
console.log(data)

// document.getElementsByClassName('carousel-inner')[0].firstElementChild.classList.add('active');
</script>

<style lang="scss">
  .post-content {
    img {
      max-width: 100%;
      height: auto;
    }
  }
</style>carousel-custom