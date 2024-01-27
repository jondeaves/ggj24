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
  addEntry: (entry: Entry) => void,

  authors: Author[];
  setAuthors: Dispatch<SetStateAction<Author[]>>,
  addAuthor: (author: Author) => void,

  gameState: GameState;
  setGameState: (state: GameState) => void,
}

export const MainContext = createContext<MainContextState>({
  entries: [],
  setEntries: () => {},
  addEntry: () => {},

  authors: [],
  setAuthors: () => {},
  addAuthor: () => {},

  gameState: GameState.Pending,
  setGameState: () => {},
});

export const MainContextProvider = (props: PropsWithChildren) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [gameState, setGameState] = useState<GameState>(GameState.Pending);

  const addEntry = (entry: Entry) => {
    setEntries([
      ...entries,
      entry,
    ])
  }

  const addAuthor = (author: Author) => {
    setAuthors([
      ...authors,
      author,
    ])
  }

  const setGameStateWrapper = (state: GameState) => {
    setGameState(state);

    if (state === GameState.Pending) {
      setEntries([]);
      setAuthors([]);
    }
  }

  return (
    <MainContext.Provider
      value={{
        entries,
        setEntries,
        addEntry,
        authors,
        setAuthors,
        addAuthor,
        gameState,
        setGameState: setGameStateWrapper,
      }}
    >
      {props.children}
    </MainContext.Provider>
  )
}

export const useMainContext = () => {
  return useContext(MainContext)
}
