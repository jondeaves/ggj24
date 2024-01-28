import { FC } from "react";

import { Entry } from "../context";
import { Pill } from "./pill";

type PreviousLineProps = {
  index: Number
  label: string
  supLabel?: string
}

export const PreviousLine: FC<PreviousLineProps> = ({
  index,
  label,
  supLabel
}) => {
  return (
    <div className="flex flex-row items-center w-full gap-2">
      <p className="font-bold text-neutral-500">{index.toString()}</p>
      <p className="italic">{label}</p>

      {supLabel && (
        <Pill className='gap-1 ml-2' size='small'>
          {supLabel}
        </Pill>
      )}
    </div>
  );
}