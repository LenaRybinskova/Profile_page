import type { GetQuote } from "@/features/quote/api/quoteApi.types"

export const quoteApi = {
  getQuote: (data: GetQuote) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.token === "fb566635a66295da0c8ad3f467c32dcf") {
          resolve({
            success: true,
            data: {
              quoteId: 1,
              authorId: 1,
              quote: "A day without laughter is a day wasted.",
            },
          });
        } else {
          reject(new Error("Invalid token"));
        }
      }, 5000);
    });
  }
}