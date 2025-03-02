import styles from "./Header.module.scss"
import { LinkCustom } from "../LinkCustom/index"
import { useAppDispatch, useAppSelector } from "../../../app/store"
import { logoutTC } from "../../../features/auth/model/authSlice"
import { Button } from "../Button/Button"
import { resetAuthorQuoteAC } from "../../../features/quote/model/quotesReducer"


export const Header = () => {
  const isAuth = useAppSelector<string>((state) => state.auth.email)
  const token = useAppSelector<string>((state) => state.auth.token)
  const dispatch = useAppDispatch()

  const handleSignOut = () => {
    dispatch(logoutTC(token)).then(() => {
      dispatch(resetAuthorQuoteAC())
    })
  }

  return (
    <header className={styles.containerHeader}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <LinkCustom to={"/"}>About us</LinkCustom>
          {isAuth
            ? <><LinkCustom to={"/profile"}>Profile</LinkCustom> <LinkCustom to={"/"}><Button onClick={handleSignOut}>Sign
              out</Button></LinkCustom> </>
            : <LinkCustom to={"/login"}>Sign in</LinkCustom>}
        </ul>
      </nav>
    </header>

  )
}