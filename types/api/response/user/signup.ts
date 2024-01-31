import type { UserAccount } from './account'
import type { ApiResponseWrapper } from '~/types/api/response/wrapper'

export interface ApiResponseSignup extends ApiResponseWrapper<UserAccount> {
  token: string
}
