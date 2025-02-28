import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Input } from "../../../common/components/Input/Input"
import { Button } from "../../../common/components/Button/index"
import styles from "./SignIn.module.scss"
import { loginTC } from "../model/authSlice"
import { useAppDispatch } from "../../../app/store"

type FormValue = {
  email: string
  password: string
}

// TODO: валидация

export const SignIn = () => {
  const { register, handleSubmit, control, formState: { errors, isValid } } = useForm<FormValue>({ mode: "onBlur" })
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<FormValue> = (data: FormValue) => {
    dispatch(loginTC(data)).then(() => {
      navigate("/profile")
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginContainer}>
      <Input
        name="email"
        label="Email address"
        placeholder="Enter email"
        control={control}
      />
      <Input
        name="password"
        label="Password"
        placeholder="Password"
        control={control}
        variant="password"
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
