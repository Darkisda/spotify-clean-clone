import { Props } from "./props";
import { SButton } from "./style"

export function Button({ icon, content, type, additionalStyling }: Props) {
  return (
    <SButton
      type={type}
    >
      {icon ? icon : null}  <h4 className="font-medium tracking-widest">{content}</h4>
    </SButton>
  );
}
