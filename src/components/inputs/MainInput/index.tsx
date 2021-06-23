import React, { InputHTMLAttributes } from "react";

import { Input } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const MainInput = (props: InputProps) => {
  return <Input {...props} />;
};
