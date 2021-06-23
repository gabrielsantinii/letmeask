import styled from "styled-components";

export const Textarea = styled.textarea`
text-align: start;
  width: 100%;
  height: 100%;
  min-height: 133px;
  outline: 0;

  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--white);

  color: var(--gray-300);

  ::placeholder {
    color: var(--gray-200);
  }

  transition: 180ms all;

  padding-left: 16px;
  padding-top: 16px;

  font-size: 14px;
  @media (min-width: 815px) {
    font-size: 16px;
  }
`;
