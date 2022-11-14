import { Button } from "@application/components/common";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { SignInFormValues } from "../../values";

type Props = {
  handleSubmit: UseFormHandleSubmit<SignInFormValues>
  handleLogin: (args: any) => void;
  register: UseFormRegister<SignInFormValues>
}

export function LoginForm({ handleLogin, handleSubmit, register }: Props) {
  return (
    <div className="mt-4 w-full">
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="w-full flex flex-col">
          <label className="text-xs font-semibold" htmlFor="emailOrUsername">
            Endereço de e-mail ou nome de usuário
          </label>
          <input
            className="w-full border border-gray-600 rounded my-2 p-4 text-sm font-light text-black outline-4 hover:border-black"
            type="text"
            placeholder="Endereço de e-mail ou nome de usuário"
            {...register("emailOrUsername", { required: true })}
          />
        </fieldset>
        <fieldset className="w-full my-2 flex flex-col">
          <label className="text-xs font-semibold" htmlFor="password">
            Senha
          </label>
          <input
            className="w-full border border-gray-600 rounded my-3 p-4 text-sm font-light text-black outline-4 hover:border-black"
            type="password"
            placeholder="Senha"
            {...register("password", { required: true })}
          />
        </fieldset>
        <fieldset>
          <a href="#" className="text-sm font-normal">
            Esqueceu sua senha?
          </a>
        </fieldset>
        <div className="w-full flex mt-4 items-start flex-row justify-between">
          <fieldset className="w-1/2">
            <input
              type="checkbox"
              className="w-4 h-4 checked:accent-green-600"
              name="remember"
              id="remeber"
            />
            <label htmlFor="remember" className="text-sm font-light ml-4">
              Lembrar de mim
            </label>
          </fieldset>
          <fieldset className="w-1/2 flex items-start justify-end">
            <Button
              type="submit"
              content="ENTRAR"
              additionalStyling="w-8/12 bg-green-400"
            />
          </fieldset>
        </div>
      </form>
    </div>
  );
}
