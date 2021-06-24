import React from "react";

import { Container, Avatar } from "./styles";

type UserType = {
  user: {
    name: string | undefined;
    avatar: string | undefined;
  };
};

export const ProfileInfos = (props: UserType) => {
  return (
    <Container>
      <Avatar title={props.user?.avatar} />
      {props.user?.name}
    </Container>
  );
};
