"use client";

import { FC } from "react";
import { GameState, useMainContext } from "../context";
import { PreviousLine } from "./previous-line";
import { SubmissionForm } from "./submission-form";

export const Game: FC = () => {
  const { entries, gameState } = useMainContext();

  if (gameState !== GameState.Active) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      {entries.length > 0 && (
        <div className="flex flex-col gap-2">
          {entries.map((entry, idx) => (
            <PreviousLine
              key={idx}
              turn={idx+1}
              entry={entry}
            />
          ))}
        </div>
      )}

      {gameState === GameState.Active && (
        <SubmissionForm author="Jon" />
      )}
    </div>
  );
}
