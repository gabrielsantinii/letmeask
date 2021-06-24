import React from "react";

import { Container, Avatar } from "./styles";

type UserType = {
  user: {
    name: string | undefined;
    avatar: string | undefined;
  };
};

export const ProfileInfos = ({ user }: UserType) => {
  return (
    <Container>
      <Avatar title={user.avatar} />
      {user.name}
    </Container>
  );
};
