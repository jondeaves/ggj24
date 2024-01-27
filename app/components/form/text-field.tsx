import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";import { twMerge } from 'tailwind-merge'

type TextFieldProps = {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  [x: string]: any
}

export const TextField: FC<TextFieldProps> = ({
  className,
  ...props
}) => (
  <input
    className={twMerge(`rounded-lg p-2 w-full italic`, className)}
    autoComplete="off"
    {...props}
  />
)