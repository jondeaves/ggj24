'use client'
import { FC, useState } from "react";
import { useFormik } from 'formik';

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
    setIsComplete(true)
  }

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-96 bg-slate-800 p-8">
      <label htmlFor="prompt">Prompt</label>
      <input
        id="prompt"
        name="prompt"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.prompt}
        className='px-4 py-3 rounded-md text-black'
      />

      <div className="grid grid-cols-2 gap-2">
        <button type="submit" className="border p-2 rounded-md hover:bg-slate-600">Add</button>
        <button type="button" className="border p-2 rounded-md hover:bg-slate-600" onClick={handleFinish}>Finish</button>
      </div>

      {isComplete ? 'Completed Poem' : 'Previous line'}
      <ul>
        {limitedPrompots.map((prompt, idx) => (
          <li key={idx}>{prompt}</li>
        ))}
      </ul>
    </form>
  );
}
