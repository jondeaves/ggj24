'use client'
import { FC } from "react";
import { useFormik } from 'formik';

import { Button } from "./button";
import { TextField } from "./form/text-field";
import { useMainContext } from "../context";

type SubmissionFormic = {
  prompt: string;
}

export const SubmissionForm: FC = () => {
  const { addEntry, authors, entries } = useMainContext()

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
    <form onSubmit={formik.handleSubmit} className="w-full flex flex-row items-left">
      <TextField
        id="prompt"
        name="prompt"
        type="text"
        placeholder={`${authors[entries.length % authors.length]} says...`}
        className="grow rounded-r-none h-10"
        onChange={formik.handleChange}
        value={formik.values.prompt}
      />
      <Button
        type="submit"
        aria-label="Add entry"
        className='rounded-l-none h-10 pr-4'
        size="small"
        disabled={formik.values.prompt.length === 0}
        disabledTooltip="Everyone has something they can say"
      >
        Add
      </Button>
    </form>
  );
}
