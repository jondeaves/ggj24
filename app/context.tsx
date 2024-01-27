import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

export enum GameState {
  Pending,
  Active,
  Completed,
}

export type Author = string;

export type Entry = {
  text: string;
  author: Author;
};

export type MainContextState = {
  entries: Entry[];
  setEntries: Dispatch<SetStateAction<Entry[]>>,

  authors: Author[];
  setAuthors: Dispatch<SetStateAction<Author[]>>,

  gameState: GameState;
  setGameState: Dispatch<SetStateAction<GameState>>,
}

export const MainContext = createContext<MainContextState>({
  entries: [],
  setEntries: () => {},

  authors: [],
  setAuthors: () => {},

  gameState: GameState.Pending,
  setGameState: () => {},
});

export const MainContextProvider = (props: PropsWithChildren) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [gameState, setGameState] = useState<GameState>(GameState.Pending);

  return (
    <MainContext.Provider
      value={{
        entries,
        setEntries,
        authors,
        setAuthors,
        gameState,
        setGameState,
      }}
    >
      {props.children}
    </MainContext.Provider>
  )
}

export const useMainContext = () => {
  return useContext(MainContext)
}
