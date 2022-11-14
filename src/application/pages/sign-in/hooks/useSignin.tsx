import { useForm } from "react-hook-form";
import { SignInFormValues } from "../values";

export function useSignin() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormValues>()

  function handleLogin(data: any) {

    console.log(data)
  }

  return { register, handleLogin, handleSubmit, errors };
}
