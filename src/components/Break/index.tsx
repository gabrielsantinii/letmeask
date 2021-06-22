import React from 'react';

import { Container } from './styles';

export const Break: React.FC = ({ children }) => {
  return <Container>
      <div className="line left" />
      {children}
      <div className="line right" />
  </Container>;
}
