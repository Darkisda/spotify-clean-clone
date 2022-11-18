import { Button, SmallTitle } from "@application/components/common";
import { Wrapper, Container } from "@application/ui/theme";
import { ButtonsContainer, Header, LoginError, LoginForm } from "./components";
import { useSignin } from "./hooks";

export function SignIn() {
  const { handleLogin, handleSubmit, register, errors } = useSignin();

  return (
    <Wrapper>
      <Header />
      <Container size="xs">
        <div className="mt-10 text-center">
          <SmallTitle>Para continuar, faça login no Spotify Clone</SmallTitle>
        </div>
        <LoginError hasError={
            errors.emailOrUsername?.type === 'required' || 
            errors.password?.type === 'required'
          }
        />
        <ButtonsContainer />
        <div className="w-full my-2 flex gap-5 items-center flex-row justify-between">
          <hr className="border-b w-full" />
          <p className="text-sm mt-2 font-medium">OU</p>
          <hr className="border-b w-full" />
        </div>
        <LoginForm
          handleLogin={handleLogin}
          handleSubmit={handleSubmit}
          register={register}
        />
        <hr className="border-b w-full my-5" />
        <div className="w-full text-center">
          <h2 className="font-medium text-lg mb-3">Não tem uma conta?</h2>
          <Button
            type="button"
            content="INSCREVER-SE NO SPOTIFY"
            additionalStyling="text-gray-500 border-gray-500 mt-2"
          />
        </div>
      </Container>
    </Wrapper>
  );
}
