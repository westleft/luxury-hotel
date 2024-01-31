import { defineStore } from 'pinia'
import type { ApiResponseUserAccount } from '~/types/api/'
import type { UserAccount } from '~/types/api/response/user/account'

export const useProfileStore = defineStore('profile', () => {
  const userProfile = ref<UserAccount | null>(null)
  async function getUserProfile() {
    try {
      const response = await apiFetch<ApiResponseUserAccount>('/user')
      const { status, result } = response
      if (status) {
        userProfile.value = result
      }
    } catch (e) {
      throw new Error(String(e))
    }
  }

  return { userProfile, getUserProfile }
})
