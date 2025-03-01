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

export const Request = () => {
  return (
    <div >
      <span>Requesting the quote</span>
      <span>Step 1</span>
      <span>Step 2</span>
      <Button>Cancel</Button>
    </div>
  )
}