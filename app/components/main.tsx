"use client";

import { Playfair_Display } from "next/font/google";
import { useContext, useState } from "react";
import { MainContext } from "../context";

const satisfy = Playfair_Display({ subsets: ["latin"], weight: "400" });

function PreviousLine({ entry, turn }: { entry: any; turn: Number }) {
  return (
    <div className="flex flex-row items-center w-full p-2 space-x-2">
      <p className="font-bold line-text">{turn.toString()}</p>
      <p className="italic">{entry.text}</p>
      <div className="p-2 text-xs author-tag flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
        {entry.author}
      </div>
    </div>
  );
}

function TextField({ addEntry }: { addEntry: Function }) {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-row w-3/5">
      <input
        className="phrase-input p-2 w-full italic"
        placeholder="Continue"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => {
          console.log(e.key);
          if (e.key == "Enter") {
            addEntry(text);
          }
        }}
      />
      <button
        className="phrase-button text-white"
        onClick={() => {
          addEntry(text);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className="w-8 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>
    </div>
  );
}

export default function Main() {
  const [entries, setEntries] = useState([
    { text: "A default first line", author: "Bot" },
    { text: "This is a game", author: "Maanas" },
  ]);
  const [authors, setAuthors] = useState(["Maanas", "Jon"]);

  return (
    <MainContext.Provider value={{ entries, authors }}>
      <main className={satisfy.className}>
        <div className="main flex min-h-screen min-w-screen flex-col items-start justify-center p-24 space-y-4">
          <div className="flex flex-row">
            <h1 className="text-xl font-bold">Poetry Chain</h1>
          </div>
          <PreviousLine
            turn={entries.length}
            entry={entries[entries.length - 1]}
          />
          <TextField
            addEntry={(text: string) => {
              setEntries([
                ...entries,
                {
                  text,
                  author: authors[entries.length % authors.length],
                },
              ]);
            }}
          />
        </div>
      </main>
    </MainContext.Provider>
  );
}
