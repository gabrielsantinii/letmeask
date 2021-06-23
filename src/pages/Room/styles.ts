import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;

  background: var(--background);
`;

export const Wrapper = styled.div`
  margin-top: 64px;
  align-self: center;

  width: 55.55%;
  max-width: 800px;

  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    align-items: center;
    h1 {
      font: 600 24px "Poppins", sans-serif;
    }
    > span {
      font: 500 14px "Poppins", sans-serif;
      margin-left: 16px;

      padding: 8px 16px 8px 16px;
      border-radius: 50px;

      background: var(--pink-500);
      color: var(--white);
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    
    margin-top: 24px;
    width: 100%;

    > .form-footer {
      display: flex;
      align-items: center;
      margin-top: 16px;
      > span,
      a {
        font: 500 14px "Poppins", sans-serif;
        line-height: 21px;
        color: var(--gray-200);
      }

      > a {
        margin-left: 6px;
        color: var(--pink-500);
        transition: 180ms all;

        cursor: pointer;
        &:hover {
          text-decoration: underline;
          transform: scale(1.05);
        }
      }

      > button {
        white-space: nowrap;
        margin-left: auto;
        max-width: 177px;
      }
    }
  }
`;

export const QuestionsContainer = styled.div`
  margin-top: 32px;

  display: flex;
  flex-direction: column;
`;
