export type Login = {
  email: string
  password: string
}

export type BaseResponse<T> = {
  success: boolean
  data: T
}
export type Message = {
  message: string
}

export type Token = {
  token: string
}