import styles from "./Header.module.scss"
import { LinkCustom } from "../LinkCustom/index"
import { useAppSelector } from "../../../app/store"
import { useEffect } from "react"


export const Header = () => {

  const isAuth = useAppSelector<string>((state) => state.auth.email)


  return (
    <header className={styles.containerHeader}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <LinkCustom to={"/"}>About us</LinkCustom>
          {isAuth
            ? <><LinkCustom to={"/profile"}>Profile</LinkCustom> <LinkCustom to={"/login"}>Sign out</LinkCustom> </>
            : <LinkCustom to={"/login"}>Sign in</LinkCustom>}
        </ul>
      </nav>
    </header>

  )
}