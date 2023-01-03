import { login } from "../services/login"
import { MainButton } from "./MainButton"

export const FormLogin = () => {
  return (
    <form className="flex flex-col gap-4 px-4 my-5">
      <input className="flex-1 leading-5 py-3 h-5" type="text" placeholder="Login" name="login" />
      <input className="flex-1 leading-5 py-3 h-5" type="password" placeholder="Password" name="password" />
      <MainButton label="login" onClick={login} />
    </form>
  )
}