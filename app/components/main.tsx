"use client";

import { Playfair_Display } from "next/font/google";
import { GameState, useMainContext } from "../context";
import { Game } from "./game";

const satisfy = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Main() {
  const { gameState, setGameState } = useMainContext();

  let actionLabel = 'Start game';
  let nextState = GameState.Active;

  switch (gameState) {
    case GameState.Pending:
      actionLabel = 'Start game';
      nextState = GameState.Active;
      break;
    case GameState.Active:
      actionLabel = 'Finish game';
      nextState = GameState.Completed;
      break;
    case GameState.Completed:
      actionLabel = 'Start over';
      nextState = GameState.Pending;
      break;
  }

  const handleActionBtn = () => {
    setGameState(nextState);
  }

  return (
    <main className={satisfy.className}>
      <div className="main flex min-h-screen min-w-screen flex-col items-start justify-center p-24 space-y-4 max-w-xl">
        <div className="flex flex-row space-x-3 w-full">
          <h1 className="text-xl font-bold">Poetry Chain</h1>
          <button className="complete-button text-xs p-2" onClick={handleActionBtn}>
            {actionLabel}
          </button>
        </div>

        <Game />
      </div>
    </main>
  );
}
