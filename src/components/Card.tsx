import { FormLogin } from './FormLogin';
import { Header } from './Header';

export const Card = () => {
  return (
    <div className="bg-white w-4/5 lg:w-1/2 rounded min-h-[300px] py-4 flex flex-col justify-evenly">
      <Header />
      <FormLogin />
    </div>
  )
}