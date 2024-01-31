import { defineStore } from 'pinia'
import type { ApiResponseLogin, UserLoginPayload } from '~/types/api/'

export const useLoginStore = defineStore('login', () => {
  async function login(body: UserLoginPayload) {
    try {
      const response = await apiFetch<ApiResponseLogin>('/user/login', { method: 'POST', body })
      const { status, token } = response
      if (status) {
        setToken(token)
        useNuxtApp().$toast.success('登入成功，3 秒後將回到首頁')
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

  function setToken(token: string) {
    localStorage.setItem('token', token)
  }

  function getToken(): string {
    if (document && localStorage.getItem('token') !== null) {
      return localStorage.getItem('token')!
    }
    return ''
  }

  return { login, getToken }
})
