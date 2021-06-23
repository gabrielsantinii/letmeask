import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import logoImg from "../../assets/images/logo.svg";

import { Container, Wrapper } from "./styles";
import { OutlineButton } from "../buttons/OutlineButton";
import { CopyButton } from "../buttons/CopyButton";
import { useParams } from "react-router-dom";

type ParamsType = {
  roomId: string;
};

export const Navbar: React.FC = () => {
  //   const { user } = useAuthContext();
  const { roomId } = useParams<ParamsType>();

  function copyToClipboard() {
    navigator.clipboard.writeText(roomId)
  }
  return (
    <Container>
      <Wrapper>
        <img src={logoImg} alt="Letmeask" />

        <div className="right-side">
          <CopyButton text={`Sala #${roomId}`} color="var(--purple-500)" onClick={copyToClipboard}/>
          <OutlineButton text="Encerrar sala" color="var(--purple-500)" />
        </div>
      </Wrapper>
    </Container>
  );
};
