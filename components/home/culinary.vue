<script setup lang="ts">
import type { ApiResponseCulinary } from '~/types/api/'
const { data } = useApiFetch<ApiResponseCulinary>('/home/culinary')
</script>
<template>
  <section
    class="flex flex-col items-center justify-center bg-primary10 bg-[url('https://i.imgur.com/CLK72Sa.png')] bg-contain bg-left bg-no-repeat py-20 pl-[14%]"
  >
    <div class="w-full">
      <h2 class="pb-8 text-4xl font-semibold text-primary100">
        佳餚 <br />
        美饌
      </h2>
      <Swiper :slides-per-view="3.8" :space-between="20" :loop="true">
        <SwiperSlide v-for="item in data?.result" :key="item._id">
          <div
            class="relative flex h-[450px] flex-col justify-end overflow-hidden rounded-md bg-cover bg-bottom bg-no-repeat"
            :style="{ backgroundImage: `url('${item.image}')` }"
          >
            <div
              class="absolute bottom-0 left-0 flex flex-col bg-neutral0 bg-opacity-20 p-4 backdrop-blur-md"
            >
              <h4 class="flex w-full items-center justify-between pb-4 text-neutral0">
                <span class="text-lg">{{ item.title }}</span>
                <span class="text-xs">{{ item.diningTime }}</span>
              </h4>
              <p class="line-clamp-4 text-xs leading-5 text-neutral0">
                {{ item.description }}
              </p>
            </div>
            <div class="h-24 w-full bg-neutral"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
