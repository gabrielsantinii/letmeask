import React, { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { MainButton } from "../../components/buttons/MainButton";
import { Textarea } from "../../components/inputs/Textarea/styles";

import { Navbar } from "../../components/Navbar";
import { Card } from "../../components/Card";

import { Container, Wrapper, QuestionsContainer } from "./styles";
import { useAuthContext } from "../../hooks/useAuthContext";
import { ProfileInfos } from "../../components/ProfileInfos";
import { useState } from "react";
import { sendNewQuestion } from "../../services/firebase";
import { useRoom } from "../../hooks/useRoom";

type ParamsType = {
  roomId: string;
};

export function Room() {
  const [newQuestion, setNewQuestion] = useState<string>("");
  const { roomId } = useParams<ParamsType>();
  const { user, signInWithGoogle } = useAuthContext();
  const { questions, roomAdmin, roomTitle } = useRoom(roomId);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      throw new Error("You need to log in to send a question.");
    }
    console.log(user);

    sendNewQuestion({ newQuestion, user, roomKey: roomId });
    setNewQuestion("");
  }

  async function handleSignInWithGoogle() {
    if (!user) {
      await signInWithGoogle();
    }
  }

  return (
    <Container>
      <Navbar isAdmin={roomAdmin === user?.id} roomId={roomId} />
      <Wrapper>
        <header>
          <h1>{roomTitle}</h1>
          <span>{questions.length} Perguntas</span>
        </header>

        {roomAdmin !== user?.id && (
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
                  <a onClick={handleSignInWithGoogle}>faça seu login.</a>
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
        )}
        <QuestionsContainer>
          {questions.length > 0 &&
            questions.map((quest) => {
              return (
                <Card
                  content={quest.content}
                  author={quest?.author}
                  likes={10}
                />
              );
            })}
        </QuestionsContainer>
      </Wrapper>
    </Container>
  );
}
