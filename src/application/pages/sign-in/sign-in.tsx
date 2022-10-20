import { Button, SmallTitle } from "@application/components/common";
import { ButtonsContainer, Header, LoginForm } from "./components";

export function SignIn() {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="container mx-auto max-w-md">
        <div className="mt-10 text-center">
          <SmallTitle>Para continuar, faça login no Spotify Clone</SmallTitle>
        </div>
        <ButtonsContainer />
        <div className="w-full my-4 flex gap-5 items-center flex-row justify-between">
          <hr className="border-b w-full" />
          <p className="text-sm mt-2 font-medium">OU</p>
          <hr className="border-b w-full" />
        </div>
        <LoginForm />
        <hr className="border-b w-full my-5" />
        <div className="w-full text-center">
          <h2 className="font-medium text-lg mb-3">Não tem uma conta?</h2>
          <Button
            type="button"
            content="INSCREVER-SE NO SPOTIFY"
            additionalStyling="text-gray-500 border-gray-500"
          />
        </div>
      </div>
    </div>
  );
}
