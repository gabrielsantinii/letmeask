import React from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { likeQuestion } from "../../services/firebase";
import { Star, StarFill } from "../../styles/Icons";
import { ProfileInfos } from "../ProfileInfos";

import { Container, Footer, IconsWrapper } from "./styles";

type User = {
  name: string | undefined;
  avatar: string | undefined;
  id: string;
};

type LikeType = {
  id: string;
  authorId: string;
}

type CardPropsType = {
  content: string;
  author: User;
  likes: LikeType[] | undefined;
  questionId: string;
  hasLiked?: boolean;
};

type ParamsType = {
  roomId: string;
};

export const Card = (props: CardPropsType) => {
  const { roomId } = useParams<ParamsType>();
  const { user } = useAuthContext();

  async function handleLikeQuestion() {
    if (props.hasLiked) {
    await likeQuestion(props.questionId, roomId, user?.id, props.likes);
    }
    else {
      await likeQuestion(props.questionId, roomId, user?.id);
    }
  }

  return (
    <Container>
      <span>{props?.content}</span>
      <Footer>
        <ProfileInfos user={props?.author} />
        <IconsWrapper>
          <button
            className={`icon-column ${props.hasLiked ? "active" : ""}`}
            disabled={user?.id === props.author.id}
            onClick={handleLikeQuestion}
          >
            {props?.likes?.length}
            {props.hasLiked ? <StarFill /> : <Star />}
          </button>
        </IconsWrapper>
      </Footer>
    </Container>
  );
};

export default Card;
