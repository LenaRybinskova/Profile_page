import styles from "./Header.module.scss"
import { LinkCustom } from "../LinkCustom/index"

type Props = {
  auth?: boolean
}

export const Header = ({ auth = false }: Props) => {

  // селектор аус


  return (
    <header className={styles.containerHeader}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <LinkCustom to={"/"}>About us</LinkCustom>
          <LinkCustom to={"/login"}>Sign in</LinkCustom>
          {auth ? <LinkCustom to={"/profile"}>Profile</LinkCustom> : ""}
        </ul>
      </nav>
    </header>

  )
}