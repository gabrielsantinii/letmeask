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

export { firebase, auth, database, pushNewRoom, joinRoom };
