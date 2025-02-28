import { Token } from "src/features/auth/api/authApi.types"


export const profileApi = {
  getProfile: (data: Token) => {
    new Promise<Token>((resolve, reject) => {
      if (data.token === "fb566635a66295da0c8ad3f467c32dcf") {
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