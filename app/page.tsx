'use client'
import { MainContextProvider } from "./context";

import Main from "./components/main";

export default function Home() {
  return (
    <MainContextProvider>
      <Main />
    </MainContextProvider>
  )
}
