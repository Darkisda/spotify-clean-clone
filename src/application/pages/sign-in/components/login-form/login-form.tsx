import { Button } from "@application/components/common";
import { useForm } from "../../hooks";

export function LoginForm() {
  const { emailOrUsername, password, formRef, handleLogin } = useForm();

  return (
    <div className="w-full">
      <form ref={formRef} onSubmit={handleLogin}>
        <fieldset className="w-full flex flex-col">
          <label className="text-xs font-semibold" htmlFor="login">
            Endereço de e-mail ou nome de usuário
          </label>
          <input
            className="w-full border border-gray-600 rounded my-2 p-4 text-sm font-light text-black outline-4 hover:border-black"
            type="text"
            name="login"
            id="login"
            ref={emailOrUsername}
            placeholder="Endereço de e-mail ou nome de usuário"
          />
        </fieldset>
        <fieldset className="w-full my-2 flex flex-col">
          <label className="text-xs font-semibold" htmlFor="senha">
            Senha
          </label>
          <input
            className="w-full border border-gray-600 rounded my-3 p-4 text-sm font-light text-black outline-4 hover:border-black"
            type="password"
            name="senha"
            id="senha"
            ref={password}
            placeholder="Senha"
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
