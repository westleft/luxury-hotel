<script setup lang="ts"></script>
<template>
  <section class="relative h-dvh w-full">
    <div class="absolute flex h-full w-full flex-col items-center justify-start">
      <NuxtLayout name="header" :background="'bg-opacity-0'" class="z-20" />
      <div
        class="absolute bottom-1/2 right-1/2 z-10 flex w-full translate-x-1/2 translate-y-1/2 items-center justify-between sm:w-[90%]"
      >
        <div class="sm:mr-14">
          <p
            class="pb-2 text-center text-xl font-bold tracking-widest text-primary100 text-opacity-80 sm:text-start sm:text-3xl"
          >
            享樂酒店
          </p>
          <p
            class="text-md pb-7 text-center font-bold tracking-widest text-primary100 text-opacity-80 sm:mr-60 sm:text-start sm:text-lg"
          >
            Enjoyment Luxury Hotel
          </p>
          <div class="h-0.5 w-full rounded-xl bg-gradient-to-r from-primary100 to-neutral0"></div>
        </div>
        <div
          class="border-primary relative w-[80%] rounded-[50px] border bg-neutral0 bg-opacity-20 p-4 backdrop-blur-md sm:w-[50%]"
        >
          <div class="relative h-full w-full -translate-x-12 p-6 sm:-translate-x-20">
            <h1 class="mb-4 text-xl font-semibold text-neutral0 sm:text-7xl sm:leading-snug">
              高雄<br />豪華住宿之選
            </h1>
            <p class="mb-8 text-lg text-neutral0">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
            <button
              class="flex w-full items-center justify-end rounded-lg bg-neutral0 px-4 py-6 text-lg font-bold"
            >
              立即訂房
              <hr class="border-t-1 ml-4 w-[24%] border-neutral" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <Swiper
      :modules="[SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :pagination="{
        clickable: true
      }"
    >
      <SwiperSlide v-for="i in 5" :key="i">
        <div class="absolute z-20 h-dvh w-dvw bg-black opacity-60"></div>
        <img class="h-dvh w-dvw object-cover" src="~/assets/images/desktop/about.png" alt="" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>
