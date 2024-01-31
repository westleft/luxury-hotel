<script setup lang="ts">
import { useProfileStore } from '~/store/user/profile'

definePageMeta({
  middleware: 'auth'
})

const { userProfile } = storeToRefs(useProfileStore())
const route = useRoute()

const pageList = [
  {
    text: '個人資料',
    url: '/user/profile'
  },
  {
    text: '我的訂單',
    url: '/user/orders'
  }
]
</script>
<template>
  <div class="flex w-full flex-col items-center bg-neutral">
    <NuxtLayout name="header" />
    <div
      class="flex h-72 w-full items-center justify-center bg-[url('https://i.imgur.com/XhUbIKg.jpg')] bg-cover bg-no-repeat"
    >
      <div class="flex w-full max-w-5xl items-center justify-start">
        <img class="mr-8 h-20" src="~/assets/images/desktop/user1.png" alt="" />
        <h2 class="text-4xl font-bold text-neutral0">Hello，{{ userProfile?.name }}</h2>
      </div>
    </div>
    <div class="w-full max-w-5xl py-20">
      <ul class="flex">
        <li v-for="item in pageList" :key="item.url" class="px-4 text-xs">
          <NuxtLink
            :to="item.url"
            :class="['text-neutral0', { 'select-item text-primary100': item.url === route.path }]"
            >{{ item.text }}</NuxtLink
          >
        </li>
      </ul>
      <div class="py-10">
        <NuxtPage />
      </div>
    </div>
    <div
      class="h-40 w-full bg-[url('~/assets/images/desktop/line2.png')] bg-cover bg-no-repeat"
    ></div>
    <NuxtLayout name="footer" />
  </div>
</template>

<style scoped>
.select-item::after {
  content: '';
  display: flex;
  margin: 8px auto;
  height: 4px;
  width: 28px;
  background-color: #bf9d7d;
  border-radius: 20px;
}
</style>
