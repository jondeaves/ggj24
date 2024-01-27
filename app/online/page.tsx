'use client'
import { OnlineContextProvider } from "../components/context/online-context";

import OnlineMain from "../components/online-main";

export default function Online() {
  return (
    <OnlineContextProvider>
      <OnlineMain />
    </OnlineContextProvider>
  )
}
