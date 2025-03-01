import { Button } from "../../../common/components/Button/Button"
import styles from "./ModalContant.module.scss"
import { useEffect } from "react"
import { getAuthorTC } from "../model/quotesReducer"
import { useAppDispatch, useAppSelector } from "../../../app/store"
import type { AuthorAndQuote } from "../../profile/api/profileApi.types"

type Props = {
  onClose?: () => void
  callbackQuote: (data: AuthorAndQuote) => void
}

export const ModalContent = ({ onClose, callbackQuote }: Props) => {

  const controller = new AbortController();
  const signal = controller.signal;

  const dispatch = useAppDispatch()
  const token = useAppSelector<string>((state) => state.auth.token)
  const author = useAppSelector<string>((state) => state.quotes.authorId)
  const quote = useAppSelector<string>((state) => state.quotes.quote)

  useEffect(() => {
    const data={token, signal}
    dispatch(getAuthorTC(data)).then((res) => {
        if (onClose) {
          onClose()
        }
        if (res) {
          callbackQuote(res)
        }
      }
    )
  }, [])


  const handleCancel = () => {
    controller.abort();
    if (onClose) {
      onClose()
    }
  }


  return (
    <div className={styles.contentContainer}>
      <h1>Requesting the quote</h1>
      <span>Step 1:Requesting author..{author ? "complete" : ""}</span>
      <span>Step 2:Requesting quote..{quote ? "complete" : ""}</span>
      <Button onClick={handleCancel}>Cancel</Button>
    </div>
  )
}