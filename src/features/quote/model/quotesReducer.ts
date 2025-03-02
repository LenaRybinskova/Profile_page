import { quoteApi } from "../api/quoteApi"
import { Author, Quote } from "@/features/quote/api/quoteApi.types"
import { AuthorAndQuote } from "@/features/profile/api/profileApi.types"
import { resetAllDataAC } from "@/features/auth/model/authSlice"


const initialState = {
  quote: "",
  authorId: "",
  name: ""
}

type State = typeof initialState

const SET_AUTHOR = "SET-AUTHOR"
const SET_QUOTE = "SET-QUOTE"
const RESET_AUTHOR_QUOTE = "RESET-AUTHOR-QUOTE"


// TODO: any типизация
export const quotesReducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case SET_AUTHOR:
      return { ...state, authorId: action.payload.authorId, name: action.payload.name }
    case SET_QUOTE:
      return { ...state, quote: action.payload.quote }
    case RESET_AUTHOR_QUOTE:
      return { ...initialState }
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

export const resetAuthorQuoteAC = () => {
  return {
    type: RESET_AUTHOR_QUOTE
  } as const
}


export type SetAuthorAC = ReturnType<typeof setAuthorAC>
export type SetQuoteAC = ReturnType<typeof setQuoteAC>
export type ResetAuthorQuoteAC = ReturnType<typeof resetAuthorQuoteAC>

export type QuoteActions = SetAuthorAC | SetQuoteAC | ResetAuthorQuoteAC

export const getAuthorTC = (data: any) => (dispatch: any) => {

  return quoteApi.getAuthor(data)
    .then((res) => {
      if (res.success) {
        dispatch(setAuthorAC(res.data))

        const authorId = res.data.authorId
        const authorName = res.data.name

        return quoteApi.getQuote({ token: data.token, authorId, quoteSignal: data.signal })

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

}
