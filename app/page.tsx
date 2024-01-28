'use client'
import { MainContextProvider } from "./context";
import { Suspense } from "react";

import { Info } from "./components/info";
import { Offline } from "./components/offline";
import { FullPageLoader } from "./components/loader";

export default function Home() {
  return (
    <MainContextProvider>
      <Suspense fallback={<FullPageLoader />}>
        <Info />
        <Offline />
      </Suspense>
    </MainContextProvider>
  )
}
