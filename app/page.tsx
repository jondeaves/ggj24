'use client'
import { MainContextProvider } from "./context";

import { Info } from "./components/info";
import { Offline } from "./components/offline";

export default function Home() {
  return (
    <MainContextProvider>
      <Info />
      <Offline />
    </MainContextProvider>
  )
}
