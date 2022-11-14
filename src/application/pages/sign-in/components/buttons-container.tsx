import { Button } from "@application/components/common";
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'

export function ButtonsContainer() {
  return (
    <div className="mt-3 flex flex-col items-center gap-2">
      <Button
        icon={<AiFillFacebook size={24} />}
        type="button"
        content="CONECTAR COM FACEBOOK"
        additionalStyling="text-white bg-indigo-500"
      />
      <Button
        icon={<FaApple size={24} />}
        type="button"
        content="CONECTAR COM APPLE"
        additionalStyling="text-white bg-black"
      />
      <Button
        icon={<FcGoogle size={24} />}
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
