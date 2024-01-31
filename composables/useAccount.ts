export function useAccount() {
  const isRememberAccount = document && ref(JSON.parse(localStorage.getItem('isRememberAccount')!))
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
    if (document) {
      localStorage.setItem('isRememberAccount', isChecked.toString())
    }

    if (isChecked) {
      localStorage.setItem('account', account!)
    } else {
      localStorage.removeItem('account')
    }
  }

  function setAccountToStorage(account: string) {
    localStorage.setItem('account', account)
  }

  return { setRememberAccount, isRememberAccount, userAccount, setAccountToStorage }
}
