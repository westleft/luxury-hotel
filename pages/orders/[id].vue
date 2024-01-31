<script setup lang="ts">
import type { ApiResponseRoom } from '~/types/api/'

const route = useRoute()
const citys = useCity()

const selectedCity = ref<keyof typeof citys>('台北市')
const towns = computed(() => {
  return citys[selectedCity.value]
})

const { data } = await useApiFetch<ApiResponseRoom>(`/rooms/${route.params.id}`)!
const roomInfo = data && data.value?.result
</script>
<template>
  <div class="flex w-full flex-col items-center justify-center bg-primary10">
    <NuxtLayout name="header" :background="'bg-black'"></NuxtLayout>
    <div class="flex min-h-[100dvh] w-full max-w-5xl items-start justify-between py-20">
      <div class="flex w-7/12 flex-col">
        <NuxtLink
          to="/"
          class="mb-5 flex items-center justify-start text-2xl font-bold text-neutral100"
        >
          <Icon name="material-symbols:arrow-back-ios-new" color="#000" class="mr-4" size="16" />
          確認訂房資訊
        </NuxtLink>
        <h2 class="mb-6 text-xl font-bold text-neutral100">訂房資訊</h2>
        <div class="mb-4 flex w-full items-center justify-between text-xs">
          <h3 class="flex flex-col">
            <span class="h3-before mb-2 flex items-center font-bold">選擇房型</span>
            <p class="font-medium">{{ roomInfo?.name }}</p>
          </h3>
          <NuxtLink to="">編輯</NuxtLink>
        </div>
        <div class="mb-12 flex w-full items-center justify-between text-xs">
          <h3 class="flex flex-col">
            <span class="h3-before mb-2 flex items-center font-bold">房客人數</span>
            <p class="font-medium">{{ roomInfo?.maxPeople }} 人</p>
          </h3>
          <NuxtLink to="">編輯</NuxtLink>
        </div>
        <hr class="mb-8" />
        <div class="flex w-full items-center justify-between pb-8">
          <h2 class="text-xl font-bold text-neutral100">訂房人資訊</h2>
          <button class="text-xs text-primary100 underline">套用會員資料</button>
        </div>
        <p class="pb-2 text-xs font-bold text-neutral100">姓名</p>
        <input type="email" class="form-input mb-6 w-full" placeholder="請輸入姓名" />
        <p class="pb-2 text-xs font-bold text-neutral100">手機號碼</p>
        <input type="tel" class="form-input mb-6 w-full" placeholder="請輸入手機號碼" name="" />
        <p class="pb-2 text-xs font-bold text-neutral100">電子信箱</p>
        <input type="tel" class="form-input mb-6 w-full" placeholder="請輸入電子信箱" name="" />
        <p class="pb-2 text-xs font-bold text-neutral100">地址</p>
        <div class="mb-3 flex w-full justify-between">
          <select v-model="selectedCity" class="w-full rounded-md px-2 py-2.5 text-xs">
            <option v-for="city in Object.keys(citys)" :key="city" :value="city">
              {{ city }}
            </option>
          </select>
          <div class="w-4"></div>
          <select class="w-full rounded-md px-2 py-2.5 text-xs">
            <option v-for="town in towns" :key="town.code" :value="town.code">
              {{ town.name }}
            </option>
          </select>
        </div>
        <input
          id="as"
          type="text"
          class="form-input mb-8 w-full text-xs"
          placeholder="請輸入詳細地址"
          name=""
        />
        <hr class="mb-6" />
        <h2 class="mb-8 text-xl font-bold text-neutral100">房間資訊</h2>
        <section class="mb-6">
          <h3 class="h3-before flex items-center justify-start pb-4 font-bold text-neutral100">
            房型基本資訊
          </h3>
          <div class="flex w-full">
            <div class="mr-2 flex min-w-16 flex-col rounded-lg bg-neutral0 p-3">
              <Icon name="fluent:slide-size-24-filled" color="#BF9D7D" class="mb-1" />
              <p class="text-xs text-neutral80">{{ roomInfo?.areaInfo }} 坪</p>
            </div>
            <div class="mr-2 flex min-w-16 flex-col rounded-lg bg-neutral0 p-3">
              <Icon name="material-symbols:bed" color="#BF9D7D" class="mb-1" />
              <p class="text-xs text-neutral80">{{ roomInfo?.bedInfo }}</p>
            </div>
            <div class="flex min-w-16 flex-col rounded-lg bg-neutral0 p-3">
              <Icon name="material-symbols:person" color="#BF9D7D" class="mb-1" />
              <p class="text-xs text-neutral80">2-{{ roomInfo?.maxPeople }} 人</p>
            </div>
          </div>
        </section>
        <section class="mb-6">
          <h3 class="h3-before flex items-center justify-start pb-4 font-bold text-neutral100">
            房間格局
          </h3>
          <div class="flex w-full flex-wrap rounded-lg bg-neutral0 p-6">
            <div class="mr-2 flex items-center justify-center">
              <Icon name="material-symbols:check-small" color="#BF9D7D" size="24" />
              <p class="pl-1 text-xs text-neutral80">市景</p>
            </div>
          </div>
        </section>
        <section class="mb-6">
          <h3 class="h3-before flex items-center justify-start pb-4 font-bold text-neutral100">
            房內設備
          </h3>
          <div class="flex w-full flex-wrap rounded-lg bg-neutral0 p-6">
            <div
              v-for="item in roomInfo?.facilityInfo"
              :key="item.title"
              class="mr-2 flex items-center justify-center"
            >
              <Icon name="material-symbols:check-small" color="#BF9D7D" size="24" />
              <p class="pl-1 text-xs text-neutral80">{{ item.title }}</p>
            </div>
          </div>
        </section>
        <section class="mb-6">
          <h3 class="h3-before flex items-center justify-start pb-4 font-bold text-neutral100">
            備品提供
          </h3>
          <div class="flex w-full flex-wrap rounded-lg bg-neutral0 p-6">
            <div
              v-for="item in roomInfo?.amenityInfo"
              :key="item.title"
              class="mr-2 flex items-center justify-center"
            >
              <Icon name="material-symbols:check-small" color="#BF9D7D" size="24" />
              <p class="pl-1 text-xs text-neutral80">{{ item.title }}</p>
            </div>
          </div>
        </section>
      </div>
      <div class="sticky top-20 w-[35%] rounded-2xl bg-neutral0 p-8 shadow-lg">
        <NuxtImg class="mb-6 w-full rounded-lg object-cover" :src="roomInfo?.imageUrl"></NuxtImg>

        <p class="pb-4 text-xl font-bold">價格詳情</p>
        <p class="mb-2 flex w-full justify-between">
          <span class="text-xs">NT$ {{ roomInfo?.price }} x 1 晚</span>
          <span class="text-xs">NT$ {{ roomInfo?.price }}</span>
        </p>
        <!-- <p class="mb-4 flex w-full justify-between">
          <span class="text-xs">住宿折扣</span>
          <span class="text-xs">-NT$ 1,000</span>
        </p> -->
        <hr class="pb-4" />
        <p class="mb-6 flex w-full justify-between font-bold">
          <span class="text-xs">總價</span>
          <span class="text-xs">NT$ 19,000</span>
        </p>
        <a
          class="flex w-full justify-center rounded-lg bg-primary100 py-3 text-xs text-neutral0"
          href=""
          >確認訂房</a
        >
      </div>
    </div>
    <!-- <input type="text" class="form-input" /> -->
    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>

<style scoped>
.h3-before::before {
  content: '';
  display: flex;
  height: 20px;
  width: 2px;
  background-color: #bf9d7d;
  margin-right: 8px;
  border-radius: 20px;
}
</style>
