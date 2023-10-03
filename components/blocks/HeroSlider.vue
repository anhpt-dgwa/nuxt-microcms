<template>
  <div class="hero-slider">
    <div class="slider-item th-fullpage hero-area hra1">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 text-center">
            <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p>
            <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">The beauty of nature <br> is hidden in details.</h1>
            <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" class="btn" href="/shop">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-item th-fullpage hero-area hra2">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 text-left">
            <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p>
            <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">The beauty of nature <br> is hidden in details.</h1>
            <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" class="btn" href="/shop">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-item th-fullpage hero-area hra3">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 text-right">
            <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p>
            <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">The beauty of nature <br> is hidden in details.</h1>
            <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" class="btn" href="/shop">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .hra1 {
    background-image: url(~/assets/images/slider/slider-1.jpg);
  }
  .hra2 {
    background-image: url(~/assets/images/slider/slider-2.jpg);
  }
  .hra3 {
    background-image: url(~/assets/images/slider/slider-3.jpg);
  }
</style>

<script>
export default {
  mounted() {
    $(function () {
      $('.hero-slider').slick({
        infinite: true,
        arrows: true,
        prevArrow: '<button type=\'button\' class=\'heroSliderArrow prevArrow tf-ion-chevron-left\'></button>',
        nextArrow: '<button type=\'button\' class=\'heroSliderArrow nextArrow tf-ion-chevron-right\'></button>',
        dots: true,
        autoplaySpeed: 7000,
        pauseOnFocus: false,
        pauseOnHover: false
      })
    })
  },
}
</script>