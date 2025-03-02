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


export const SignIn = () => {
  const { register, handleSubmit, control } = useForm<FormValue>({ mode: "onBlur" })
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<FormValue> = (data: FormValue) => {
    dispatch(loginTC(data)).then(() => {
      navigate("/profile")
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <div className={styles.formContent}>
        <Input
          label="Email address"
          placeholder="Enter email"
          control={control}
          {...register("email", { required: "Email is required" })}
        />
        <Input
          label="Password"
          placeholder="Password"
          control={control}
          variant="password"
          {...register("password", { required: "Email is required" })}
        />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}
