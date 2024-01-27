'use client'
import { FC } from "react";
import { useFormik } from 'formik';
import { PlusIcon } from '@heroicons/react/24/outline'

import { Button } from "./button";
import { TextField } from "./form/text-field";
import { useMainContext } from "../context";

type AddAuthorFormic = {
  author: string;
}

export const AddAuthorForm: FC = () => {
  const { authors, addAuthor } = useMainContext()

  const formik = useFormik<AddAuthorFormic>({
    initialValues: {
      author: '',
    },
    onSubmit: ({ author }) => {
      addAuthor(author)

      formik.resetForm()
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full flex flex-row">
      <TextField
        id="author"
        name="author"
        type="text"
        placeholder={authors.length > 0 ? "Who else wants to play?" : "Who is playing?"}
        className="grow rounded-r-none"
        onChange={formik.handleChange}
        value={formik.values.author}
      />
      <Button
        type="submit"
        disabled={formik.values.author.length === 0}
        aria-label="Add author"
        className='rounded-l-none'
        Icon={<PlusIcon className="w-8 h-4" />}
      />
    </form>
  );
}
