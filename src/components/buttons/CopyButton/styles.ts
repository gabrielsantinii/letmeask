import styled from "styled-components";

export const ClipButton = styled.div`
  display: flex;
  align-items: center;

  background-color: transparent;
  height: 100%;
  max-height: 50px;
  border-radius: 8px;

  border: 1px solid ${(props) => props.color};

  transition: 130ms all;
  cursor: pointer;

  white-space: nowrap;
  > .text {
    display: flex;
    padding: 20px 10px 20px 10px;

    font: 500 14px "Poppins", sans-serif;

    @media (min-width: 815px) {
      font-size: 16px;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.color};

  min-width: 50px;
  max-width: 45px;
  min-height: 50px;

  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;

  > img,
  svg {
    width: 20px;
    height: 20px;
    fill: var(--white);
  }
`;
