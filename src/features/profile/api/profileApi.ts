import type { Token } from "@/features/auth/api/authApi.types"
import { Profile } from "./profileApi.types";


export const profileApi = {
  getProfile: (token: string): Promise<{ success: boolean; data: Profile }> => {
    return new Promise((resolve, reject) => {
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

}