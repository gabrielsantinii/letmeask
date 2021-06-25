import React from "react";
import { Star } from "../../styles/Icons";
import { ProfileInfos } from "../ProfileInfos";

import { Container, Footer, IconsWrapper } from "./styles";

type User = {
  name: string | undefined;
  avatar: string | undefined;
};

type CardPropsType = {
  content: string;
  author: User;
  likes: number;
};

export const Card = (props: CardPropsType) => {
  return (
    <Container>
      <span>{props?.content}</span>
      <Footer>
        <ProfileInfos user={props?.author} />
        <IconsWrapper>
          <div className="icon-column">
            {props?.likes}
            <Star />
          </div>
        </IconsWrapper>
      </Footer>
    </Container>
  );
};

export default Card;
