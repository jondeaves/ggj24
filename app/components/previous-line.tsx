import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PreviousLineProps = {
  label?: string | ReactNode;
  supLabel?: string
  emphasise?: boolean
}

export const PreviousLine: FC<PreviousLineProps> = ({
  label,
  supLabel,
  emphasise = false,
}) => {
  return (
    <div className="flex flex-row items-center w-full gap-2">
      {supLabel && (<p className="font-bold text-sm tracking-wide text-bg-secondary pt-1">{supLabel}</p>)}
      {label && (<p className={twMerge("xs:text-lg", emphasise ? 'italic' : '')}>{label}</p>)}
    </div>
  );
}