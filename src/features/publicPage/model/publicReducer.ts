import { publicApi } from "../api/publicApi"
import type { Reducer } from "@reduxjs/toolkit";



const initialState = {
  aboutUs: "",
};

type PublicState = {aboutUs: string}

const GET_ABOUT_US_INFO = "GET-ABOUT-US-INFO";


// TODO: action:any нормально протипиз
export const publicReducer = (state:PublicState = initialState, action:any):PublicState => {
  switch (action.type) {
    case GET_ABOUT_US_INFO:
      return { ...state, aboutUs: action.payload };
    default:
      return state;
  }
};
export const getInfoAC = (aboutUs: string) => {
  return {
    type: GET_ABOUT_US_INFO,
    payload: aboutUs
  } as const
}

export type GetAboutUsInfo= ReturnType< typeof getInfoAC>


export const getAboutUsInfo = () => (dispatch: any) => {
  publicApi.getInfo()
    .then((res) => {
        if (res.success) {
          dispatch(getInfoAC(res.data.info))
        }
      }
    ).catch(() => {
    throw new Error("Failed to fetch info")
  })
}
