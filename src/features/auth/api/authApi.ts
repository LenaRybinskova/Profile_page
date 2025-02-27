import type { LoginArgs } from './authApi.types'

export const authApi = {
  login: (data: LoginArgs) =>
    Promise.resolve({
      success: true,
      data: { token: "fb566635a66295da0c8ad3f467c32dcf" }
    }),

  logout: (token: string) =>
    Promise.resolve({
      success: true,
      data: {}
    })
}