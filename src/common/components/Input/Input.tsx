import React from "react"
import { useController } from "react-hook-form"
import styles from "./Input.module.scss"

type Props = {
  name: string;
  control: any;
  label?: string;
  variant?: "email" | "password"
  placeholder?: string;
  className?: string
};

export const Input = ({ name, control, label, variant = "email", placeholder }: Props) => {
  const { field, fieldState: { error } } = useController({ name, control, defaultValue: "" })

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        {...field}
        id={name}
        placeholder={placeholder}
        className={styles.input}
      />
      {error
        ? (<span className={styles.error}>{error.message}</span>)
        : (variant === "email" && <span className={styles.terms}>We`ll never share your email with anyone else.</span>)}
    </div>
  )
}
