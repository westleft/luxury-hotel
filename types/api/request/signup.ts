export interface UserSignUpPayload {
  name: string
  email: string
  password: string
  phone: string
  birthday: string
  address: {
    zipcode: number
    detail: string
  }
}
