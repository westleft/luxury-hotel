<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { UserLoginPayload } from '~/types/api/'
import { useRememberAccountStore } from '~/store/user/remember_account'
import { useLoginStore } from '~/store/user/login'

const { setRememberAccount, setAccountToStorage } = useRememberAccountStore()
const { isRememberAccount, rememberedAccount } = storeToRefs(useRememberAccountStore())

const { login } = useLoginStore()

const account = ref<UserLoginPayload>({
  email: rememberedAccount.value,
  password: ''
})

const hasInputValue = computed(() => {
  return Object.values(account.value).every((item) => item !== '')
})

const forgotMsg = () => {
  useNuxtApp().$toast.error('目前還沒有忘記密碼功能!')
}
</script>

<template>
  <div class="relative flex min-h-dvh flex-col bg-neutral">
    <div class="sticky left-0 top-0 bg-neutral px-4 py-4 sm:px-20">
      <NuxtLink class="flex" to="/">
        <img class="w-40" src="~/assets/images/desktop/logo.png" alt="logo" />
      </NuxtLink>
    </div>
    <div class="flex h-full flex-col bg-neutral sm:flex-row">
      <img
        class="hidden h-full w-1/2 object-cover sm:flex"
        src="~/assets/images/desktop/register.png"
        alt=""
      />
      <div
        class="flex w-full flex-col items-center justify-center bg-[url('~/assets/images/desktop/line4.png')] bg-contain bg-[center_top_8rem] bg-no-repeat sm:w-1/2"
      >
        <div class="flex w-full flex-col justify-start px-4 py-6 sm:w-5/12">
          <p class="pb-3 text-xs text-primary100">享樂酒店，誠摯歡迎</p>
          <h2 class="pb-7 text-4xl font-semibold tracking-widest text-neutral0">立即開始旅程</h2>
          <form @submit.prevent="login(account)">
            <p class="pb-2 text-xs text-neutral0">電子信箱</p>
            <input
              v-model="account.email"
              type="email"
              class="form-input mb-2 w-full"
              placeholder="hello@exsample.com"
              @keyup="setAccountToStorage(account.email)"
            />
            <p class="pb-2 text-xs text-neutral0">密碼</p>
            <input
              v-model="account.password"
              type="password"
              class="form-input mb-4 w-full"
              name=""
            />
            <div class="flex justify-between pb-10">
              <label class="flex justify-center" for="remember">
                <input
                  id="remember"
                  v-model="isRememberAccount"
                  type="checkbox"
                  name="remember"
                  @change="setRememberAccount(account.email)"
                />
                <p class="pl-1 text-xs text-neutral0">記住帳號</p>
              </label>
              <p class="cursor-pointer text-xs text-primary100 underline" @click="forgotMsg">
                忘記密碼
              </p>
            </div>
            <button
              type="submit"
              :disabled="!hasInputValue"
              :class="[
                'mb-6 w-full rounded-md py-3 text-xs transition-all',
                { 'cursor-not-allowed bg-neutral40 text-neutral60': !hasInputValue },
                { 'cursor-pointer bg-primary100 text-neutral0': hasInputValue }
              ]"
            >
              會員登入
            </button>
            <p class="text-xs text-neutral0">
              沒有會員嗎？
              <NuxtLink class="font-thin text-primary100 underline" to="/signup">前往註冊</NuxtLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
~/store/user/remember-account
