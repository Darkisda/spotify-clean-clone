import { Colors } from "@application/ui/theme";
import styled from "styled-components";
import { Props } from "./props";
import { SButton } from "./style"

export function Button({ icon, content, type, flat }: Props) {
  return (
    <SButton
      type={type}
      flat={flat}
    >
      {icon ? icon : null}  <h4>{content}</h4>
    </SButton>
  );
}

const SFBButton = styled(SButton)`
  background-color: rgba(66, 103, 178);
  border-color: rgba(45, 77, 141);
  color: ${Colors.white};
`

export function FBButton({ icon, content, type, flat }: Props) {
  return (
    <SFBButton
      type={type}
      flat={flat}
    >
      {icon ? icon : null}  <h4>{content}</h4>

    </SFBButton>
  )
}

const SAppleButton = styled(SButton)`
  background-color: ${Colors.black};
  border-color: ${Colors.black};
  color: ${Colors.white};
`

export function AppleButton({ icon, content, type, flat }: Props) {
  return (
    <SAppleButton
      type={type}
      flat={flat}
    >
      {icon ? icon : null}  <h4>{content}</h4>

    </SAppleButton>
  )
}