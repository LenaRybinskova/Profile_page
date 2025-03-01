import styles from "./Modal.module.scss"
import { ReactNode } from "react"
import { createPortal } from "react-dom"
import { Button } from "../Button/Button"


type Props = {
  open: boolean
  onClose?: () => void
  children: ReactNode
}

export const Modal = ({ onClose, open, children }: Props) => {
  return (
    <>
      {open && (
        <div>
          {createPortal(
            <div className={styles.overlay}>
              {children}
            </div>,
            document.body
          )}
        </div>
      )}
    </>
  )
}



