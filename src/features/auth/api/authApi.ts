import type { Login, Token } from "./authApi.types"

export const authApi = {
  login: (data: Login) =>
    Promise.resolve({
      success: true,
      data: { token: "fb566635a66295da0c8ad3f467c32dcf" }
    }),

  logout: (data: Token) => {
    return new Promise((resolve) => {
      if (data.token === "fb566635a66295da0c8ad3f467c32dcf") {
        resolve({
          success: true,
          data: {}
        })
      }
    })
  },
}

