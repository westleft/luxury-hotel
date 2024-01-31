<script setup lang="ts">
import type { Rules } from 'async-validator'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
import { useSignupStore } from '~/store/user/signup'

const { signupAccount } = storeToRefs(useSignupStore())
const { signUp } = useSignupStore()

const citys = useCity()
const selectedCity = ref<keyof typeof citys>('台北市')
const towns = computed(() => {
  return citys[selectedCity.value]
})

const rules: Rules = {
  name: {
    type: 'string',
    required: true
  },
  phone: {
    type: 'string',
    min: 6,
    required: true
  },
  birthday: {
    type: 'date',
    required: true
  },
  address: {
    type: 'object',
    fields: {
      zipcode: { type: 'number', required: true },
      detail: { type: 'string', required: true }
    }
  }
}

const agreePolicy = ref(false)
const { pass } = useAsyncValidator(signupAccount, rules)
</script>

<template>
  <div class="min-h-80">
    <p class="pb-2 text-xs text-neutral0">姓名</p>
    <input
      v-model="signupAccount.name"
      type="text"
      class="mb-2 w-full rounded-md p-3 text-xs focus:outline-none"
      placeholder="請輸入姓名"
    />
    <p class="pb-2 text-xs text-neutral0">手機號碼</p>
    <input
      v-model="signupAccount.phone"
      type="tel"
      class="mb-2 w-full rounded-md p-3 text-xs focus:outline-none"
      placeholder="請輸入手機號碼"
      name=""
    />
    <p class="pb-2 text-xs text-neutral0">生日</p>
    <div class="mb-3 flex w-full justify-between">
      <input
        v-model="signupAccount.birthday"
        class="w-full rounded-md px-2 py-2.5 text-xs"
        type="date"
        min="1900"
        max="2099"
        step="1"
      />
    </div>
    <p class="pb-2 text-xs text-neutral0">地址</p>
    <div class="mb-3 flex w-full justify-between">
      <select v-model="selectedCity" class="w-full rounded-md px-2 py-2.5 text-xs">
        <option v-for="(city, key) in citys" :key="key">{{ key }}</option>
      </select>
      <div class="w-4"></div>
      <select v-model="signupAccount.address.zipcode" class="w-full rounded-md px-2 py-2.5 text-xs">
        <option v-for="town in towns" :key="town.code" :value="town.code">{{ town.name }}</option>
      </select>
    </div>
    <input
      v-model="signupAccount.address.detail"
      type="text"
      class="mb-2 w-full rounded-md p-3 text-xs focus:outline-none"
      placeholder="請輸入詳細地址"
      name=""
    />
    <div class="flex pb-10">
      <label class="flex justify-center" for="remember">
        <input id="remember" v-model="agreePolicy" type="checkbox" name="remember" />
        <p class="pl-1 text-xs text-neutral0">我已閱讀並同意本網站個資使用規範</p>
      </label>
    </div>
    <button
      :disabled="!pass"
      :class="[
        'mb-6 w-full rounded-md py-3 text-xs transition-all',
        {
          'cursor-not-allowed bg-neutral40 text-neutral60': !pass
        },
        {
          'cursor-pointer bg-primary100 text-neutral0': pass
        }
      ]"
      @click="signUp(signupAccount)"
    >
      完成註冊
    </button>
    <p class="text-xs text-neutral0">
      已經有會員了嗎？
      <NuxtLink class="font-thin text-primary100 underline" to="/login">立即登入</NuxtLink>
    </p>
  </div>
</template>
