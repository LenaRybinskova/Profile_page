import type {ComponentPropsWithoutRef} from 'react';
import styles from "./Button.module.scss"

type Props = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>

export const Button = (props: Props) => {
  const {children, ...rest} = props;

  return (
    <button {...rest} className={styles.button}>{children}</button>
  )
}