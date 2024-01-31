import { defineStore } from 'pinia'

export const useLogoutStore = defineStore('logout', () => {
  function logout() {
    localStorage.removeItem('token')
    reloadNuxtApp({
      path: '/'
    })
  }

  return { logout }
})
