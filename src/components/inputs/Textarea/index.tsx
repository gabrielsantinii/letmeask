import React, { InputHTMLAttributes } from "react";
import { TextareaHTMLAttributes } from "react";

import { Textarea } from "./styles";

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextareaInput = (props: InputProps) => {
  return <Textarea {...props} />;
};
