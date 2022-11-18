import { Button } from "@application/components/common";
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'
import { Container } from './style'

export function ButtonsContainer() {
  return (
    <Container>
      <Button
        icon={<AiFillFacebook size={24} />}
        type="button"
        content="CONECTAR COM FACEBOOK"
        additionalStyling="text-white bg-fb-color"
      />
      <Button
        icon={<FaApple size={24} />}
        type="button"
        content="CONECTAR COM A APPLE"
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
        content="CONTINUAR COM UM NÚMERO DE TELEFONE"
        additionalStyling="text-gray-500 bg-white"
      />
    </Container>
  );
}
