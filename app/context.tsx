import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

export enum GameState {
  Pending,
  Style,
  Active,
  Completed,
}

export type Author = string;

export type Entry = {
  text: string;
  author: Author;
};

export type PoemStyle = 'limerick' | 'sonnet' | 'haiku' | 'free'

export type MainContextState = {
  entries: Entry[];
  setEntries: Dispatch<SetStateAction<Entry[]>>,
  addEntry: (input: string) => void,

  authors: Author[];
  setAuthors: Dispatch<SetStateAction<Author[]>>,
  addAuthor: (author: Author) => void,

  gameState: GameState;
  setGameState: (state: GameState) => void,

  poemStyle: PoemStyle;
  setPoemStyle: (style: PoemStyle) => void,
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

  poemStyle: 'free',
  setPoemStyle: () => {},
});

export const MainContextProvider = (props: PropsWithChildren) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [gameState, setGameState] = useState<GameState>(GameState.Pending);
  const [poemStyle, setPoemStyle] = useState<PoemStyle>('free')

  const addEntry = (input: string) => {
    setEntries([
      ...entries,
      {
        author: authors[entries.length % authors.length],
        text: input
      },
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
        poemStyle,
        setPoemStyle
      }}
    >
      {props.children}
    </MainContext.Provider>
  )
}

export const useMainContext = () => {
  return useContext(MainContext)
}
