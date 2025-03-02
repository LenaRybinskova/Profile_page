import type { PublicState } from "../publicReducer"
import { getInfoAC, publicReducer } from "../publicReducer"

let startState: PublicState

beforeEach(() => {
  startState = {
    aboutUs: ""
  }
})

test("info aboutUs should be set in state publicReducer", () => {
  const action = getInfoAC("some about")

  const endState = publicReducer(startState, action)

  expect(endState.aboutUs).toBe("some about")
})