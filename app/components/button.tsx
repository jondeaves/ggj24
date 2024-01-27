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

type ButtonWrapperProps = {
  disabledTooltip?: string
} & PropsWithChildren

const ButtonWrapper: FC<ButtonWrapperProps> = ({ children, disabledTooltip }) => {
  if (disabledTooltip && disabledTooltip.length > 0) {
    return <Tooltip content={disabledTooltip}>
      {children}
    </Tooltip>
  }

  return <div>
    {children}
  </div>
}

export const getButtonClasses = (
  theme: ButtonTheme = 'primary',
  size: ButtonSize = 'medium',
  className = '',
  disabled = false
): string => {
  return twMerge(buttonTheme[theme], buttonSize[size], 'h-full flex justify-center items-center', disabled ? 'bg-slate-400 cursor-not-allowed' : '', className)
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
}) => (
  <ButtonWrapper disabledTooltip={disabled ? disabledTooltip : undefined}>
    <button className={getButtonClasses(theme, size, className, disabled)} onClick={onClick} type={type} disabled={disabled} {...rest}>
      {Icon}
      {children}
    </button>
  </ButtonWrapper>
)