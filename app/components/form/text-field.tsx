import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";import { twMerge } from 'tailwind-merge'

type TextFieldProps = {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  [x: string]: any
}

export const TextField: FC<TextFieldProps> = ({
  className,
  disabled,
  ...props
}) => (
  <input
    className={twMerge(`rounded-lg p-2 w-full italic`, disabled ? 'bg-gray-100 cursor-not-allowed' : '', className)}
    autoComplete="off"
    disabled={disabled}
    {...props}
  />
)