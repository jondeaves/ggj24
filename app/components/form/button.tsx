import { ChangeEvent, FC } from "react";

interface ButtonProps {
  onClick: (e: ChangeEvent<any>) => void
  type: 'button' | 'submit' | 'reset'
}

export const Button: FC<ButtonProps> = ({ onClick, type = 'button' }) => (
  <button className="phrase-button text-white" onClick={onClick} type={type}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      stroke="currentColor"
      className="w-8 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
      />
    </svg>
  </button>
)