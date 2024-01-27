"use client";

import { Playfair_Display } from "next/font/google";
import Link from "next/link";

import { GameState, useMainContext } from "../context";
import { Game } from "./game";
import { Button, ButtonTheme, getButtonClasses } from "./button";
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
        <div className="flex flex-col md:flex-row gap-4 w-full items-center">
          <h1 className="text-xl font-bold tracking-wider">Poetry Chain</h1>
          <div className="flex flex-row">
            <Button theme={actionTheme} size="small" className={gameState === GameState.Pending ? "rounded-r-none border-r border-r-bg-color" : ""} onClick={handleActionBtn} disabled={actionDisabled} disabledTooltip={actionDisabledMsg}>
              {actionLabel}
            </Button>

            {gameState === GameState.Pending && (
              <Link href="/online" className={getButtonClasses('primary', 'small', 'rounded-l-none')}>
                Play online
              </Link>
            )}
          </div>
        </div>

        <AddAuthors />
        <Game />
      </div>
    </main>
  );
}
