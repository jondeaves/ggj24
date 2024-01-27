import { FC } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";

import { Entry } from "../context";

type PreviousLineProps = {
  entry: Entry;
  turn: Number
}

export const PreviousLine: FC<PreviousLineProps> = ({
  entry,
  turn
}) => {
  return (
    <div className="flex flex-row items-center w-full gap-2">
      <p className="font-bold line-text">{turn.toString()}</p>
      <p className="italic">{entry.text}</p>
      <div className="px-2 py-1 text-xs author-tag flex flex-row items-center gap-1 ml-2">
        <PencilIcon className="w-3 h-3" />
        {entry.author}
      </div>
    </div>
  );
}