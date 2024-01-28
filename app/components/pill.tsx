import { FC, PropsWithChildren } from "react";

import { twMerge } from "tailwind-merge";

export type PillSize = 'small' | 'medium' | 'large'

const pillSize = {
  small: 'px-4 py-1 text-xs',
  medium: 'px-6 py-1',
  large: 'px-8 py-1 text-lg '
}

type PillProps = {
  size?: PillSize,
  [x: string]: any
} & PropsWithChildren

export const Pill: FC<PillProps> = ({
  children,
  className,
  size = 'medium',
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-row items-center bg-rose-900 text-white rounded-full",
        pillSize[size],
        className
      )} {...props}
    >
      {children}
    </div>
  );
}