import { authApi } from "../api/authApi"
import type { Login } from "@/features/auth/api/authApi.types"
import avatar from "../../../../src/assets/images/avatar.svg"


const initialState = {
  email: "",
  password: "",
  avatar: ""
}

type AuthState = typeof initialState

const SET_AUTH_DATA = "SET-AUTH-DATA"
const SET_AVATAR = "SET_AVATAR"


// TODO: any типизация
export const authReducer = (state: AuthState = initialState, action: any): AuthState => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return { ...state, email: action.payload.email, password: action.payload.password }
    default:
      return state
  }
}
export const setAuthAC = (data: Login) => {
  return {
    type: SET_AUTH_DATA,
    payload: data
  } as const
}

export const setAvatarAC = (avatar: string) => {
  return {
    type: SET_AVATAR,
    payload: avatar
  } as const
}

export type SetAuthAC = ReturnType<typeof setAuthAC>
export type SetAvatarAC = ReturnType<typeof setAvatarAC>
export type AuthActions = SetAuthAC | SetAvatarAC


export const loginTC = (data: Login) => (dispatch: any) => {
  return authApi.login(data)
    .then((res) => {
      if (res.success) {
        dispatch(setAuthAC(data))
        dispatch(setAvatarAC(avatar))
      }
    }).catch(() => {
      throw new Error("Failed to fetch info")
    })

}
