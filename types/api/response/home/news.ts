import type { ApiResponseWrapper } from '../wrapper'

interface New {
  _id: string
  title: string
  description: string
  image: string
  createdAt: string
  updatedAt: string
}

export type ApiResponseNew = ApiResponseWrapper<New[]>
