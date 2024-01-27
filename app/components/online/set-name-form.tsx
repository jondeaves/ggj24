'use client'
import { FC, useState } from "react";
import { useFormik } from 'formik';
import { PlusIcon } from '@heroicons/react/24/outline'

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
  const [isLoading, setIsLoading] = useState(false)

  const formik = useFormik<SetNameFormic>({
    initialValues: {
      name: '',
    },
    onSubmit: ({ name }) => {
      setName(name)
      setIsLoading(true)

      // formik.resetForm()
    },
  });

  const isDisabled = isLoading || formik.values.name.length === 0
  const disabledMsg = isLoading ? 'Fetching session' : `Can't start without your name`

  return (
    <form onSubmit={formik.handleSubmit} className="w-full md:flex md:flex-row">
      <TextField
        id="name"
        name="name"
        type="text"
        placeholder="Who is playing?"
        className="grow md:rounded-r-none"
        disabled={isLoading}
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <div className="flex flex-row mt-4 justify-end md:mt-0">
        <Button
          type="submit"
          aria-label="Set name"
          className={twMerge('rounded-r-none md:rounded-none border-r px-4 border-bg-color w-20')}
          disabled={isDisabled}
          disabledTooltip={disabledMsg}
          Icon={isLoading ? <Loader className="w-6 h-6" /> : undefined}
        >
          {!isLoading && 'Create'}
        </Button>
        <Button
          type="submit"
          aria-label="Set name"
          className={twMerge('rounded-l-none px-4 w-16')}
          disabled={isLoading || formik.values.name.length === 0}
          disabledTooltip={disabledMsg}
          Icon={isLoading ? <Loader className="w-6 h-6" /> : undefined}
        >
        {!isLoading && 'Join'}

        </Button>
      </div>
    </form>
  );
}
