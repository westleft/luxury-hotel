<script setup lang="ts"></script>
<template>
  <div class="h-fit w-[55%] rounded-xl bg-neutral0 p-8">
    <p class="text-xs text-neutral80">預訂參考編號： HH2302183151222</p>
    <h3 class="pb-6 text-xl font-bold text-neutral100">即將來的行程</h3>
    <NuxtImg
      class="mb-6 w-full rounded-lg object-cover"
      src="https://i.imgur.com/l9g9QtR.png"
    ></NuxtImg>
    <p class="mb-4 text-sm font-bold text-neutral80">尊爵雙人房，1 晚 | 住宿人數：2 位</p>
    <p class="title-before mb-2 flex items-center text-xs text-neutral80">
      入住：6 月 10 日星期二，15:00 可入住
    </p>
    <p class="title-before mb-4 flex items-center text-xs text-neutral80">
      退房：6 月 11 日星期三，12:00 前退房
    </p>
    <p class="mb-6 text-xs text-neutral80">NT$ 10,000</p>
    <hr class="mb-8" />
    <h3 class="title-before mb-4 flex items-center text-xs text-neutral100">房內設備</h3>
    <div class="mb-4 flex w-full flex-wrap rounded-lg border bg-neutral0 p-2">
      <div v-for="i in 12" :key="i" class="mr-2 flex items-center justify-center">
        <Icon name="material-symbols:check-small" color="#BF9D7D" size="24" />
        <p class="pl-1 text-xs text-neutral80">市景</p>
      </div>
    </div>
    <h3 class="title-before mb-4 flex items-center text-xs text-neutral100">備品提供</h3>
    <div class="mb-6 flex w-full flex-wrap rounded-lg border bg-neutral0 p-2">
      <div v-for="i in 12" :key="i" class="mr-2 flex items-center justify-center">
        <Icon name="material-symbols:check-small" color="#BF9D7D" size="24" />
        <p class="pl-1 text-xs text-neutral80">市景</p>
      </div>
    </div>
    <div class="flex w-full justify-between">
      <button
        class="w-[45%] rounded-md border border-primary100 bg-neutral0 py-4 text-xs text-primary100"
      >
        取消預訂
      </button>
      <button class="w-[45%] rounded-md border bg-primary100 py-4 text-xs text-neutral0">
        查看詳情
      </button>
    </div>
  </div>
</template>
