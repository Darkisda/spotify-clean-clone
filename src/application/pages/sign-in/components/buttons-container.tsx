import { Button } from "@application/components/common";

export function ButtonsContainer() {
  return (
    <div className="mt-3 flex flex-col items-center gap-2">
      <Button
        type="button"
        content="CONECTAR COM FACEBOOK"
        additionalStyling="text-white bg-indigo-500"
      />
      <Button
        type="button"
        content="CONECTAR COM APPLE"
        additionalStyling="text-white bg-black"
      />
      <Button
        type="button"
        content="CONECTAR COM O GOOGLE"
        additionalStyling="text-gray-500 bg-white"
      />
      <Button
        type="button"
        content="CONTINUAR COM NÚMERO DE TELEFONE"
        additionalStyling="text-gray-500 bg-white"
      />
    </div>
  );
}
