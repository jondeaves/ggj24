"use client";

import { Playfair_Display } from "next/font/google";
import React, { FC, PropsWithChildren, ReactNode } from "react";

import { GameState } from "../context";
import { Game } from "./game";
import { Button } from "./button";
import { AddAuthors } from "./AddAuthors";
import { LinkAsButton } from "./link-as-button";

const satisfy = Playfair_Display({ subsets: ["latin"], weight: "400" });

type MainProps = {
  title: string;
  subTitle?: string;
  ctaList?: ReactNode[]
} & PropsWithChildren

export const Main: FC<MainProps> = ({
  title,
  subTitle,
  ctaList = [],
  children
}) => (
  <main className={satisfy.className}>
    <div className="main flex min-h-screen min-w-screen flex-col items-start justify-center space-y-4 max-w-xl p-8 xs:p-16 sm:p-24">
      <div className="flex flex-row gap-1">
        <h1 className="text-xl font-bold tracking-wider">{title}</h1>
        {subTitle && subTitle.length > 0 && (<p className="text-xs">{subTitle}</p>)}
      </div>

      {children}

      {ctaList.length > 0 && (
        <div className="flex flex-row w-full justify-end">
          {ctaList.map((cta, idx) => (
            <React.Fragment key={idx}>
              {cta}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  </main>
)
