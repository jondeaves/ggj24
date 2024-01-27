import { Context, createContext } from "react";

type Entry = {
  text: string;
  author: string;
};

export const MainContext = createContext({
  entries: Array<Entry>(),
  authors: Array<Entry>(),
});
