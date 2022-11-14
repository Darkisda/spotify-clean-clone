import { Props } from "./props";

export function Button({ icon, content, type, additionalStyling }: Props) {
  return (
    <button
      type={type}
      className={
        additionalStyling +
        ` w-full flex items-center content-center justify-center gap-4 border rounded-full py-3 transition-all duration-150 hover:border-black`
      }
    >
      {icon ? icon : null}  <h4 className="font-medium tracking-widest">{content}</h4>
    </button>
  );
}
