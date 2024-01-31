<script setup lang="ts">
import type { ApiResponseNew } from '~/types/api/'
const { data } = useApiFetch<ApiResponseNew>('/home/news')
</script>
<template>
  <section class="flex w-full items-start justify-center bg-primary10 py-16">
    <div class="flex w-full max-w-5xl justify-between">
      <h2 class="text-4xl font-semibold text-primary100">
        最新 <br />
        消息
      </h2>
      <ul class="w-[80%]">
        <li v-for="item in data?.result" :key="item._id" class="w-full">
          <NuxtLink to="/" class="mb-8 flex items-center justify-center">
            <NuxtImg :src="item?.image" class="mr-6 rounded-md" width="350px" />
            <div class="">
              <h3 class="pb-4 text-xl font-bold text-neutral100">{{ item?.title }}</h3>
              <p class="text-xs text-neutral80">
                {{ item?.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
