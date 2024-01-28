"use client";

import { FC } from "react";

import { SetNameForm } from "./online/set-name-form";
import { Main } from "./main";

export const Online: FC = () => {
  return (
    <Main title="Poetry Chain" subTitle="(Online)">
      <SetNameForm />
    </Main>
  )
}
