import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { FC } from "react"
import { twMerge } from "tailwind-merge"

type LoaderProps = {
  className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => (
  <ArrowPathIcon className={twMerge("w-8 h-8 animate-spin", className)} />
)