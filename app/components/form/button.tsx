import { ChangeEvent, FC, ReactNode } from "react";

interface ButtonProps {
  onClick: (e: ChangeEvent<any>) => void
  type: 'button' | 'submit' | 'reset'
  label?: string
  Icon?: ReactNode
  [x: string]: any
}

export const Button: FC<ButtonProps> = ({ onClick, type = 'button', Icon, label, ...rest }) => (
  <button className="phrase-button text-white" onClick={onClick} type={type} {...rest}>
    {Icon}
    {label}
  </button>
)