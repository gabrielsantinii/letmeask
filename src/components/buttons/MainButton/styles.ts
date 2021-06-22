import styled from "styled-components";

type propsType = {
  color: string;
};

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--white);

  width: 100%;
  height: 100%;
  max-height: 50px;

  background: ${(props) => props.color};
  font-weight: 400;

  border-radius: 8px;

  padding: 13px 40px 13px 40px;

  > img {
    margin-right: 10px;

    width: 16px;
      height: 16px;

    @media (min-width: 815px) {
      width: 24px;
      height: 24px;
    }
  }

  outline: 0;
  border: 0;

  transition: 130ms all;
  cursor: pointer;

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  font: 500 "Poppins", sans-serif;

  font-size: 14px;
  @media (min-width: 815px) {
    font-size: 16px;
  }
`;
