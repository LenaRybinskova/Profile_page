import styles from "./Header.module.scss"
import { useAppDispatch, useAppSelector } from "../../../app/store"
import { logoutTC } from "../../../features/auth/model/authReducer"
import { Button } from "../Button/Button"
import { resetAuthorQuoteAC } from "../../../features/quote/model/quotesReducer"
import { Link, useNavigate } from "react-router-dom"


export const Header = () => {
  const isAuth = useAppSelector<string>((state) => state.auth.email)
  const token = useAppSelector<string>((state) => state.auth.token)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignOut = () => {
    dispatch(logoutTC(token)).then(() => {
      dispatch(resetAuthorQuoteAC())
      navigate("/")
    })
  }

  return (
    <header className={styles.containerHeader}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Button as={Link} to="/" variant="link">About us</Button></li>
          {isAuth
            ? (<>
              <li>
                <Button as={Link} to="/profile" variant="link">Profile</Button>
              </li>
              <li>
                <Button onClick={handleSignOut} variant="link">Sign out</Button>
              </li>
            </>)
            : (<li>
                <Button as={Link} to="/login" variant="link">Sign in</Button>
              </li>
            )}
        </ul>
      </nav>
    </header>

  )
}