"use client";
import { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSearchParams } from "next/navigation";

import { Button } from "./button";
import { TextField } from "./form/text-field";
import { useMainContext } from "../context";
import { getRandomPrompts } from "../utils";
import { PoetryStyle } from "./rhyme/rhyme";
import { POEM_STYLES } from "../constants/poem-styles";

type SubmissionFormic = {
  entry: string;
};

export const SubmissionForm: FC = () => {
  const searchParam = useSearchParams()
  const excludeDirty = searchParam.get('skipDirty') === 'true' || false
        
  const { addEntry, authors, entries, poemStyle } = useMainContext();
  const [prompt, setPrompt] = useState(getRandomPrompts(!excludeDirty));

  const poemStyleAttrs = POEM_STYLES.find((s) => s.ident == poemStyle);
  const poetryStyle = PoetryStyle({
    lineSyllables: poemStyleAttrs?.lineSyllables || null,
    rhymingLines: poemStyleAttrs?.rhymingLines || [],
  });
  const [style, setStyle] = useState(poetryStyle);

  const formik = useFormik<SubmissionFormic>({
    initialValues: {
      entry: "",
    },
    onSubmit: ({ entry }) => {
      addEntry(entry);

      setPrompt(getRandomPrompt(!excludeDirty))
      formik.resetForm()
    },
    validationSchema: Yup.object().shape({
      entry: Yup.string()
        .required("Everyone has something they can say")
        .test({
          name: "prompt",
          exclusive: true,
          params: { prompt },
          message: "You should use the provided prompt",
          test: (value) =>
            value
              ?.toLowerCase()
              .replace(/[^a-zA-Z0-9]/g, "")
              .indexOf(prompt.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")) !==
            -1,
        })
        .test({
          name: "syllables",
          exclusive: true,
          params: { style, entries },
          message: "Your entry should be the required number of syllables",
          test: (value) => style.checkSyllablesValid(value, entries),
        })
        .test({
          name: "rhyme",
          exclusive: true,
          params: { style, entries },
          message: "Your entry must rhyme as required",
          test: (value) => style.checkRhymeValid(value, entries),
        }),
    }),
  });

  const currentSyllables = style.lineSyllables
    ? style.lineSyllables[entries.length]?.toString() || "any number of"
    : "any number of";
  const currentRhyme = style.getCurrentRhymingWord(entries) || "any word";

  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      <div className="w-full flex flex-row items-left">
        <TextField
          id="entry"
          name="entry"
          type="text"
          placeholder={`For line ${entries.length + 1} ${
            authors[entries.length % authors.length]
          } says...`}
          className="grow rounded-r-none h-10"
          onChange={formik.handleChange}
          value={formik.values.entry}
        />
        <Button
          type="submit"
          aria-label="Add entry"
          className="rounded-l-none h-10 pr-4"
          size="small"
          disabled={!formik.isValid || formik.values.entry.length === 0}
          disabledTooltip={formik.errors.entry}
        >
          Add
        </Button>
      </div>
      <p className="mt-2">Talk about “{prompt}”</p>
      <p className="mt-2">
        Rhyme with {currentRhyme} in {currentSyllables} syllables
      </p>
    </form>
  );
};
