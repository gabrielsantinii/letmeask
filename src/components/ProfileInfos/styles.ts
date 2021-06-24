import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  font: 400 14px "Poppins", sans-serif;
  color: var(--gray-300);
`;

export const Avatar = styled.div`
  background: var(--purple-500);

  ${(props) =>
    props.title &&
    `
    background: url(${props.title});
    background-position: center;
    background-size: cover;
    `};

  width: 32px;
  height: 32px;

  border-radius: 50%;
  margin-right: 8px;
`;
