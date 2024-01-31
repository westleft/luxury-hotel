<script setup lang="ts"></script>
<template>
  <footer class="flex w-full items-center justify-center bg-neutralBG py-16">
    <div class="flex w-full max-w-5xl flex-col">
      <div class="mb-8 flex w-full justify-between">
        <div class="">
          <NuxtLink class="mb-8 flex" to="/">
            <img class="w-40" src="~/assets/images/desktop/logo.png" alt="logo" />
          </NuxtLink>
          <div class="flex">
            <a
              href=""
              class="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-neutral0"
            >
              <Icon name="ri:instagram-line" color="#fff" />
            </a>
            <a
              href=""
              class="flex h-8 w-8 items-center justify-center rounded-full border border-neutral0"
            >
              <Icon name="ri:instagram-line" color="#fff" />
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 grid-rows-2">
          <div class="col-span-1 row-span-1 mb-8">
            <p class="mb-2 text-xs text-neutral0">TEL</p>
            <p class="text-xs text-neutral0">+886-7-1234567</p>
          </div>
          <div class="col-span-1 row-span-1 mb-8">
            <p class="mb-2 text-xs text-neutral0">MAIL</p>
            <p class="text-xs text-neutral0">elh@hexschool.com</p>
          </div>
          <div class="col-span-1 row-span-1 mb-8">
            <p class="mb-2 text-xs text-neutral0">FAX</p>
            <p class="text-xs text-neutral0">+886-7-1234567</p>
          </div>
          <div class="col-span-1 row-span-1 mb-8">
            <p class="mb-2 text-xs text-neutral0">WEB</p>
            <p class="text-xs text-neutral0">www.elhhexschool.com.tw</p>
          </div>
        </div>
      </div>
      <div class="flex w-full justify-between">
        <p class="text-xs text-neutral0">806023 台灣高雄市新興區六角路123號</p>
        <p class="text-xs text-neutral0">© 享樂酒店 2023 All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>
