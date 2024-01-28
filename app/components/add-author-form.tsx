'use client'
import { FC } from "react";
import { useFormik } from 'formik';
import { twMerge } from "tailwind-merge";

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
    <form onSubmit={formik.handleSubmit} className='w-full'>
      <div className="w-full flex flex-row">
        <TextField
          id="author"
          name="author"
          type="text"
          placeholder={authors.length > 0 ? "Who else wants to play?" : "Who is playing?"}
          className="grow rounded-r-none"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        <div className="flex flex-row">
          <Button
            type="submit"
            disabled={formik.values.author.length === 0}
            aria-label="Add author"
            className='rounded-l-none'
          >
            Add
          </Button>
        </div>
      </div>
      <p className="mt-2">You can have as many Authors as you want</p>
    </form>
  );
}
