<script setup lang="ts">
import { useSignupStore } from '~/store/user/signup'

const { nextPage } = useSignupStore()
const { signupAccount, confirmPassword, isSamePassword } = storeToRefs(useSignupStore())
</script>

<template>
  <div class="min-h-80">
    <p class="pb-2 text-xs text-neutral0">電子信箱</p>
    <input
      v-model="signupAccount.email"
      type="email"
      class="mb-2 w-full rounded-md p-3 text-xs focus:outline-none"
      placeholder="hello@exsample.com"
    />
    <p class="pb-2 text-xs text-neutral0">密碼</p>
    <input
      id="a"
      v-model="signupAccount.password"
      type="password"
      class="mb-2 w-full rounded-md p-3 text-xs focus:outline-none"
      placeholder="請輸入密碼"
      name=""
    />
    <p class="pb-2 text-xs text-neutral0">確認密碼</p>
    <input
      id="as"
      v-model="confirmPassword"
      type="password"
      class="mb-8 w-full rounded-md p-3 text-xs focus:outline-none"
      placeholder="請再輸入一次密碼"
      name=""
    />
    <button
      :disabled="!isSamePassword"
      :class="[
        'mb-6 w-full rounded-md py-3 text-xs transition-all',
        {
          'cursor-not-allowed bg-neutral40 text-neutral60': !isSamePassword
        },
        {
          'cursor-pointer bg-primary100 text-neutral0': isSamePassword
        }
      ]"
      @click="nextPage"
    >
      下一步
    </button>
    <p class="text-xs text-neutral0">
      已經有會員了嗎？
      <NuxtLink class="font-thin text-primary100 underline" to="/login">立即登入</NuxtLink>
    </p>
  </div>
</template>
