import type { UseFetchOptions } from '#app'

const ver = 'v1'
const baseURL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:3005/api/${ver}`
    : `https://freyja-qdno.onrender.com/api/${ver}`
const token: string =
  document && localStorage.getItem('token') !== null ? localStorage.getItem('token')! : ''
const headers = {
  authorization: token
}

export const useApiFetch = <T>(url: string, options?: UseFetchOptions<T>) => {
  return useFetch(url, {
    baseURL,
    headers,
    timeout: 5000,
    ...options
  })
}

export const apiFetch = $fetch.create({
  baseURL,
  headers,
  onResponseError(context) {
    const { message } = context.response._data
    useNuxtApp().$toast(message)
  }
})
