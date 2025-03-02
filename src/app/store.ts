import type { ThunkDispatch } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit"
import type { AboutUsActions} from "@/features/publicPage/model/publicReducer";
import { publicReducer } from "@/features/publicPage/model/publicReducer"
import type { TypedUseSelectorHook } from "react-redux"
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch, useSelector } from "react-redux"
import type { AuthActions} from "@/features/auth/model/authReducer";
import { authReducer } from "@/features/auth/model/authReducer"
import type { QuoteActions} from "@/features/quote/model/quotesReducer";
import { quotesReducer } from "@/features/quote/model/quotesReducer"


export const store = configureStore({
  reducer: {
    public: publicReducer,
    auth: authReducer,
    quotes: quotesReducer
  }
})

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppRootActions = AboutUsActions | QuoteActions | AuthActions

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AppRootActions>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


// @ts-ignore
window.store = store

