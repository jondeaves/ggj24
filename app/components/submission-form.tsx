'use client'
import { FC, useState } from "react";
import { useFormik } from 'formik';
import { FormField } from "./form/form-field";
import { Button } from "./form/button";
import { TextField } from "./form/text-field";

interface SubmissionFormProps {
  prompt: string;
}

export const SubmissionForm: FC = () => {
  const [promptList, setPromptList] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState<boolean>(false)

  const formik = useFormik<SubmissionFormProps>({
    initialValues: {
      prompt: '',
    },
    onSubmit: values => {
      setPromptList([
        ...promptList,
        values.prompt,
      ])

      formik.resetForm()
    },
  });

  const limitedPrompots = isComplete ? promptList : promptList.slice(promptList.length - 1)

  const handleFinish = () => {
    setIsComplete(!isComplete)

    if (isComplete) {
      setPromptList([])
      formik.resetForm()
    }
  }

  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      <FormField>
        <TextField
          id="prompt"
          name="prompt"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.prompt}
        />
        <Button type="submit" onClick={formik.handleChange} />
      </FormField>
    </form>
  );
}
