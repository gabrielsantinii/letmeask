import { useEffect, useState } from "react";
import { database } from "../services/firebase";

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

type RoomType = {
  userId: string;
  title: string;
  questions: QuestionType
}

export function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<ParsedQuestion[]>([]);
  const [roomAdmin, setRoomAdmin] = useState<string>("");
  const [roomTitle, setRoomTitle] = useState<string>("");
  useEffect(() => {
    const getQuestionsByRoom = async (roomKey: string): Promise<any> => {
      const roomRef = database.ref(`rooms/${roomKey}`);

      roomRef.on("value", async (room) => {
        const roomValue: RoomType = await room.val();
        console.log("roomValue", roomValue);
        const { title, userId } = roomValue;

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
        setRoomAdmin(userId)
        setRoomTitle(title)
        return parsedQuestions;
      });
    };
    getQuestionsByRoom(roomId)
  }, [roomId]);

  return { roomAdmin, roomTitle, questions };
}
