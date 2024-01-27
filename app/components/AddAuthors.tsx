"use client";

import { FC } from "react";
import { GameState, useMainContext } from "../context";
import { PreviousLine } from "./previous-line";
import { SubmissionForm } from "./submission-form";
import { AddAuthorForm } from "./add-author-form";

export const AddAuthors: FC = () => {
  const { authors, gameState } = useMainContext();

  if (gameState !== GameState.Pending) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      {authors.length > 0 && (
        <div className="flex flex-col gap-2">
          {authors.map((author, idx) => (
            <PreviousLine
              key={idx}
              index={idx+1}
              label={author}
            />
          ))}
        </div>
      )}

      <AddAuthorForm />
    </div>
  );
}
