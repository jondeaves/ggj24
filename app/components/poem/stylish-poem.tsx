import { FC } from "react"

type StylishPoemProps = {
  text: string;
}

export const StylishPoem: FC<StylishPoemProps> = ({ text }) => {
  return (
    <p className="text-center leading-6 sm:text-lg md:text-xl lg:text-2xl lg:leading-10" dangerouslySetInnerHTML={{__html: text}} />
  )
}


