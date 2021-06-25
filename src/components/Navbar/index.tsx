import React from "react";
import logoImg from "../../assets/images/logo.svg";

import { Container, Wrapper } from "./styles";
import { OutlineButton } from "../buttons/OutlineButton";
import { CopyButton } from "../buttons/CopyButton";

type ParamsType = {
  roomId: string;
  isAdmin?: boolean;
};

export function Navbar({ roomId, isAdmin = false }: ParamsType) {
  function copyToClipboard() {
    navigator.clipboard.writeText(`http://localhost:3000/rooms/${roomId}`);
  }
  return (
    <Container>
      <Wrapper>
        <img src={logoImg} alt="Letmeask" />

        <div className="right-side">
          <CopyButton
            text={`Sala #${roomId}`}
            color="var(--purple-500)"
            onClick={copyToClipboard}
          />
          {isAdmin && (
            <OutlineButton text="Encerrar sala" color="var(--purple-500)" />
          )}
        </div>
      </Wrapper>
    </Container>
  );
}
