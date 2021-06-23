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

export const MainButton = ({
  color,
  text,
  Icon,
  onClick,
  IconComponent,
  ...props
}: dataType) => {
  return (
    <Button type={props.type} {...props} color={color} onClick={onClick}>
      {IconComponent && <IconComponent />}
      {Icon && <img src={Icon} alt={text} />}

      {text}
    </Button>
  );
};
