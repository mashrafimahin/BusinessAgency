import styled from "styled-components";

export const Container = styled.div`
  background: var(--hoverColor);
  padding: 8% 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.8rem;

  @media screen and (min-width: 1480px) {
    padding: 8% 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 8% 2%;
  }
`;

export const TextWrapper = styled.div`
  width: 50%;
  text-align: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 760px) {
    width: 70%;
  }
  @media screen and (max-width: 540px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const FlexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 94%;
  padding: 0 3%;

  @media screen and (min-width: 1480px) {
    padding: 0 10%;
  }
  @media screen and (min-width: 1720px) {
    padding: 0;
  }
  @media screen and (max-width: 1305px) {
    width: 100%;
    padding: 0 1%;
  }
  @media screen and (max-width: 1024px) {
    padding: 0;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 10%;
  }
  @media screen and (max-width: 686px) {
    padding: 0 4%;
  }
`;

export const FlexChild = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--textColor);
  padding: 3rem 4rem 3rem 3rem;
  row-gap: 4px;
  width: 100%;

  .super {
    position: absolute;
    top: 20%;
  }

  &::before {
    display: ${(props) => (props.$styleActive ? "none" : "block")};
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 1px;
    background-color: #2222;
  }

  &::after {
    display: ${(props) => (props.$styleActive ? "none" : "block")};
    content: "";
    position: absolute;
    top: 45%;
    right: -7px;
    height: 8px;
    width: 8px;
    background: #fff;
    border-radius: 50%;
    border: 3px solid var(--accentColor);
    z-index: 1;
    box-shadow:
      0 -4px 0 0 #fff,
      0 4px 0 0 #fff;
  }

  @media screen and (max-width: 1305px) {
    padding: 2.5rem 2rem 2.5rem 3rem;
  }
  @media screen and (max-width: 990px) {
    padding: 2.5rem 1rem 2.5rem 2rem;
  }
  @media screen and (max-width: 910px) {
    padding: 2.5rem 0 2.5rem 2rem;
  }
  @media screen and (max-width: 845px) {
    padding: 2.5rem 0 2.5rem 1.05rem;
  }
  @media screen and (max-width: 767px) {
    &::before {
      bottom: 0;
    }
    &::after {
      display: none;
    }
  }
`;
