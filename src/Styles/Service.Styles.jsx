import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  padding: 12% 6% 10%;
  padding-right: 10%;
  background: var(--btnBG);
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 95%;
    background-color: var(--hoverColor);
    border-radius: 0 0 30% 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 35.5%;
    height: 54px;
    width: 120px;
    background: var(--btnBG);
    clip-path: polygon(
      0 0,
      6% 10%,
      10% 20%,
      12% 30%,
      13% 41%,
      13% 52%,
      12% 64%,
      10% 75%,
      7% 85%,
      4% 92%,
      0 100%,
      100% 100%,
      96% 92%,
      93% 85%,
      90% 75%,
      88% 64%,
      87% 52%,
      87% 41%,
      88% 30%,
      90% 20%,
      94% 10%,
      100% 0
    );
  }

  @media screen and (max-width: 1180px) {
    padding-right: 4%;

    &::before {
      width: 100%;
    }
  }
  @media screen and (max-width: 990px) {
    justify-content: flex-start;
    padding-left: 12.5%;
    &::after {
      display: none;
    }
  }
  @media screen and (max-width: 989px) {
    padding-left: 8%;
  }
  @media screen and (max-width: 767px) {
    padding-left: 0;
    justify-content: center;
  }
  @media screen and (max-width: 580px) {
    justify-content: flex-start;
    padding: 20% 4%;
  }
`;

export const DraftDiv = styled.div`
  padding-left: 22px;
`;

export const Child = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1.6rem;
  height: auto;
  width: 50%;
  z-index: 1;

  @media screen and (max-width: 1150px) {
    width: 55%;
  }
  @media screen and (max-width: 1040px) {
    width: 58%;
  }
  @media screen and (max-width: 990px) {
    width: 90%;
  }
  @media screen and (max-width: 767px) {
    width: 80%;
  }
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

export const Shape = styled.img`
  position: absolute;
  top: 20%;
  left: 0;
  max-width: 40%;
  object-fit: cover;
  filter: drop-shadow(10px 10px 0 var(--btnBG))
    drop-shadow(-10px 10px 0 var(--btnBG))
    drop-shadow(10px -10px 0 var(--btnBG))
    drop-shadow(-10px -10px 0 var(--btnBG));

  @media screen and (max-width: 990px) {
    display: none;
  }
`;

export const TopShape = styled(Shape)`
  top: 2%;
  left: 35%;
  max-width: 10%;
  border: 12px solid var(--btnBG);
  border-radius: 50%;
  filter: none;
  z-index: 1;
`;

export const SubChild = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 580px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;

export const Box = styled.div`
  flex: 1;
  padding: 5%;
  border-top: 1px solid #c6c8ca;

  @media screen and (max-width: 990px) {
    flex: 0.4;
    padding: 0;
    padding-top: 5%;
    padding-left: 3.5%;
  }

  @media screen and (max-width: 790px) {
    flex: 1;
  }
`;

export const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1.6rem;
`;

export const List = styled.ul`
  padding-bottom: 20px;

  li {
    font-family: brand, sans-serif;
    font-size: 1rem;
    color: var(--listColor);
    margin: 1rem auto;
    font-weight: 800;
    margin-left: 16px;
    /* list-style-image: ; */
  }
`;
