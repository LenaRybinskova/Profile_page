import { Author, Quote, QuoteArgs } from "../api/quoteApi.types"
import { BaseResponse } from "../../auth/api/authApi.types"


// TODO: reject протипизирвать
export const quoteApi = {
  getQuote: (data: QuoteArgs):Promise<BaseResponse<Quote>> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.token === "fb566635a66295da0c8ad3f467c32dcf") {
          resolve({
            success: true,
            data: {
              quoteId: 1,
              authorId: 1,
              quote: "A day without laughter is a day wasted."
            }
          })
        } else {
          reject(new Error("Invalid token"))
        }
      }, 5000)
    })
  },

  getAuthor: (token: string):Promise<BaseResponse<Author>> => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if (token === "fb566635a66295da0c8ad3f467c32dcf") {
          resolve({
            success: true,
            data: {
              authorId: 1,
              name: "Charlie Chaplin"
            }
          })
        }
        else{
          reject(new Error("Invalid token"))
        }
      }, 5000)
    })
  }
}