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
  authorId: number | null
  name: string
}

export type DataToken = {
  token: string
  signal: AbortSignal
}

