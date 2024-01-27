import { Playfair_Display } from "next/font/google";
import { ChangeEvent, FC, HTMLInputTypeAttribute, PropsWithChildren } from "react";
import { SubmissionForm } from "../components/submission-form";

const satisfy = Playfair_Display({ subsets: ["latin"], weight: "400" });

function PreviousLine() {
  return (
    <div className="flex flex-row items-center w-full p-2 space-x-2 italic">
      <p>This is the previous line...</p>
      <div className="p-2 text-xs author-tag flex flex-row items-center ">
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
        Maanas
      </div>
    </div>
  );
}

interface TextFieldProps {
  id?: string;
  name?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TextField: FC<TextFieldProps> = (props) => {
  return (
    <div className="flex flex-row w-3/5">
      <input
        className="phrase-input p-2 w-full italic"
        placeholder="Continue"
        {...props}
      />
      <button className="phrase-button text-white">
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
  return (
    <main className={satisfy.className}>
      <div className="main flex min-h-screen min-w-screen flex-col items-start justify-center p-24 space-y-4">
        <div className="flex flex-row">
          <h1 className="text-xl font-bold">Poetry Chain</h1>
        </div>
        <PreviousLine />
        <SubmissionForm />
      </div>
    </main>
  );
}
