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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 90%;
  max-width: 90%;

  > img {
    max-width: 50px;
  }
  @media (min-width: 1005px) {
    width: 77.77%;
    height: 10.85%;
    max-width: none;
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
