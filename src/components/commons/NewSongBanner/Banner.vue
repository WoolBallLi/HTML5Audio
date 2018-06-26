<!-- banner -->
<template>
  <div class="new-song-banner pad-top">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="banner in banners" :key="banner.id" class="swiper-slide">
          <img width="100%" :src="banner.imgurl" :title="banner.title">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
import Swpier from "swiper";

export default {
  name: "new-song-banner",
  
  props:['banners'],
  methods: {
    bannerSwiper() {
      this.$nextTick(function() {
        new Swpier(".swiper-container", {
          autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          // speed:1000,
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  updated() {
    this.bannerSwiper();
  }
};
</script>
<style lang='scss' scoped>

</style>