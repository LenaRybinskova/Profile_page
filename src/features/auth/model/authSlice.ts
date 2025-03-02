import { authApi } from "../api/authApi"
import { BaseResponse, Login } from "../api/authApi.types"
import { profileApi } from "../../profile/api/profileApi"
import { Profile } from "../../profile/api/profileApi.types"


const initialState = {
  email: "",
  password: "",
  token: "",
  avatar: "",
  profile: {
    fullname: "",
    email: ""
  }
}

type AuthState = typeof initialState

const SET_AUTH_DATA = "SET-AUTH-DATA"
const SET_AVATAR = "SET_AVATAR"
const SET_TOKEN = "SET-TOKEN"
const SET_PROFILE = "SET-PROFILE"
const RESET_ALL_DATA = "RESET-ALL-DATA"

// TODO: any типизация
export const authReducer = (state: AuthState = initialState, action: any): AuthState => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return { ...state, email: action.payload.email, password: action.payload.password }
    case SET_AVATAR:
      return { ...state, avatar: action.payload }
    case SET_TOKEN:
      return { ...state, token: action.payload }
    case SET_PROFILE:
      return { ...state, profile: action.payload }
    case RESET_ALL_DATA:
      return { ...initialState }
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

export const setTokenAC = (token: string) => {
  return {
    type: SET_TOKEN,
    payload: token
  } as const
}

export const setProfileAC = (profile: Profile) => {
  return {
    type: SET_PROFILE,
    payload: profile
  } as const
}

export const resetAllDataAC = () => {
  return {
    type: RESET_ALL_DATA
  } as const
}

export type SetAuthAC = ReturnType<typeof setAuthAC>
export type SetAvatarAC = ReturnType<typeof setAvatarAC>
export type SetTokenAC = ReturnType<typeof setTokenAC>
export type SetProfileAC = ReturnType<typeof setProfileAC>
export type ResetAllDataAC = ReturnType<typeof resetAllDataAC>

export type AuthActions = SetAuthAC | SetAvatarAC | SetTokenAC | SetProfileAC | ResetAllDataAC


export const loginTC = (data: Login) => (dispatch: any) => {
  return authApi.login(data)
    .then((res) => {
      if (res.success) {
        dispatch(setAuthAC(data))
        dispatch(setAvatarAC("/assets/images/avatar.svg"))
        dispatch(setTokenAC(res.data.token))
        return profileApi.getProfile(res.data.token)
      } else {
        throw new Error("Login failed")
      }
    })
    .then((res: BaseResponse<Profile>) => {
        if (res && res.data) {
          dispatch(setProfileAC(res.data))
        }
      }
    )
    .catch(() => {
      throw new Error("Failed to fetch info")
    })
}

export const logoutTC = (token: string) => (dispatch: any) => {
  return authApi.logout(token)
    .then(() => {
    dispatch(resetAllDataAC())
  })
    .catch(() => {
      throw new Error("Failed to fetch info")
    })
}