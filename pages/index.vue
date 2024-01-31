<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'
</script>

<template>
  <div class="w-full">
    <HomeTop />
    <HomeNews />
    <HomeAbout />
    <HomeRooms />
    <HomeCulinary />
    <HomeTraffic />
    <div
      class="h-40 w-full bg-neutral bg-[url('~/assets/images/desktop/line2.png')] bg-cover bg-no-repeat"
    ></div>
    <NuxtLayout name="footer" />
  </div>
</template>

<style>
.swiper-pagination-bullet-active {
  background-color: #bf9d7d !important;
  width: 28px !important;
}
.swiper-pagination-bullet {
  background-color: #fff;
  height: 2.8px;
  width: 20px;
  border-radius: 8px;
  opacity: 1;
  transition: 0.5s;
}
.swiper-button-next,
.swiper-button-prev {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 100%;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 14px !important;
  color: #4b4b4b;
  font-weight: 900;
}
</style>
