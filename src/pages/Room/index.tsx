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
import { database, sendNewQuestion } from "../../services/firebase";
import { useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";

type ParamsType = {
  roomId: string;
};

type ParsedQuestion = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isHighlighted?: boolean;
  isAnswered?: boolean;
};

type QuestionType = Record<string, ParsedQuestion>;

type roomParams = {
  roomKey: string;
};

export function Room() {
  const [questions, setQuestions] = useState<ParsedQuestion[]>([]);
  const [newQuestion, setNewQuestion] = useState<string>("");
  const { roomId } = useParams<ParamsType>();
  const { user, signInWithGoogle } = useAuthContext();

  useEffect(() => {
    const getQuestionsByRoom = async ({
      roomKey,
    }: roomParams): Promise<any> => {
      const roomRef = database.ref(`rooms/${roomKey}`);

      roomRef.on("value", async (room) => {
        const roomValue = await room.val();

        const unparsedQuestions: QuestionType = roomValue.questions ?? {};

        const parsedQuestions = Object.entries(unparsedQuestions).map(
          ([id, { content, isAnswered, isHighlighted, author }]) => {
            return {
              id,
              content,
              isAnswered,
              isHighlighted,
              author,
            };
          }
        );
        setQuestions(parsedQuestions);
        return parsedQuestions;
      });
    };
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
    console.log(user)

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
        <QuestionsContainer>
          {questions.length > 0 &&
            questions.map((quest) => {
              console.log('map: ', quest)
              return (
                <Card
                  content={quest.content}
                  author={quest?.author}
                  likes={10}
                />
              );
            })}

          <Card
            content="Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes."
            author={{ name: "Gabriel Santini", avatar: undefined }}
            likes={10}
          />
          <Card
            content="Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes."
            author={{ name: "Gabriel Santini", avatar: undefined }}
            likes={10}
          />
        </QuestionsContainer>
      </Wrapper>
    </Container>
  );
}
