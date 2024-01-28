'use client'
import { OnlineContextProvider } from "../components/context/online-context";

import { Online } from "../components/online";

export default function OnlinePage() {
  return (
    <OnlineContextProvider>
      <Online />
    </OnlineContextProvider>
  )
}
