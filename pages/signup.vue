<script setup lang="ts">
import { useSignupStore } from '~/store/user/signup'

const { currentPage } = storeToRefs(useSignupStore())
</script>

<template>
  <div class="relative flex min-h-dvh flex-col bg-neutral">
    <div class="sticky left-0 top-0 bg-neutral px-20 py-4">
      <NuxtLink class="flex" to="/">
        <img class="w-40" src="~/assets/images/desktop/logo.png" alt="logo" />
      </NuxtLink>
    </div>
    <div class="flex h-full bg-neutral">
      <img
        class="hidden h-full w-1/2 object-cover sm:flex"
        src="~/assets/images/desktop/register.png"
        alt=""
      />
      <div
        class="flex w-full flex-col items-center justify-center bg-[url('~/assets/images/desktop/line4.png')] bg-contain bg-[center_top_8rem] bg-no-repeat sm:w-1/2"
      >
        <div class="flex w-full flex-col justify-start px-4 py-10 sm:w-5/12 sm:px-0 sm:py-0">
          <p class="pb-3 text-xs text-primary100">享樂酒店，誠摯歡迎</p>
          <h2 class="pb-7 text-4xl font-semibold tracking-widest text-neutral0">立即註冊</h2>
          <div class="mb-10 flex w-full items-center justify-between">
            <div class="flex flex-col items-center justify-center">
              <p
                class="mb-2 flex h-3 w-3 items-center justify-center rounded-2xl border-2 border-primary100 bg-primary100 p-2.5 text-xs text-neutral0"
              >
                1
              </p>
              <p class="text-xs text-neutral0">輸入信箱及密碼</p>
            </div>
            <div class="h-0.5 w-2/5 rounded-md bg-neutral60">
              <div class="h-full w-full bg-neutral0"></div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p
                class="mb-2 flex h-3 w-3 items-center justify-center rounded-2xl border-2 p-2.5 text-xs"
                :class="[
                  {
                    'border-primary100 bg-primary100 text-neutral0': currentPage === 'Information'
                  },
                  { 'border-neutral60 text-neutral60': currentPage !== 'Information' }
                ]"
              >
                2
              </p>
              <p
                class="text-xs"
                :class="[
                  { 'text-neutral60': currentPage !== 'Information' },
                  { 'text-neutral0': currentPage === 'Information' }
                ]"
              >
                填寫基本資料
              </p>
            </div>
          </div>
          <TransitionGroup name="list" tag="div">
            <SignupAccount v-if="currentPage === 'Account'" />
            <SignupInformation v-else />
          </TransitionGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
