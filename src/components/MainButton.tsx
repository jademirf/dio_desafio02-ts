
interface ButtonProps {
  label: string;
  clickFunction: () => void;
}
export const MainButton = ({label, clickFunction}: ButtonProps) => {
  return (
    <button onClick={clickFunction} className="py-3 rounded bg-teal-800 text-white font-bold text-2xl">{label}</button>
  )
}