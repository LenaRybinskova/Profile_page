import type { Author, Quote } from "../api/quoteApi.types"
import type { BaseResponse } from "../../auth/api/authApi.types"
import { getRandomElement } from "../lib/generator"
import { authorsData, DB } from "../api/DB"


// TODO: reject протипизирвать
export const quoteApi = {
  getQuote: (data: any): Promise<BaseResponse<Quote>> => {
    console.log("второй кенсел",data)
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        const authorQuotes = DB.filter((quote) => quote.authorId === data.authorId)
        const randomQuote = getRandomElement(authorQuotes)

        if (data.quoteSignal.aborted) {
          return reject(new DOMException("Operation aborted", "AbortError"))
        }
        if (data.token === "fb566635a66295da0c8ad3f467c32dcf") {
          resolve({
            success: true,
            data: randomQuote
          })
        } else {
          reject(new Error("Invalid token"))
        }
      }, 5000)
    })
  },

  getAuthor: (data: any): Promise<BaseResponse<Author>> => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomAuthor = getRandomElement(authorsData)

        if (data.signal.aborted) {
          return reject(new DOMException("Operation aborted", "AbortError"))
        }

        if (data.token === "fb566635a66295da0c8ad3f467c32dcf") {
          resolve({
            success: true,
            data: randomAuthor
          })
        } else {
          reject(new Error("Invalid token"))
        }
      }, 5000)
    })
  }
}