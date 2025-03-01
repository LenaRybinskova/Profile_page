import { Author, Quote, QuoteArgs } from "../api/quoteApi.types"
import { BaseResponse } from "../../auth/api/authApi.types"


// TODO: reject протипизирвать
export const quoteApi = {
  getQuote: (data: any):Promise<BaseResponse<Quote>> => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.signal.aborted) {
          return reject(new DOMException('Operation aborted', 'AbortError'));
        }
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

  getAuthor: (data:any):Promise<BaseResponse<Author>> => {

    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if (data.signal.aborted) {
          console.log("сигнал сработал")
          return reject(new DOMException('Operation aborted', 'AbortError'));
        }

        if (data.token === "fb566635a66295da0c8ad3f467c32dcf") {
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