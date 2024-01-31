import { defineStore } from 'pinia'
import type { ApiResponseUserAccount } from '~/types/api/'

export const useLoginStatusStore = defineStore('loginStatus', () => {
  const loginStauts = ref(false)
  // 檢查是否登入
  async function checkLoginStatus() {
    try {
      if (localStorage.getItem('token') === null) return
      const response = await apiFetch<ApiResponseUserAccount>('/user/check')
      const { status } = response
      if (status) {
        loginStauts.value = true
      } else {
        loginStauts.value = false
      }
    } catch (e) {
      throw new Error(String(e))
    }
  }

  return { checkLoginStatus, loginStauts }
})
