import { Button } from "@/common/components/Button"
import { useEffect, useState } from "react"
import { Modal } from "@/common/components/Modal"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { useNavigate } from "react-router-dom"
import styles from "./Profile.module.scss"
import type { AuthorAndQuote, Profile } from "@/features/profile/api/profileApi.types"
import { ModalContent } from "@/features/quote/ui"
import { resetAuthorQuoteAC } from "@/features/quote/model/quotesReducer"


export const ProfilePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [concatText, setConcatText] = useState<string>("")
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const isAuth = useAppSelector<string>((state) => state.auth.email)
  const avatar = useAppSelector<string>((state) => state.auth.avatar)
  const profile = useAppSelector<Profile>((state) => state.auth.profile)
  const name = profile.fullname.split(" ")

  const handleUpdateQuote = () => {
    dispatch(resetAuthorQuoteAC())
    setIsOpenModal(true)
  }

  const callbackQuote = (data: AuthorAndQuote) => {
    setConcatText(`${data.authorName}: ${data.quote}`)
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/")
    }
  }, [])

  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <img src={avatar} alt={"avatar"} className={styles.avatar} />
        <div className={styles.welcome}>
          <p>Welcome, {name[0]}!</p>
          <Button onClick={handleUpdateQuote}>Update</Button>
        </div>
        {isOpenModal &&
          <Modal open={isOpenModal}>
            <ModalContent onClose={() => setIsOpenModal(false)} callbackQuote={callbackQuote} />
          </Modal>}
      </div>
      <div className={styles.textQuote}>{concatText}</div>
    </div>
  )
}
