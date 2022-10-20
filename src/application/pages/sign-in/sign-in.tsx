import { Button, SmallTitle } from "@application/components/common";
import { Header } from "./components";

export function SignIn() {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="container mx-auto max-w-md">
        <div className="mt-10 text-center">
          <SmallTitle>Para continuar, faça login no Spotify Clone</SmallTitle>
        </div>
        <div className="mt-3 flex flex-col items-center gap-2">
          <Button
            content="CONECTAR COM FACEBOOK"
            additionalStyling="text-white bg-indigo-500"
          />
          <Button
            content="CONECTAR COM APPLE"
            additionalStyling="text-white bg-black"
          />
          <Button
            content="CONECTAR COM O GOOGLE"
            additionalStyling="text-gray-500 bg-white"
          />
          <Button
            content="CONTINUAR COM NÚMERO DE TELEFONE"
            additionalStyling="text-gray-500 bg-white"
          />
        </div>
        <div className="w-full my-4 flex gap-5 items-center flex-row justify-between">
          <hr className="border-b w-full" />
          <p className="text-sm mt-2 font-medium">OU</p>
          <hr className="border-b w-full" />
        </div>
        <div className="w-full">
          <form>
            <fieldset className="w-full flex flex-col">
              <label className="text-xs font-semibold" htmlFor="login">
                Endereço de e-mail ou nome de usuário
              </label>
              <input
                className="w-full border border-gray-600 rounded my-2 p-4 text-sm font-light text-black outline-4 hover:border-black"
                type="text"
                name="login"
                id="login"
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
                  content="ENTRAR"
                  additionalStyling="w-8/12 bg-green-400"
                />
              </fieldset>
            </div>
          </form>
          <hr className="border-b w-full my-5" />
          <div className="w-full text-center">
            <h2 className="font-medium text-lg mb-3">Não tem uma conta?</h2>
            <Button
              content="INSCREVER-SE NO SPOTIFY"
              additionalStyling="text-gray-500 border-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
