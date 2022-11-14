import {ReactNode} from "react";

export type Props = {
  content: string;
  additionalStyling?: string;
  type: "button" | "submit";
  icon?: ReactNode
};
