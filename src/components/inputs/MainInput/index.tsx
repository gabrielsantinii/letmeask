import React from "react";

import { Input } from "./styles";

type propsType = {
  placeholder: string;
  type: string;
};

export const MainInput = ({ placeholder, type }: propsType) => {
  return <Input placeholder={placeholder} type={type} />;
};

