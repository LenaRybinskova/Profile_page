import React from "react"
import { useController } from "react-hook-form"
import styles from "./Input.module.scss"

type Props = {
  name: string;
  control: any;
  label?: string;
  variant?: "email" | "password"
};

export const Input = ({ name, control, label, variant="email" }: Props) => {
  const { field, fieldState: { error } } = useController({ name, control, defaultValue: "" })

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        {...field}
        id={name}
        placeholder={label}
      />
      {variant === "email" ? <span>We`ll never share your email anyone else.</span>:""}
    </div>
  )
}
