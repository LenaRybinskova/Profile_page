import { Button } from "../../../common/components/Button/Button"
import { useEffect, useState } from "react"
import { Modal, Request } from "../../../common/components/Modal/Modal"
import { useAppSelector } from "../../../app/store"
import { useNavigate } from "react-router-dom"
import styles from "./Profile.module.scss"

export const Profile = () => {
  const navigate = useNavigate()

  const [isOpenModal, setIsOpenModal] = useState(false)
  const isAuth = useAppSelector<string>((state) => state.auth.email)
  const avatar = useAppSelector<string>((state) => state.auth.avatar)
  const handleUpdateQuote = () => {
    setIsOpenModal(true)
    //откр модалка, пошел запрос за за автором, и потом за цитатой
  }

  useEffect(() => {
    if(!isAuth){
      navigate("/")
    }
  }, [])

  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <img src={avatar} alt={"avatar"} />
        <div>
          <div>Welcome, Alexey!</div>
          <Button onClick={handleUpdateQuote}>Update</Button>
        </div>
        {isOpenModal && <Modal open={isOpenModal}><Request /></Modal>}
      </div>
      <div className={styles.textQuote}> text</div>
    </div>
  )
}
