import type { ApiResponseWrapper } from '../wrapper'

interface Culinary {
  _id: string
  title: string
  description: string
  diningTime: string
  image: string
  createdAt: string
  updatedAt: string
}

export type ApiResponseCulinary = ApiResponseWrapper<Culinary[]>
