import { ChangeEvent, FC, PropsWithChildren, ReactNode } from "react";
import { twMerge } from 'tailwind-merge'
import { Tooltip } from 'flowbite-react';
import React from "react";

export type ButtonSize = 'tiny' | 'small' | 'medium' | 'large'

type ButtonProps = {
  onClick?: (e: ChangeEvent<any>) => void
  type?: 'button' | 'submit' | 'reset'
  label?: string
  Icon?: ReactNode
  disabled?: boolean
  size?: ButtonSize
  disabledTooltip?: string
  [x: string]: any
} & PropsWithChildren

const buttonTheme = {
  primary: `bg-rose-900 hover:bg-rose-800 text-white rounded-lg disabled:bg-[#736a6b] disabled:hover:bg-[#736a6b] disabled:text-neutral-200 disabled:cursor-not-allowed`,
  bare: `text-slate-950`
}

const buttonSize = {
  tiny: 'text-2xs px-2 py-1',
  small: 'text-xs px-4 py-2',
  medium: 'px-4 py-2',
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

  return <>
    {children}
  </>
}

export const getButtonClasses = (
  size: ButtonSize = 'medium',
  className = '',
): string => {
  return twMerge(buttonTheme['primary'], buttonSize[size], 'h-full flex justify-center items-center', className)
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
    <button className={getButtonClasses(size, className)} onClick={onClick} type={type} disabled={disabled} {...rest}>
      {Icon}
      {children}
    </button>
  </ButtonWrapper>
)