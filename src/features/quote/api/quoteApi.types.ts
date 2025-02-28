export type QuoteArgs = {
  token: string
  authorId: number
}

export type Quote = {
  quoteId: number
  authorId: number
  quote: string
}

export type Author = {
  authorId: number
  name: string
}

