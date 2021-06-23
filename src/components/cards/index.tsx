import React from "react";
import { Star } from "../../styles/Icons";

import {
  Container,
  Footer,
  ProfileInfos,
  IconsWrapper,
  Avatar,
} from "./styles";

type User = {
  name: string | undefined;
  avatar: string | undefined;
};

type CardPropsType = {
  content: string;
  user: User;
  likes: number;
};

export const Card = ({ content, user, likes }: CardPropsType) => {
  return (
    <Container>
      <span>{content}</span>
      <Footer>
        <ProfileInfos>
          <Avatar title={user.avatar} />
          {user?.name}
        </ProfileInfos>
        <IconsWrapper>
          <div className="icon-column">
            {likes}
            <Star />
          </div>
        </IconsWrapper>
      </Footer>
    </Container>
  );
};

export default Card;
