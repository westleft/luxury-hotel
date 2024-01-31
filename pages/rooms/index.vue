<script setup lang="ts">
import type { ApiResponseRooms } from '~/types/api/'
import 'swiper/css'
import 'swiper/css/pagination'

const { data } = await useApiFetch<ApiResponseRooms>('/rooms', { method: 'GET' })
</script>

<template>
  <div class="w-full">
    <section class="relative h-dvh w-full">
      <NuxtLayout name="header" :background="'bg-opacity-0'" class="absolute z-10" />
      <div
        class="absolute bottom-1/2 right-1/2 z-10 flex translate-x-1/2 translate-y-1/2 items-center"
      >
        <div class="mr-14">
          <p class="pb-2 text-3xl font-bold tracking-widest text-primary100 text-opacity-80">
            享樂酒店
          </p>
          <p class="mr-28 pb-7 text-lg font-bold tracking-widest text-primary100 text-opacity-80">
            Enjoyment Luxury Hotel
          </p>
          <div class="h-0.5 w-full rounded-xl bg-gradient-to-r from-primary100 to-neutral0"></div>
        </div>
        <h1 class="text-4xl font-bold tracking-widest text-neutral0">客房旅宿</h1>
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
    <section class="flex w-full justify-center bg-primary10 py-20">
      <div class="flex w-full max-w-5xl flex-col">
        <p class="pb-2 text-base font-bold text-neutral80">房型選擇</p>
        <h1 class="pb-16 text-4xl font-bold text-primary100">各種房型，任您挑選</h1>
        <ul class="w-full">
          <li
            v-for="item in data?.result"
            :key="item._id"
            class="mb-12 flex h-80 w-full overflow-hidden rounded-xl"
          >
            <div class="w-3/5">
              <Swiper
                class="h-full"
                :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
                :slides-per-view="1"
                :space-between="0"
                :loop="true"
                :autoplay="{
                  delay: 10000,
                  disableOnInteraction: true
                }"
                :navigation="true"
                :pagination="{
                  clickable: true
                }"
              >
                <SwiperSlide v-for="img in item.imageUrlList" :key="img" class="h-full">
                  <img class="h-full w-full select-none object-cover" :src="img" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="w-2/5 bg-neutral0 p-8">
              <h3 class="pb-2 text-3xl font-bold">{{ item.name }}</h3>
              <p class="pb-6 text-xs text-neutral80">
                {{ item.description }}
              </p>
              <div class="flex w-full pb-7">
                <div class="mr-2 flex min-w-16 flex-col rounded-lg border border-neutral40 p-3">
                  <Icon name="fluent:slide-size-24-filled" color="#BF9D7D" class="mb-1" />
                  <p class="text-xs text-neutral80">{{ item.areaInfo }}</p>
                </div>
                <div class="mr-2 flex min-w-16 flex-col rounded-lg border border-neutral40 p-3">
                  <Icon name="material-symbols:bed" color="#BF9D7D" class="mb-1" />
                  <p class="text-xs text-neutral80">{{ item.bedInfo }}</p>
                </div>
                <div class="flex min-w-16 flex-col rounded-lg border border-neutral40 p-3">
                  <Icon name="material-symbols:person" color="#BF9D7D" class="mb-1" />
                  <p class="text-xs text-neutral80">2-{{ item.maxPeople }} 人</p>
                </div>
              </div>
              <div
                class="mb-8 h-0.5 w-full rounded-xl bg-gradient-to-r from-primary100 to-neutral0"
              ></div>
              <div class=""></div>
              <NuxtLink
                class="flex w-full items-center justify-between text-lg font-bold text-primary100"
                :to="`/rooms/${item._id}`"
              >
                <p>NT$ {{ item.price.toLocaleString() }}</p>
                <Icon name="material-symbols:arrow-forward-rounded" color="#BF9D7D" />
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <NuxtLayout name="footer"></NuxtLayout>
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
