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

type Props2={
  onClose?: () => void
}

export const ModalContent = ({onClose}:Props2) => {


  const handleCancel=()=>{
    // отмена запросов и закрыть модалку
    if (onClose) {
      onClose()
    }
  }
  return (
    <div >
      <span>Requesting the quote</span>
      <span>Step 1</span>
      <span>Step 2</span>
      <Button onClick={handleCancel}>Cancel</Button>
    </div>
  )
}