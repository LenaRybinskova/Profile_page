import { publicApi } from "../api/publicApi"
import { Dispatch } from "react"


const initialState = {
  aboutUs: ""
}

export type PublicState = { aboutUs: string }

const GET_ABOUT_US_INFO = "GET-ABOUT-US-INFO"


export const publicReducer = (state: PublicState = initialState, action: any): PublicState => {
  switch (action.type) {
    case GET_ABOUT_US_INFO:
      return { ...state, aboutUs: action.payload }
    default:
      return state
  }
}
export const getInfoAC = (aboutUs: string) => {
  return {
    type: GET_ABOUT_US_INFO,
    payload: aboutUs
  } as const
}

export type AboutUsActions = ReturnType<typeof getInfoAC>


export const getAboutUsInfo = () => (dispatch: Dispatch<AboutUsActions>) => {
  publicApi.getInfo()
    .then((res) => {
        if (res.success) {
          dispatch(getInfoAC(res.data.info))
        }
      }
    ).catch(() => {
    throw new Error("Failed to fetch info")
  })
}
