import { Props } from "./props";

export function Button({ content, type, additionalStyling }: Props) {
  return (
    <button
      type={type}
      className={
        additionalStyling +
        ` w-full border rounded-full py-3 transition-all duration-150 hover:border-black`
      }
    >
      <h4 className="font-medium tracking-widest">{content}</h4>
    </button>
  );
}
