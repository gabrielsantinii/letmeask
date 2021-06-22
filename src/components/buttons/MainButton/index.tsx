import React from "react";
import { Button } from "./styles";

type dataType = {
  color: string;
  text: string;
  Icon?: any;
  disabled?: boolean;
  onClick?: () => any;
};

export const MainButton = ({ color, text, Icon, onClick, ...props }: dataType) => {
  return (
    <Button {...props} color={color} onClick={onClick}>
      {Icon && <img src={Icon} alt={text} />}

      {text}
    </Button>
  );
};
