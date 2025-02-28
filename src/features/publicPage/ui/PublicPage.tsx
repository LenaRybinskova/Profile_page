import { useEffect } from "react"
import { getAboutUsInfo } from "../model/publicReducer"
import { useAppDispatch, useAppSelector } from "../../../app/store"


export const PublicPage = () => {
  const dispatch = useAppDispatch()
  const aboutUs = useAppSelector<string>((state) => state.public.aboutUs)

  const parsedText = aboutUs.split(/<\/?b>/)

  useEffect(() => {
    dispatch(getAboutUsInfo())
  }, [])

  return (
    <div>
      {parsedText.map((text, index) =>
        index % 2 === 0 ? (<span key={index}>{text}</span>) : <b key={index}>{text}</b>
      )}
    </div>
  )
}