import React from "react";
import logoImg from "../../assets/images/logo.svg";
import { Toaster } from 'react-hot-toast'

import { Container, Wrapper } from "./styles";
import { OutlineButton } from "../buttons/OutlineButton";
import { CopyButton } from "../buttons/CopyButton";

type ParamsType = {
  roomId: string;
  isAdmin?: boolean;
};

export function Navbar({ roomId, isAdmin = false }: ParamsType) {
  return (
    <Container>
      <Toaster />
      <Wrapper>
        <img src={logoImg} alt="Letmeask" />

        <div className="right-side">
          <CopyButton
            text={`Sala #${roomId}`}
            color="var(--purple-500)"
            copyText={`http://localhost:3000/rooms/${roomId}`}
          />
          {isAdmin && (
            <OutlineButton text="Encerrar sala" color="var(--purple-500)" />
          )}
        </div>
      </Wrapper>
    </Container>
  );
}
