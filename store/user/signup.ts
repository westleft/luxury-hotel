import { defineStore } from 'pinia'
import type { UserSignUpPayload, ApiResponseSignup } from '~/types/api/'

export enum Page {
  Account = 'Account',
  Information = 'Information'
}

export const useSignupStore = defineStore('signup', () => {
  const currentPage = ref(Page.Account)

  const signupAccount = ref<UserSignUpPayload>({
    name: '',
    email: '',
    password: '',
    phone: '',
    birthday: '',
    address: {
      zipcode: 104,
      detail: ''
    }
  })

  // 確認密碼是否相同
  const confirmPassword = ref<string>('')
  const isSamePassword = computed<boolean>(() => {
    if (signupAccount.value.password === '') return false
    if (signupAccount.value.password !== confirmPassword.value) return false

    return true
  })

  const nextPage = (): void => {
    const { password } = signupAccount.value
    if (password.length < 8) {
      useNuxtApp().$toast.error('密碼最少需要 8 個字')
      return
    }
    if (password !== confirmPassword.value) return
    currentPage.value = Page.Information
  }

  async function signUp(data: UserSignUpPayload) {
    try {
      const response = await apiFetch<ApiResponseSignup>('/user/signup', {
        method: 'POST',
        body: data
      })

      const { status, token } = response
      if (status) {
        localStorage.setItem('token', token)
        useNuxtApp().$toast.success('註冊成功，3 秒後將回到首頁')
        setTimeout(() => {
          reloadNuxtApp({
            path: '/'
          })
        }, 3000)
      }
    } catch (e) {
      throw new Error(String(e))
    }
  }

  return {
    currentPage,
    isSamePassword,
    signupAccount,
    confirmPassword,
    signUp,
    nextPage
  }
})
