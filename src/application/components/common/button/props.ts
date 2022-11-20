import {ReactNode} from "react";
import { StyledProps } from "./style";

export type Props = {
  content: string;
  type: "button" | "submit";
  icon?: ReactNode
} & StyledProps;
