import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;

  display: flex;
  align-items: center;

  width: 100%;
  font: 400 14px "Poppins", sans-serif;
  color: var(--gray-200);

  white-space: nowrap;

  .line {
    width: 100%;
    background-color: var(--gray-200);
    height: 1px;
  }

  .right {
    margin-left: 10px;
  }
  .left {
    margin-right: 10px;
  }
`;
