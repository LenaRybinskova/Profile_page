import { Link } from "react-router-dom"
import styles from "../LinkCustom/LinkCustom.module.scss"
import type { ComponentPropsWithoutRef } from "react"

type Props = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<typeof Link>


export const LinkCustom=(props:Props)=>{
  const {children, ...rest} = props;

  return (
    <>
      <li className={styles.listItem}>
        <Link {...rest} className={styles.link}>
          {children}
        </Link>
      </li>
    </>)

}