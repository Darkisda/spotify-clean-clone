import { FormEvent, useRef } from "react";

export function useForm() {
  const emailOrUsername = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleLogin(e: FormEvent) {
    e.preventDefault();
  }

  return { emailOrUsername, password, formRef, handleLogin };
}
