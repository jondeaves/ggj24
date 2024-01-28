"use client";

import { useSearchParams } from "next/navigation";
import { FC, ReactNode, useState } from "react";

import { GameState, PoemStyle, useMainContext } from "../context";
import { Main } from "./main";
import { Game } from "./game";
import { Button } from "./button";
import { AddAuthors } from "./AddAuthors";
import { LinkAsButton } from "./link-as-button";
import { GameSummary } from "./game-summary";
import { StyleModal } from "./style-modal";
import { POEM_STYLES } from "../constants/poem-styles";

export const Offline: FC = () => {
  const [styleIsOpen, setStyleIsOpen] = useState(false);
  const searchParams = useSearchParams()
  const { gameState, setGameState, entries, authors, poemStyle, setPoemStyle } = useMainContext();

  const showOnlineCta = searchParams.get('online') === 'true'

  // Defaults should be the Pending state
  let actionLabel = 'Choose style';
  let nextState = GameState.Style;
  let actionDisabled = authors.length === 0;
  let actionDisabledMsg = 'Must have at least one authors';

  switch (gameState) {
    case GameState.Style:
      actionLabel = 'Start game';
      nextState = GameState.Active;
      actionDisabled = authors.length === 0;
      actionDisabledMsg = 'Must have at least one authors';
      break;
    case GameState.Active:
      actionLabel = 'Finish game';
      nextState = GameState.Completed;
      actionDisabled = entries.length < authors.length
      actionDisabledMsg = 'Everyone should have a chance to play'
      break;
    default:
      break;
  }

  const handleCloseStyle = () => {
    setGameState(GameState.Pending)
    setStyleIsOpen(false)
  }

  const handleSubmitStyle = (style: PoemStyle) => {
    console.log(`Updating to ${style}`)
    setPoemStyle(style);
    setStyleIsOpen(false);
    handleActionBtn()
  }

  const handleActionBtn = () => {
    if (gameState === GameState.Pending) {
      setStyleIsOpen(true)
    }

    console.log(`Up next: ${GameState[nextState]}`)

    setGameState(nextState);
  }

  const ctaList: ReactNode[] = []

  if (showOnlineCta && gameState === GameState.Pending) {
    ctaList.push(
      <LinkAsButton key='online' href="/online" size="medium" className="rounded-r-none">
        Play online
      </LinkAsButton>
    )
  }

  // const matchedStyle = poemStyle && poemStyle !== 'free' ? POEM_STYLES.find(style => style.ident === poemStyle) : undefined;
  // if (gameState === GameState.Active && matchedStyle) {
  //   ctaList.push(
  //     <LinkAsButton key='online' href="/online" size="medium" className="rounded-r-none">
  //       Example of {matchedStyle.title}
  //     </LinkAsButton>
  //   )
  // }

  if (gameState === GameState.Pending) {
    ctaList.push(
      <Button key="create-btn" size="medium" theme="bare" className={showOnlineCta && gameState === GameState.Pending ? "rounded-l-none border-l border-l-bg-color" : ""} onClick={handleActionBtn} disabled={actionDisabled} disabledTooltip={actionDisabledMsg}>
        {actionLabel}
      </Button>
    )
  } else if (gameState !== GameState.Completed) {
    ctaList.push(
      <Button key="create-btn" size="medium" className={showOnlineCta ? "rounded-l-none border-l border-l-bg-color" : ""} onClick={handleActionBtn} disabled={actionDisabled} disabledTooltip={actionDisabledMsg}>
        {actionLabel}
      </Button>
    )
  }

  if (gameState === GameState.Completed) {
    return <GameSummary />
  }

  return (
    <Main title="Poetry Chain" subTitle={showOnlineCta ? "(Offline)" : undefined} ctaList={ctaList}>
      <>
        <AddAuthors />
        <Game />
        <StyleModal isOpen={styleIsOpen} onClose={handleCloseStyle} onSubmit={handleSubmitStyle} />
      </>
    </Main>
  )
}
