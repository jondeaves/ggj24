'use client'
import { FC } from "react";
import { useFormik } from 'formik';
import { PlusIcon } from '@heroicons/react/24/outline'

import { Button } from "./button";
import { TextField } from "./form/text-field";
import { useMainContext } from "../context";

type SubmissionFormic = {
  prompt: string;
}

export const SubmissionForm: FC = () => {
  const { addEntry } = useMainContext()

  const formik = useFormik<SubmissionFormic>({
    initialValues: {
      prompt: '',
    },
    onSubmit: ({ prompt }) => {
      addEntry(prompt)

      formik.resetForm()
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full flex flex-row">
      <TextField
        id="prompt"
        name="prompt"
        type="text"
        placeholder="What do you want to add?"
        className="grow rounded-r-none"
        onChange={formik.handleChange}
        value={formik.values.prompt}
      />
      <Button
        type="submit"
        disabled={formik.values.prompt.length === 0}
        aria-label="Add entry"
        className='rounded-l-none'
        Icon={<PlusIcon className="w-8 h-4" />}
      />
    </form>
  );
}
