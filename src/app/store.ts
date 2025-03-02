import { configureStore, ThunkDispatch } from "@reduxjs/toolkit"
import { AboutUsActions, publicReducer } from "../features/publicPage/model/publicReducer"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { authReducer } from "../features/auth/model/authReducer"
import { QuoteActions, quotesReducer } from "../features/quote/model/quotesReducer"


export const store = configureStore({
  reducer: {
    public: publicReducer,
    auth: authReducer,
    quotes: quotesReducer
  }
})

export type AppRootStateType = ReturnType<typeof store.getState>;

export type AppRootActions = AboutUsActions | QuoteActions

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AppRootActions>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


// @ts-ignore
window.store = store

/*import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { authReducer } from "../../src/features/auth/model/authSlice"


const rootReducer = combineSlices({auth:authReducer})

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,

    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware();
    },
    preloadedState,
  })

  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

export type AppStore = typeof store

export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
// @ts-ignore
window.store = store;

*/
