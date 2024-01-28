import { FC, PropsWithChildren } from "react";
import Link from "next/link";

import { ButtonSize, getButtonClasses } from "./button";

type LinkAsButtonProps = {
  href: string;
  className?: string;
  force?: boolean;
  size?: ButtonSize
} & PropsWithChildren

export const LinkAsButton: FC<LinkAsButtonProps> = ({
  href,
  className,
  children,
  force = false,
  size = 'medium',
}) => {
  const btnClasses = getButtonClasses(size, className)

  if (force) {
    return (
      <a href={href} className={btnClasses}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={btnClasses}>
      {children}
    </Link>
  )
}