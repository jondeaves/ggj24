import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { FC } from "react"
import Image from "next/image";
import { twMerge } from "tailwind-merge"

type LoaderProps = {
  className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => (
  <ArrowPathIcon className={twMerge("w-8 h-8 animate-spin", className)} />
)

export const FullPageLoader: FC<LoaderProps> = ({ className }) => (
  <div className="fixed left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40">
    <Image src="/logo.webp" alt="A hand holding a skull" width={192} height={192} className={twMerge("w-48 h-48 rounded-full animate-reverse-slow-spin", className)} />
  </div>
)