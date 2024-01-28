"use client";

import { Playfair_Display } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { FC, ReactNode } from "react";

import { GameState, useMainContext } from "../context";
import { Main } from "./main";
import { Game } from "./game";
import { Button } from "./button";
import { AddAuthors } from "./AddAuthors";
import { LinkAsButton } from "./link-as-button";

const satisfy = Playfair_Display({ subsets: ["latin"], weight: "400" });

export const Offline: FC = () => {
  const searchParams = useSearchParams()
  const { gameState, setGameState, entries, authors } = useMainContext();

  const showOnlineLink = searchParams.get('online') === 'true'

  // Defaults should be the Pending state
  let actionLabel = 'Start game';
  let nextState = GameState.Active;
  let actionDisabled = authors.length === 0;
  let actionDisabledMsg = 'Must have at least one player';

  switch (gameState) {
    case GameState.Active:
      actionLabel = 'Finish game';
      nextState = GameState.Completed;
      actionDisabled = entries.length < authors.length
      actionDisabledMsg = 'Everyone should have a chance to play'
      break;
    case GameState.Completed:
      actionLabel = 'Start over';
      nextState = GameState.Pending;
      break;
    default:
      break;
  }

  const handleActionBtn = () => {
    setGameState(nextState);
  }

  const ctaList: ReactNode[] = [
    <Button key="create-btn" size="small" className={showOnlineLink && gameState === GameState.Pending ? "rounded-r-none border-r border-r-bg-color" : ""} onClick={handleActionBtn} disabled={actionDisabled} disabledTooltip={actionDisabledMsg}>
      {actionLabel}
    </Button>,
  ]

  if (showOnlineLink && gameState === GameState.Pending) {
    ctaList.push(
      <LinkAsButton key='online' href="/online" size="small" className="rounded-l-none">
        Play online
      </LinkAsButton>
    )
  }

  return (
    <Main title="Poetry Chain" subTitle={showOnlineLink ? "(Offline)" : undefined} ctaList={ctaList}>
      <>
        <AddAuthors />
        <Game />
      </>
    </Main>
  )
}
