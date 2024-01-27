"use client";

import { Playfair_Display } from "next/font/google";

import { GameState, useMainContext } from "../context";
import { Game } from "./game";
import { Button, ButtonTheme } from "./button";
import { AddAuthors } from "./AddAuthors";

const satisfy = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Main() {
  const { gameState, setGameState, entries, authors } = useMainContext();

  // Defaults should be the Pending state
  let actionTheme: ButtonTheme = 'primary';
  let actionLabel = 'Start game';
  let nextState = GameState.Active;
  let actionDisabled = authors.length === 0;
  let actionDisabledMsg = 'Must have at least one player';

  switch (gameState) {
    case GameState.Active:
      actionTheme = 'success';
      actionLabel = 'Finish game';
      nextState = GameState.Completed;
      actionDisabled = entries.length < authors.length
      actionDisabledMsg = 'Everyone should have a chance to play'
      break;
    case GameState.Completed:
      actionTheme = 'danger';
      actionLabel = 'Start over';
      nextState = GameState.Pending;
      break;
    default:
      break;
  }

  const handleActionBtn = () => {
    setGameState(nextState);
  }

  return (
    <main className={satisfy.className}>
      <div className="main flex min-h-screen min-w-screen flex-col items-start justify-center p-24 space-y-4 max-w-xl">
        <div className="flex flex-row space-x-3 w-full items-center">
          <h1 className="text-xl font-bold">Poetry Chain</h1>
          <Button theme={actionTheme} size="small" onClick={handleActionBtn} disabled={actionDisabled} disabledTooltip={actionDisabledMsg}>
            {actionLabel}
          </Button>
        </div>

        <AddAuthors />
        <Game />
      </div>
    </main>
  );
}
