// import { useLoginStatusStore } from '~/store/user/login_status'
// const { loginStauts } = storeToRefs(useLoginStatusStore())
export default defineNuxtRouteMiddleware(() => {
  if (process.client) {
    if (!localStorage.getItem('token')) {
      return navigateTo('/')
    }
    // return true
  }

  // if (!localStorage.getItem('token')) {
  //   return navigateTo('/')
  // }
  // if (!loginStauts.value) {
  //   return navigateTo('/')
  // }
})
