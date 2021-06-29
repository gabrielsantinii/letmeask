import React, { useState } from "react";
import { ClipButton, IconWrapper } from "./styles";
import { ClipboardPlus, Check } from "../../../styles/Icons";
import { toast } from "react-hot-toast";

type dataType = {
  color: string;
  text: string;
  Icon?: any;
  IconComponent?: any;
  disabled?: boolean;
  copyText: string;
  type?: any;
};

const delay = (amount: number = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export const CopyButton = ({
  color,
  text,
  Icon,
  copyText,
  IconComponent,
  ...props
}: dataType) => {
  const [copied, setCopied] = useState(false);
  async function copyToClipboard() {
    setCopied(true);
    navigator.clipboard.writeText(copyText);
    toast("Link copiado com sucesso!", {
      icon: "👏",
      duration: 2000,
      id: "clipboard",
      style: {
        background: "var(--purple-500)",
        font: "500 14px Poppins",
        color: "var(--white)",
      },
    });

    await delay(2000);

    setCopied(false);
  }

  return (
    <ClipButton
      type={props.type}
      {...props}
      color={color}
      onClick={copyToClipboard}
    >
      <IconWrapper color={color}>
        {copied ? <Check /> : <ClipboardPlus />}
      </IconWrapper>
      <div className="text">{text}</div>
      <div className="alternative-text">Compartilhar</div>
    </ClipButton>
  );
};
