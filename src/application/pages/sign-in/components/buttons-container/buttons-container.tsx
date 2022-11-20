import { AppleButton, Button, FBButton } from "@application/components/common";
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'
import { Container } from './style'


export function ButtonsContainer() {
  return (
    <Container>
      <FBButton
        icon={<AiFillFacebook size={24} />}
        type="button"
        content="CONECTAR COM FACEBOOK"
        flat
      />
      <AppleButton
        icon={<FaApple size={24} />}
        type="button"
        content="CONECTAR COM A APPLE"
        flat
      />
      <Button
        icon={<FcGoogle size={24} />}
        type="button"
        content="CONECTAR COM O GOOGLE"
        flat
      />
      <Button
        type="button"
        content="CONTINUAR COM UM NÚMERO DE TELEFONE"
        flat
      />
    </Container>
  );
}
