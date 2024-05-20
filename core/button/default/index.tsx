import { ButtonHTMLAttributes, FC } from "react";

import { Primary, Secondary, Transparent } from "./styles";
import type { ButtonProps } from "./types";

export const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant,
  children,
  ...other
}) => {
  if (variant === "primary") return <Primary {...other}>{children}</Primary>;
  if (variant === "transparent") return <Transparent {...other}>{children}</Transparent>;

  return <Secondary {...other}>{children}</Secondary>;
};
