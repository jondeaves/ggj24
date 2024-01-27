import { FC } from "react";

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
    <div className="flex flex-row items-center w-full p-2 space-x-2">
      <p className="font-bold line-text">{turn.toString()}</p>
      <p className="italic">{entry.text}</p>
      <div className="p-2 text-xs author-tag flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
        {entry.author}
      </div>
    </div>
  );
}