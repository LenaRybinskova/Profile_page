import type { AuthState } from "../authReducer"
import { authReducer, resetAllDataAC, setAuthAC, setProfileAC, setTokenAC } from "../authReducer"


let startState: AuthState

beforeEach(() => {
  startState = {
    email: "",
    password: "",
    token: "",
    avatar: "",
    profile: {
      fullname: "",
      email: ""
    }
  }
})


test("email and password should be set in state authReducer", () => {
  const action = setAuthAC({
    email: "test@example.com",
    password: "qwerty123"
  })

  const endState = authReducer(startState, action)

  expect(endState.email).toBe("test@example.com")
  expect(endState.password).toBe("qwerty123")
})

test("token should be set in state authReducer", () => {
  const action = setTokenAC("token111")

  const endState = authReducer(startState, action)

  expect(endState.token).toBe("token111")
})


test("profile should be set in state authReduce", () => {
  const action = setProfileAC({
    fullname: "Lena",
    email: "Lena@example.com"
  })

  const endState = authReducer(startState, action)

  expect(endState.profile.fullname).toBe("Lena")
  expect(endState.profile.email).toBe("Lena@example.com")
})


test("all data must be cleared in state authReduce", () => {

  const startState2 = {
    email: "Lena@example.com",
    password: "qwerty123",
    token: "token111",
    avatar: "llll",
    profile: {
      fullname: "Lena",
      email: "Lena@example.com"
    }
  }

  const action = resetAllDataAC()

  const endState = authReducer(startState2, action)

  expect(endState.email).toBe(startState.email)
  expect(endState.password).toBe(startState.password)
  expect(endState.token).toBe(startState.token)
  expect(endState.profile.email).toBe(startState.profile.email)
  expect(endState.profile.fullname).toBe(startState.profile.fullname)
})