'use client'
import { FC } from "react";
import { useFormik } from 'formik';
import { PlusIcon } from '@heroicons/react/24/outline'

import { FormField } from "./form/form-field";
import { Button } from "./form/button";
import { TextField } from "./form/text-field";
import { useMainContext } from "../context";

type SubmissionFormProps = {
  author: string;
}

type SubmissionFormic = {
  prompt: string;
}

export const SubmissionForm: FC<SubmissionFormProps> = ({ author }) => {
  const { addEntry } = useMainContext()

  const formik = useFormik<SubmissionFormic>({
    initialValues: {
      prompt: '',
    },
    onSubmit: values => {
      addEntry({
        text: values.prompt,
        author,
      })

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
        className="grow"
        onChange={formik.handleChange}
        value={formik.values.prompt}
      />
      <Button type="submit" onClick={formik.handleChange} aria-label="Add entry" Icon={<PlusIcon className="w-8 h-4" />} />
    </form>
  );
}
