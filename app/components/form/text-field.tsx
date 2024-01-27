import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";

interface TextFieldProps {
  id?: string;
  name?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TextField: FC<TextFieldProps> = (props) => (
  <div className="flex flex-row w-3/5">
    <input
      className="phrase-input p-2 w-full italic"
      placeholder="Continue"
      autoComplete="off"
      {...props}
    />
  </div>
)