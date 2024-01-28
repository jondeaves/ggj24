"use client";

import React, { FC, PropsWithChildren, ReactNode } from "react";

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
  <main>
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
