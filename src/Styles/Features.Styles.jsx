import { styled, keyframes } from "styled-components";

export const Container = styled.section`
  position: relative;
  background-color: var(--btnBG);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.1rem;
  padding: 10% 0;

  &::before {
    content: "";
    position: absolute;
    top: -4%;
    left: 0;
    height: 100px;
    width: 100%;
    background: inherit;
    clip-path: ellipse(75% 100px at 50% 0);
    transform: scaleY(-1);
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0 6%;
  margin-top: 20px;

  @media screen and (max-width: 1230px) {
    padding: 0 4%;
  }

  @media screen and (max-width: 1074px) {
    padding: 0 2%;
  }

  @media screen and (max-width: 984px) {
    padding: 0 10%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 580px) {
    padding: 0 4%;
    grid-template-columns: 1fr;
  }
`;

const hoverAnim = keyframes`
  0%, 100% {
    transform: translateX(0)
  }
  25% {
    transform: translateX(20px)
  }
  40% {
    transform: translateX(6px)
  }
  65% {
    transform: translateX(14px);
  }
`;

export const Box = styled.div`
  flex: 0 0 1;
  position: relative;
  padding: 40px 25px;
  border: 1px solid #dcdfe4;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--hoverColor);
    transform: translateX(-100%);
    transition: all 0.4s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    transform: translateX(0);
  }

  i {
    font-size: 4rem;
    color: var(--iconColor);
  }

  &:hover {
    i {
      animation: ${hoverAnim} 1s ease-in-out;
    }
  }
`;
