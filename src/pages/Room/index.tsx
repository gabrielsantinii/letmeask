import React, { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { MainButton } from "../../components/buttons/MainButton";
import { Textarea } from "../../components/inputs/Textarea/styles";

import { Navbar } from "../../components/Navbar";
import { Card } from "../../components/cards";

import { Container, Wrapper, QuestionsContainer } from "./styles";
import { useAuthContext } from "../../hooks/useAuthContext";
import { ProfileInfos } from "../../components/ProfileInfos";
import { useState } from "react";
import { getQuestionsByRoom, sendNewQuestion } from "../../services/firebase";
import { useEffect } from "react";

type ParamsType = {
  roomId: string;
};

export function Room() {
  const [newQuestion, setNewQuestion] = useState<string>("");
  const { roomId } = useParams<ParamsType>();
  const { user } = useAuthContext();

  useEffect(() => {
    getQuestionsByRoom({ roomKey: roomId });
  }, [roomId]);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      throw new Error("You need to log in to send a question.");
    }

    sendNewQuestion({ newQuestion, user, roomKey: roomId });
    setNewQuestion("");
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <header>
          <h1>Sala React QeA </h1>
          <span>4 Perguntas</span>
        </header>

        <form onSubmit={handleSendQuestion}>
          <Textarea
            placeholder="O que você quer perguntar?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            {user ? (
              <ProfileInfos user={user} />
            ) : (
              <>
                <span>Para enviar uma pergunta, </span>
                <a>faça seu login.</a>
              </>
            )}

            <MainButton
              color="var(--purple-500)"
              text="Enviar pergunta"
              type="submit"
              disabled={!user}
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
