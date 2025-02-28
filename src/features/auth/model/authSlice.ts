import { authApi } from "../api/authApi"
import type { Login } from "@/features/auth/api/authApi.types"


const initialState = {
  email: "",
  password: ""
}

type AuthState = typeof initialState

const SET_AUTH_DATA = "SET-AUTH-DATA"
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

export type SetAuthAC = ReturnType<typeof setAuthAC>


export const loginTC= (data: Login) => (dispatch: any) => {
  return authApi.login(data)
    .then((res) => {
      if (res.success) {
        dispatch(setAuthAC(data))
      }
    }).catch(() => {
    throw new Error("Failed to fetch info")
  })

}
