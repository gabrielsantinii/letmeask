import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 10.85%;
  max-height: 89px;

  border-bottom: 2px solid var(--gray-75);
  background-color: var(--white);
`;

export const Wrapper = styled.div`
  width: 77.77%;
  height: 10.85%;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    max-width: 100.2px;
  }

  > .right-side {
    margin-left: auto;
    display: flex;
    align-items: center;

    > :last-child {
      margin-left: 8px;
    }
  }
`;
