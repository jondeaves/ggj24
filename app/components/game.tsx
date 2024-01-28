"use client";

import { FC } from "react";

import { GameState, useMainContext } from "../context";
import { PreviousLine } from "./previous-line";
import { SubmissionForm } from "./submission-form";

export const Game: FC = () => {
  const { authors, entries, gameState } = useMainContext();

  if (gameState === GameState.Pending) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        {entries.slice(entries.length - 1).map((entry, idx) => (
          <PreviousLine
            key={idx}
            label={`“${entry.text}”`}
            supLabel={`${entry.author} previously said `}
            emphasise={true}
          />
        ))}

        {entries.length === 0 && (
          <PreviousLine
            label={authors.length === 1 ? "You got this!" : "You're up first"}
            emphasise={true}
          />
        )}
      </div>

      {gameState === GameState.Active && (
        <SubmissionForm />
      )}
    </div>
  );
}
