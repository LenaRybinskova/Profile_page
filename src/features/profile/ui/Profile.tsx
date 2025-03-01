import { Button } from "../../../common/components/Button/Button"
import { useEffect, useState } from "react"
import { Modal } from "../../../common/components/Modal/Modal"
import { useAppSelector } from "../../../app/store"
import { useNavigate } from "react-router-dom"
import styles from "./Profile.module.scss"
import { AuthorAndQuote, Profile } from "../../profile/api/profileApi.types"
import { ModalContent } from "../../quote/ui/ModalContent"


export const ProfilePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [concateText, setConcateText] = useState<string>("")
  const navigate = useNavigate()


  const isAuth = useAppSelector<string>((state) => state.auth.email)
  const avatar = useAppSelector<string>((state) => state.auth.avatar)
  const profile = useAppSelector<Profile>((state) => state.auth.profile)


  const handleUpdateQuote = () => {
    setIsOpenModal(true)
  }

  const callbackQuote = (data: AuthorAndQuote) => {
    setConcateText(`${data.authorName}: ${data.quote}`)
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/")
    }
  }, [])

  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <img src={avatar} alt={"avatar"} />
        <div>
          <div>Welcome,{profile.fullname}!</div>
          <Button onClick={handleUpdateQuote}>Update</Button>
        </div>
        {isOpenModal &&
          <Modal open={isOpenModal}>
            <ModalContent onClose={() => setIsOpenModal(false)} callbackQuote={callbackQuote} />
          </Modal>}
      </div>
      <div className={styles.textQuote}>{concateText}</div>
    </div>
  )
}
