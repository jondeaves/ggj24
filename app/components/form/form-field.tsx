import { FC, PropsWithChildren } from "react";

interface FormFieldProps extends PropsWithChildren {}

export const FormField: FC<FormFieldProps> = ({ children }) => {
  return (
    <div className="flex flex-row w-3/5">
      {children}
    </div>
  );
}