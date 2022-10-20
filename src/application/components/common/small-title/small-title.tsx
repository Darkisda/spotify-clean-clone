import { Props } from "./props";

export function SmallTitle({ children }: Props) {
  return (
    <h3 className="text-xs font-semibold">{children}</h3>
  );
}
