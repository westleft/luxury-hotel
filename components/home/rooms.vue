<script setup lang="ts">
import type { ApiResponseRooms } from '~/types/api/'
import type { Room } from '~/types/api/response/room'

const { data } = await useApiFetch<ApiResponseRooms>('/rooms')

const currentRoomInfo = computed<Room | undefined>(() => {
  return data.value?.result[currentRoomIndex.value]
})
const currentRoomIndex = ref(0)
</script>
<template>
  <section
    class="bg-to flex bg-neutral bg-[url('~/assets/images/desktop/line2.png')] bg-contain bg-no-repeat py-12"
  >
    <div class="w-1/2 overflow-hidden rounded-e-xl">
      <Swiper
        :modules="[SwiperNavigation, SwiperPagination]"
        :slides-per-view="1"
        :space-between="0"
        :loop="true"
        :pagination="{
          clickable: true
        }"
      >
        <SwiperSlide v-for="item in currentRoomInfo?.imageUrlList" :key="item">
          <img class="h-dvh w-dvw object-cover" :src="item" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="flex w-2/5 flex-col justify-end overflow-hidden px-12 py-8">
      <h4 class="pb-4 text-3xl text-neutral0">{{ currentRoomInfo?.name }}</h4>
      <p class="pb-6 text-xs text-neutral0">
        {{ currentRoomInfo?.description }}
      </p>
      <p class="pb-4 text-xl text-neutral0">NT$ {{ currentRoomInfo?.price }}</p>
      <NuxtLink
        :to="`/rooms/${currentRoomInfo?._id}`"
        class="mb-4 flex w-full items-center justify-end rounded-lg bg-neutral0 px-4 py-6 text-lg font-bold"
      >
        查看更多
        <hr class="border-t-1 ml-4 w-[30%] border-neutral" />
      </NuxtLink>

      <div class="flex w-full justify-end p-2">
        <button @click="currentRoomIndex !== 0 && currentRoomIndex--">
          <Icon name="material-symbols:arrow-back" color="#BF9D7D" size="20" />
        </button>
        <button
          class="ml-4"
          @click="currentRoomIndex + 1 !== data?.result.length && currentRoomIndex++"
        >
          <Icon name="material-symbols:arrow-forward" color="#BF9D7D" size="20" />
        </button>
      </div>
    </div>
  </section>
</template>
