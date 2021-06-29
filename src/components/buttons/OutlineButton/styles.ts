import styled from "styled-components";

type propsType = {
  color: string;
};

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  min-width: 100px;
  max-width: 150px;

  height: 100%;
  max-height: 50px;

  color: ${(props) => props.color};

  border-radius: 8px;
  padding: 6px 20px 6px 20px;
  @media (min-width: 1005px) {
    padding: 13px 40px 13px 40px;
  }
  outline: 0;
  border: 1px solid ${(props) => props.color};

  transition: 130ms all;
  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${(props) => props.color};
    color: var(--background);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  font: 500 "Poppins", sans-serif;
  white-space: nowrap;

  font-size: 14px;
  @media (min-width: 815px) {
    font-size: 16px;
  }
`;
