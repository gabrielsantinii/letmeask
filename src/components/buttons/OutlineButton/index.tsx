import React from "react";
import { Button } from "./styles";

type dataType = {
  color: string;
  text: string;
  Icon?: any;
  IconComponent?: any;
  disabled?: boolean;
  onClick?: () => any;
  type?: any;
};

export const OutlineButton = ({ text, ...props }: dataType) => {
  return <Button {...props}>{text}</Button>;
};
