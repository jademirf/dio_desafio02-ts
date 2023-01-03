
import { FormEvent } from 'react';
interface ButtonProps {
  label: string;
  onClick: (e: FormEvent) => void;
}
export const MainButton = ({label, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick} className="py-3 rounded bg-teal-800 text-white font-bold text-2xl">{label}</button>
  )
}