import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MainButton } from "../../components/buttons/MainButton";
import { Textarea } from "../../components/inputs/Textarea/styles";

import { Navbar } from "../../components/Navbar";
import { Card } from "../../components/cards";

import { Container, Wrapper, QuestionsContainer } from "./styles";

type ParamsType = {
  roomId: string;
};

export function Room() {
  const { roomId } = useParams<ParamsType>();
  useEffect(() => {}, []);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <header>
          <h1>Sala React QeA </h1>
          <span>4 Perguntas</span>
        </header>

        <form>
          <Textarea placeholder="O que você quer perguntar?" />
          <div className="form-footer">
            <span>Para enviar uma pergunta, </span>
            <a>faça seu login.</a>
            <MainButton
              color="var(--purple-500)"
              text="Enviar pergunta"
              type="submit"
            />
          </div>
        </form>
        <QuestionsContainer>
          <Card
            content="Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes."
            user={{ name: "Gabriel Santini", avatar: undefined }}
            likes={10}
          />
          <Card
            content="Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes."
            user={{ name: "Gabriel Santini", avatar: undefined }}
            likes={10}
          />
          <Card
            content="Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes."
            user={{ name: "Gabriel Santini", avatar: undefined }}
            likes={10}
          />
        </QuestionsContainer>
      </Wrapper>
    </Container>
  );
}
