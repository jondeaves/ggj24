"use client";

import { useSearchParams } from "next/navigation";
import { FC, ReactNode } from "react";

import { GameState, useMainContext } from "../context";
import { Main } from "./main";
import { Game } from "./game";
import { Button } from "./button";
import { AddAuthors } from "./AddAuthors";
import { LinkAsButton } from "./link-as-button";
import { GameSummary } from "./game-summary";

export const Offline: FC = () => {
  const searchParams = useSearchParams()
  const { gameState, setGameState, entries, authors } = useMainContext();

  const showOnlineLink = searchParams.get('online') === 'true'

  // Defaults should be the Pending state
  let actionLabel = 'Start game';
  let nextState = GameState.Active;
  let actionDisabled = authors.length === 0;
  let actionDisabledMsg = 'Must have at least one authors';

  switch (gameState) {
    case GameState.Active:
      actionLabel = 'Finish game';
      nextState = GameState.Completed;
      actionDisabled = entries.length < authors.length
      actionDisabledMsg = 'Everyone should have a chance to play'
      break;
    default:
      break;
  }

  const handleActionBtn = () => {
    setGameState(nextState);
  }

  const ctaList: ReactNode[] = []

  if (showOnlineLink && gameState === GameState.Pending) {
    ctaList.push(
      <LinkAsButton key='online' href="/online" size="medium" className="rounded-r-none">
        Play online
      </LinkAsButton>
    )
  }

  if (gameState !== GameState.Completed) {
    ctaList.push(
      <Button key="create-btn" size="medium" className={showOnlineLink && gameState === GameState.Pending ? "rounded-l-none border-l border-l-bg-color" : ""} onClick={handleActionBtn} disabled={actionDisabled} disabledTooltip={actionDisabledMsg}>
        {actionLabel}
      </Button>
    )
  }

  if (gameState === GameState.Completed) {
    return <GameSummary />
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
