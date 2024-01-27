"use client";

import { Playfair_Display } from "next/font/google";

import { useOnlineContext } from "../components/context/online-context";
import { SetNameForm } from "./online/set-name-form";

const satisfy = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function OnlineMain() {
  const { name } = useOnlineContext();

  const handleActionBtn = () => {
    console.log('test')
  }

  return (
    <main className={satisfy.className}>
      <div className="main flex min-h-screen min-w-screen flex-col items-start justify-center p-24 space-y-4 max-w-xl">
        <div className="flex flex-row gap-1 w-full items-top">
          <h1 className="text-xl font-bold tracking-wider">Poetry Chain</h1>
          <p className="text-xs">(Online)</p>
        </div>

        <SetNameForm />
      </div>
    </main>
  );
}
