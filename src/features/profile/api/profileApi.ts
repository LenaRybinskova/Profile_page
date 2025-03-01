import type { Token } from "@/features/auth/api/authApi.types"


export const profileApi = {
  getProfile: (token: string) => {
    new Promise((resolve, reject) => {
      if (token === "fb566635a66295da0c8ad3f467c32dcf") {
        resolve({
          success: true,
          data: {
            fullname: "Aleksei K",
            email: "aleksei@example.com"
          }
        })
      } else {
        reject(new Error("Invalid token"))
      }
    })
  },

  getAuthor: (data: Token) => {
    return new Promise((resolve) => {
      if (data.token === "fb566635a66295da0c8ad3f467c32dcf") {
        resolve({
          success: true,
          data: {
            authorId: 1,
            name: "Charlie Chaplin"
          }
        })
      }
    })
  }
}