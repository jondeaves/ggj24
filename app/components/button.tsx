import { ChangeEvent, FC, PropsWithChildren, ReactNode } from "react";
import { twMerge } from 'tailwind-merge'
import { Tooltip } from 'flowbite-react';
import React from "react";

export type ButtonTheme = 'primary' | 'success' | 'danger'

export type ButtonSize = 'small' | 'medium' | 'large'

type ButtonProps = {
  onClick?: (e: ChangeEvent<any>) => void
  type?: 'button' | 'submit' | 'reset'
  label?: string
  Icon?: ReactNode
  disabled?: boolean
  theme?: ButtonTheme
  size?: ButtonSize
  disabledTooltip?: string
  [x: string]: any
} & PropsWithChildren

const buttonTheme = {
  primary: 'bg-sky-600 text-white rounded-lg',
  success: 'bg-teal-600 text-white rounded-lg',
  danger: 'bg-red-800 text-white rounded-lg',
}

const buttonSize = {
  small: 'text-xs p-2',
  medium: 'p-2',
  large: ' text-xl p-4'
}

export const Button: FC<ButtonProps> = ({
  onClick,
  Icon,
  type = 'button',
  disabled = false,
  theme = 'primary',
  size = 'medium',
  className,
  children,
  disabledTooltip,
  ...rest
}) => {
  let WrapperElement: any = React.Fragment
  if (disabled && disabledTooltip) {
    WrapperElement = Tooltip
  }

  <Tooltip content="Cannot">
  Testing
</Tooltip>

  return (
    <WrapperElement content={disabledTooltip}>
      <button className={twMerge(buttonTheme[theme], buttonSize[size], className, disabled ? 'bg-slate-400' : '')} onClick={onClick} type={type} disabled={disabled} {...rest}>
        {Icon}
        {children}
      </button>
    </WrapperElement>
  )
}