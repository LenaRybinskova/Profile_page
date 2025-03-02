export type Login = {
  email: string
  password: string
}

export type BaseResponse<T> = {
  success: boolean
  data: T
}
