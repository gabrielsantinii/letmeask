import React from "react";
import { ClipButton, IconWrapper } from "./styles";
import { ClipboardPlus } from "../../../styles/Icons";

type dataType = {
  color: string;
  text: string;
  Icon?: any;
  IconComponent?: any;
  disabled?: boolean;
  onClick?: () => any;
  type?: any;
};

export const CopyButton = ({
  color,
  text,
  Icon,
  onClick,
  IconComponent,
  ...props
}: dataType) => {
  return (
    <ClipButton type={props.type} {...props} color={color} onClick={onClick}>
      <IconWrapper color={color}>
        <ClipboardPlus />
      </IconWrapper>
      <div className="text">{text}</div>
    </ClipButton>
  );
};
