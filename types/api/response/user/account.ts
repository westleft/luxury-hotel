import type { ApiResponseWrapper } from '~/types/api/response/wrapper'

interface Address {
  zipcode: number
  detail: string
  county: string
  city: string
}

export interface UserAccount {
  address: Address
  _id: string
  name: string
  email: string
  phone: string
  birthday: string
  createdAt: string
  updatedAt: string
  id: string
}

export type ApiResponseUserAccount = ApiResponseWrapper<UserAccount>
