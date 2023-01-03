
interface ButtonProps {
  label: string;
  clickFunction: () => void;
}
export const MainButton = ({label, clickFunction}: ButtonProps) => {
  return (
    <button onClick={clickFunction}>{label}</button>
  )
}