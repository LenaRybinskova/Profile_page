import { QuotesInitialState, quotesReducer, resetAuthorQuoteAC, setAuthorAC, setQuoteAC } from "../quotesReducer"
import { authReducer, setAuthAC } from "@/features/auth/model/authReducer"

let startState: QuotesInitialState

beforeEach(() => {
  startState = {
    quote: "",
    authorId: null,
    name: ""
  }
})


test("authorId and name should be set in state quotesReducer", () => {
  const action = setAuthorAC({
    authorId: 1,
    name: "Walt Disney"
  })

  const endState = quotesReducer(startState, action)

  expect(endState.authorId).toBe(1)
  expect(endState.name).toBe("Walt Disney")
})

test("quote should be set in state quotesReducer", () => {
  const action = setQuoteAC({
    authorId: 1,
    quoteId: 1,
    quote: "The more you like yourself, the less you are like anyone else, which makes you unique."

  })

  const endState = quotesReducer(startState, action)

  expect(endState.quote).toBe("The more you like yourself, the less you are like anyone else, which makes you unique.")
})

test("name and authorId should be reset in state quotesReducer", () => {
  const startState2 = {
    name: "Walt Disney",
    authorId: 1,
    quote: "The more you like yourself, the less you are like anyone else, which makes you unique."
  }

  const action = resetAuthorQuoteAC()

  const endState = quotesReducer(startState2, action)

  expect(endState.quote).toBe(startState.quote)
  expect(endState.name).toBe(startState.name)
  expect(endState.authorId).toBe(startState.authorId)
})