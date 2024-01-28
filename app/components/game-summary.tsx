import { FC } from "react"
import Image from "next/image";

import { useMainContext } from "../context"
import { formatAuthorList } from "../utils"

export const GameSummary: FC = () => {
  const { authors, entries } = useMainContext()

  return (
    <div className="fixed left-0 top-0 w-full h-full flex flex-col gap-16 items-center justify-center pointer-events-none">
      <div className="flex flex-col gap-2 text-center bg-white px-6 py-8 rounded shadow-md">
        {entries.map((entry, idx) => (
          <p key={idx} className="text-2xl leading-10">{entry.text}</p>
        ))}
      </div>

      <div className="flex flex-col gap-4 items-center">
        <p className="text-lg">Huge thanks to {formatAuthorList(authors)} for the fantastic Poem!</p>

        <Image src="/logo.webp" alt="A hand holding a skull" width={335} height={335} className="w-24 h-24 rounded-full animate-reverse-xslow-spin" />
      </div>
    </div>
  )
}