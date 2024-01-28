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
    <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-2 items-end xs:flex-row xs:gap-0 xs:items-left">
      <TextField
        id="prompt"
        name="prompt"
        type="text"
        placeholder={`${authors[entries.length % authors.length]} says...`}
        className="grow xs:rounded-r-none h-10"
        onChange={formik.handleChange}
        value={formik.values.prompt}
      />
      <Button
        type="submit"
        disabled={formik.values.prompt.length === 0}
        aria-label="Add entry"
        className='xs:rounded-l-none h-10 pr-4 xs:pr-2'
        size="small"
        Icon={<PlusIcon fill="#ffffff" className="w-8 h-4 fill-white text-white " />}
      >
        <span className="xs:sr-only">Add entry</span>
      </Button>
    </form>
  );
}
