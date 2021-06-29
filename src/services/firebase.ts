import firebase from "firebase";

import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

const roomRef = database.ref("rooms");

type newRoomType = {
  roomTitle: string;
  userId: string | undefined;
};

const pushNewRoom = async ({
  roomTitle,
  userId,
}: newRoomType): Promise<any> => {
  if (!roomTitle) {
    throw new Error("Missing user Id");
  }
  const createdRoom = await roomRef.push({
    title: roomTitle,
    userId,
  });

  return createdRoom;
};

type joinRoomType = {
  roomKey: string;
};

const joinRoom = async ({ roomKey }: joinRoomType): Promise<any> => {
  const roomRef = await database.ref(`rooms/${roomKey}`).get();

  if (!roomRef.exists()) {
    throw new Error("The room doesnt exists");
  }

  console.table({ roomKey, exists: roomRef.exists() });

  return true;
};

type Author = {
  name: string;
  avatar: string | undefined;
};
type newQuestionType = {
  roomKey: string;
  newQuestion: string;
  user: Author;
};

const sendNewQuestion = async ({
  newQuestion,
  user,
  roomKey,
}: newQuestionType): Promise<any> => {
  const roomRef = await database.ref(`rooms/${roomKey}`).get();

  if (!roomRef.exists()) {
    throw new Error("The room doesnt exists");
  }

  await database.ref(`rooms/${roomKey}/questions`).push({
    content: newQuestion,
    author: user,
    isHighlighted: false,
    isAnswered: false,
  });
};

type QuestionType = Record<
  string,
  {
    content: string;
    user: Author;
    isHighlighted: boolean;
    isAnswered: boolean;
  }
>;

type roomParams = {
  roomKey: string;
};

const getQuestionsByRoom = async ({ roomKey }: roomParams): Promise<any> => {
  let allQuesions;
  const roomRef = database.ref(`rooms/${roomKey}`);

  await roomRef.once("value", async (room) => {
    const roomValue = await room.val();

    const unparsedQuestions: QuestionType = roomValue.questions ?? {};

    const parsedQuestions = Object.entries(unparsedQuestions).map(
      ([id, { content, isAnswered, isHighlighted, user }]) => {
        return {
          id,
          content,
          isAnswered,
          isHighlighted,
          user,
        };
      }
    );
    allQuesions = parsedQuestions;
    console.log(parsedQuestions);
    return parsedQuestions;
  });
  console.log(allQuesions);
};

type LikeType = {
  id: string;
  authorId: string;
}

const likeQuestion = async (
  questionId: string,
  roomId: string,
  userId: string | undefined,
  likes?: LikeType[]
) => {
  try {
    if (likes) {
      const likeInfos = likes.find(val => val.authorId === userId)
      await database
        .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeInfos?.id}`)
        .remove();
    }

    else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: userId,
      });
    }

  } catch (err) {
    throw new Error("Can not like the question.");
  }
};

export {
  firebase,
  auth,
  database,
  pushNewRoom,
  joinRoom,
  sendNewQuestion,
  getQuestionsByRoom,
  likeQuestion,
};
