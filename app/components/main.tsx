"use client";

import { Playfair_Display } from "next/font/google";
import { MainContextProvider, useMainContext } from "../context";
import { PlayerSetupModal } from "./player-setup-modal";
import { PreviousLine } from "./previous-line";

const satisfy = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Main() {
  const { entries } = useMainContext();

  return (
    <MainContextProvider>
      <main className={satisfy.className}>
        <div className="main flex min-h-screen min-w-screen flex-col items-start justify-center p-24 space-y-4">
          <div className="flex flex-row space-x-3 items-center">
            <h1 className="text-xl font-bold">Poetry Chain</h1>
            <button className="complete-button text-xs p-2">&#10003; Finish Game</button>
          </div>

          {entries.length > 0 && (
            <PreviousLine
              turn={entries.length}
              entry={entries[entries.length - 1]}
            />
          )}
        </div>
      </main>
      <PlayerSetupModal isOpen={true} />
    </MainContextProvider>
  );
}
