'use client'
import { FC, useState } from "react";
import { useFormik } from 'formik';

import { TextField } from "../form/text-field";
import { useOnlineContext } from "../context/online-context";
import { Button } from "../button";
import { Loader } from "../loader";
import { twMerge } from "tailwind-merge";

type SetNameFormic = {
  name: string;
}

export const SetNameForm: FC = () => {
  const { name, setName } = useOnlineContext()
  const [loadingState, setLoadingState] = useState<'JOIN'|'CREATE'|null>(null)

  const formik = useFormik<SetNameFormic>({
    initialValues: {
      name: '',
    },
    onSubmit: () => {}
  });

  const handleOnCreate = () => {
    setLoadingState('CREATE');
  }

  const handleOnJoin = () => {
    setLoadingState('JOIN');
  }

  const isDisabled = loadingState !== null || formik.values.name.length === 0
  const disabledMsg = loadingState ? (loadingState === 'JOIN' ? 'Joining game' : 'Creating game') : `Can't start without your name`

  return (
    <form onSubmit={formik.handleSubmit} className="w-full md:flex md:flex-row">
      <TextField
        id="name"
        name="name"
        type="text"
        placeholder="Who is playing?"
        className="grow md:rounded-r-none"
        disabled={loadingState !== null}
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <div className="flex flex-row mt-4 justify-end md:mt-0">
        <Button
          type="button"
          aria-label="Set name"
          className={twMerge('rounded-r-none md:rounded-none border-r px-4 border-bg-color w-20')}
          disabled={isDisabled}
          disabledTooltip={disabledMsg}
          Icon={loadingState === 'CREATE' ? <Loader className="w-6 h-6" /> : undefined}
          onClick={handleOnCreate}
        >
          {loadingState !== 'CREATE' && 'Create'}
        </Button>
        <Button
          type="button"
          aria-label="Join game"
          className={twMerge('rounded-l-none px-4 w-16')}
          disabled={isDisabled}
          disabledTooltip={disabledMsg}
          Icon={loadingState === 'JOIN' ? <Loader className="w-6 h-6" /> : undefined}
          onClick={handleOnJoin}
        >
        {loadingState !== 'JOIN' && 'Join'}

        </Button>
      </div>
    </form>
  );
}
