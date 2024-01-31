<script setup lang="ts"></script>
<template>
  <div class="flex min-h-dvh w-full flex-col items-center bg-neutral">
    <NuxtLayout name="header" />
    <div class="flex w-full max-w-5xl items-center justify-between py-20">
      <div class="flex w-7/12 flex-col">
        <div class="mb-6 flex w-full items-center justify-start">
          <Icon name="material-symbols-light:check-circle" color="#52DD7E" class="mr-4" size="60" />
          <h2 class="text-4xl font-bold leading-relaxed text-neutral0">
            恭喜，Jessica！<br />您已預訂成功
          </h2>
        </div>
        <p class="mb-12 text-xs text-neutral0">
          我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。
        </p>
        <hr class="mb-12" />
        <section class="w-full">
          <h3 class="mb-6 text-lg text-neutral0">立即查看您的訂單紀錄</h3>
          <NuxtLink
            to=""
            class="mb-12 flex w-44 cursor-pointer justify-center rounded-md bg-primary100 py-4 text-xs text-neutral0"
          >
            前往我的訂單
          </NuxtLink>
        </section>
        <hr class="mb-12" />
        <section class="w-full">
          <h3 class="mb-6 text-lg text-neutral0">訂房人資訊</h3>
          <p class="mb-4 text-xs leading-loose text-neutral0">姓名<br />Jessica Ｗang</p>
          <p class="mb-4 text-xs leading-loose text-neutral0">手機號碼<br />+886 912 345 678</p>
          <p class="mb-4 text-xs leading-loose text-neutral0">電子信箱<br />jessica@sample.com</p>
        </section>
      </div>
      <div class="sticky top-20 w-[35%] rounded-2xl bg-neutral0 p-8 shadow-lg">
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
        <div class="flex w-full flex-wrap rounded-lg border bg-neutral0 p-2">
          <div v-for="i in 12" :key="i" class="mr-2 flex items-center justify-center">
            <Icon name="material-symbols:check-small" color="#BF9D7D" size="24" />
            <p class="pl-1 text-xs text-neutral80">市景</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-40 w-full bg-[url('~/assets/images/desktop/line2.png')] bg-cover bg-no-repeat"
    ></div>
    <NuxtLayout name="footer" />
  </div>
</template>
