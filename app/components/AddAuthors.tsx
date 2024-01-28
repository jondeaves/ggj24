"use client";

import { FC } from "react";
import { GameState, useMainContext } from "../context";
import { PreviousLine } from "./previous-line";
import { AddAuthorForm } from "./add-author-form";
import { formatAuthorList } from "../utils";

export const AddAuthors: FC = () => {
  const { authors, gameState } = useMainContext();

  if (gameState !== GameState.Pending) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <PreviousLine
        supLabel={authors.length > 0 ? "Authors are" : "Who's first?"}
        label={formatAuthorList(authors) || <>&nbsp;</>}
      />

      <AddAuthorForm />
    </div>
  );
}
