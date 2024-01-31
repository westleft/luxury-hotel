import type { ApiResponseWrapper } from './wrapper.ts'

interface Facility {
  title: string
  isProvide: boolean
}

interface Amenity {
  title: string
  isProvide: boolean
}

export interface Room {
  _id: string
  name: string
  description: string
  imageUrl: string
  imageUrlList: string[]
  areaInfo: string
  bedInfo: string
  maxPeople: number
  price: number
  status: number
  facilityInfo: Facility[]
  amenityInfo: Amenity[]
  createdAt: string
  updatedAt: string
}

export type ApiResponseRoom = ApiResponseWrapper<Room>
export type ApiResponseRooms = ApiResponseWrapper<Room[]>
