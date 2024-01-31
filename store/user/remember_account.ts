import { defineStore } from 'pinia'

export const useRememberAccountStore = defineStore('rememberAccount', () => {
  const isRememberAccount = ref<boolean>(false)

  const userAccount = computed<string>(() => {
    if (isRememberAccount) {
      return localStorage.getItem('account')!
    } else {
      return ''
    }
  })

  function setRememberAccount(account?: string) {
    const isChecked = (event?.target as HTMLInputElement).checked
    isRememberAccount.value = isChecked

    if (process.client) {
      localStorage.setItem('isRememberAccount', isChecked.toString())
    }

    if (isChecked) {
      localStorage.setItem('account', account!)
    } else {
      localStorage.removeItem('account')
    }
  }

  function setAccountToStorage(account: string) {
    if (!isRememberAccount.value) return
    localStorage.setItem('account', account)
  }

  const rememberedAccount = computed<string>(() => {
    if (
      isRememberAccount &&
      process.client &&
      localStorage.getItem('account')! &&
      localStorage.getItem('account') !== 'null'
    ) {
      return localStorage.getItem('account')!
    } else {
      return ''
    }
  })

  onBeforeMount(() => {
    if (!process.client) return
    isRememberAccount.value = JSON.parse(localStorage.getItem('isRememberAccount')!)
  })

  return {
    setRememberAccount,
    isRememberAccount,
    userAccount,
    setAccountToStorage,
    rememberedAccount
  }
})
