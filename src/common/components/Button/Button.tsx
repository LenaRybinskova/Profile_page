import type { ComponentPropsWithoutRef } from 'react'
import s from './button.module.scss'
import type { ElementType } from 'react'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'button' | 'link'
} & ComponentPropsWithoutRef<T>

export function Button<T extends ElementType = 'button'>({ as, className,  variant = 'button', ...restProps }: ButtonProps<T>) {
  const Component = as ?? 'button'

  return (
    <Component
      className={`${s.button} ${s[variant]} ${className}`}{...restProps} />
  )
}
