"use client";

import { FC } from "react";
import { GameState, useMainContext } from "../context";
import { PreviousLine } from "./previous-line";
import { SubmissionForm } from "./submission-form";

export const Game: FC = () => {
  const { entries, gameState, authors } = useMainContext();

  if (gameState === GameState.Pending) {
    return null;
  }

  let entryCount = entries.length
  if (gameState === GameState.Active && authors.length < 3) {
    entryCount = 0
  } else if (gameState === GameState.Active) {
    entryCount = 1
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2">
        {entryCount > 0 && entries.slice(entries.length - entryCount).map((entry, idx) => (
          <PreviousLine
            key={idx}
            index={entries.length - entryCount + idx + 1}
            label={entry.text}
            supLabel={entry.author}
          />
        ))}

        {entries.length > 0 && authors.length < 3 && (
          <p className="italic text-sm">Hiding messsages because there are less than 3 players</p>
        )}

        {entries.length === 0 && (
          <p className="italic text-sm">Nothing has been added yet</p>
        )}
      </div>

      {gameState === GameState.Active && (
        <SubmissionForm />
      )}
    </div>
  );
}
