'use client'
import { FC, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from "./button";
import { TextField } from "./form/text-field";
import { useMainContext } from "../context";
import { getRandomPrompt } from "../utils";
import { useSearchParams } from "next/navigation";

type SubmissionFormic = {
  entry: string;
}

export const SubmissionForm: FC = () => {
  const searchParam = useSearchParams()
  const excludeDirty = searchParam.get('skipDirty') === 'true' || false

  const { addEntry, authors, entries } = useMainContext()
  const [prompt, setPrompt] = useState(getRandomPrompt(!excludeDirty))

  const formik = useFormik<SubmissionFormic>({
    initialValues: {
      entry: '',
    },
    onSubmit: ({ entry }) => {
      addEntry(entry)

      setPrompt(getRandomPrompt(!excludeDirty))
      formik.resetForm()
    },
    validationSchema: Yup.object().shape({
      entry: Yup.string()
        .required('Everyone has something they can say')
        .test({
          name: 'prompt',
          exclusive: true,
          params: { prompt },
          message: 'You should use the provided prompt',
          test: (value) => value?.toLowerCase().indexOf(prompt.toLowerCase()) !== -1,
        })
    })
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      <div className="w-full flex flex-row items-left">
        <TextField
          id="entry"
          name="entry"
          type="text"
          placeholder={`For line ${entries.length + 1} ${authors[entries.length % authors.length]} says...`}
          className="grow rounded-r-none h-10"
          onChange={formik.handleChange}
          value={formik.values.entry}
        />
        <Button
          type="submit"
          aria-label="Add entry"
          className='rounded-l-none h-10 pr-4'
          size="small"
          disabled={!formik.isValid || formik.values.entry.length === 0}
          disabledTooltip={formik.errors.entry}
        >
          Add
        </Button>
      </div>
      <p className="mt-2">Include “{prompt}”</p>
    </form>
  );
}
