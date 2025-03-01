import { quoteApi } from "../api/quoteApi"
import { Author, Quote } from "@/features/quote/api/quoteApi.types"
import { AuthorAndQuote } from "@/features/profile/api/profileApi.types"


const initialState = {
  quote: "",
  authorId: "",
  name: ""
}

type State = typeof initialState

const SET_AUTHOR = "SET-AUTHOR"
const SET_QUOTE = "SET-QUOTE"


// TODO: any типизация
export const quotesReducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case SET_AUTHOR:
      return { ...state, authorId: action.payload.authorId, name: action.payload.name }
    case SET_QUOTE:
      return { ...state, quote: action.payload.quote }
    default:
      return state
  }
}
export const setAuthorAC = (data: Author) => {
  return {
    type: SET_AUTHOR,
    payload: data
  } as const
}
export const setQuoteAC = (data: Quote) => {
  return {
    type: SET_QUOTE,
    payload: data
  } as const
}


export type SetAuthorAC = ReturnType<typeof setAuthorAC>
export type SetQuoteAC = ReturnType<typeof setQuoteAC>

export type QuoteActions = SetAuthorAC | SetQuoteAC

export const getAuthorTC = (token: string) => (dispatch: any) => {

  return quoteApi.getAuthor(token)
    .then((res) => {
      if (res.success) {
        dispatch(setAuthorAC(res.data))

        const authorId = res.data.authorId
        const authorName = res.data.name

        return quoteApi.getQuote({ token, authorId })

          .then((res) => {
            if (res.success) {
              dispatch(setQuoteAC(res.data))
              const AuthorAndQuote: AuthorAndQuote = {
                authorName,
                quote: res.data.quote
              }
              return AuthorAndQuote
            }
          })
      }
    })
    .catch(() => {
      throw new Error("Failed to fetch info")
    })
}

/*export const getAuthorTC = (token: string) => (dispatch: any) => {

  return quoteApi.getAuthor(token)
    .then((res) => {
      if (res.success) {
        dispatch(setAuthorAC(res.data))
        const authorId = res.data.authorId
        return quoteApi.getQuote({ token, authorId })
      } else {
        throw new Error("Failed token")
      }
    })
    .then(res => {
        if (res.success) {
          dispatch(setQuoteAC(res.data))
          console.log("санка вернула:", res.data)
          return res.data
        }
      }
    )
    .catch(() => {
      throw new Error("Failed to fetch info")
    })
}*/
