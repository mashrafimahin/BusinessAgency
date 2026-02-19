import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0rem;
  margin-top: 3%;
  margin-left: 4%;

  @media screen and (max-width: 990px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1200px) {
    margin-left: 0;
    justify-content: flex-start;
  }

  @media screen and (min-width: 1480px) {
    margin-left: 0%;
    gap: 5rem;
    width: auto;
  }
`;

export const Child = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const ContentChild = styled(Child)`
  max-width: 645px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 40%;
    left: 2%;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: var(--primaryColor);
  }

  &::after {
    content: "";
    position: absolute;
    top: 43.4%;
    left: 0;
    height: 80px;
    width: 30px;
    background-color: var(--primaryColor);
    /* background-color: white; */
    clip-path: polygon(
      0 0,
      10% 6%,
      20% 10%,
      30% 12%,
      41% 13%,
      52% 13%,
      64% 12%,
      75% 10%,
      85% 7%,
      92% 4%,
      100% 0,
      100% 100%,
      92% 96%,
      85% 93%,
      75% 90%,
      64% 88%,
      52% 87%,
      41% 87%,
      30% 88%,
      20% 90%,
      10% 94%,
      0 100%
    );
  }

  @media screen and (max-width: 1200px) {
    scale: 0.9;
  }

  @media screen and (min-width: 1480px) {
    scale: 1.35;
    margin-top: 20%;
  }
`;

export const Image = styled.img`
  max-width: 420px;

  @media screen and (max-width: 990px) {
    max-width: max-content;
  }
`;

export const PlayfulText = styled.div`
  position: absolute;
  top: 40.5%;
  left: 5.5%;
  height: 22%;
  width: 22%;
  border-radius: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const animate = keyframes`
     from {
         rotate: 0;
     }to {
         rotate: 360deg;
     }
 `;

export const PlayText = styled(Image)`
  max-width: 100%;
  animation: ${animate} 10s linear infinite;
`;

export const PlayButton = styled.button`
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: var(--accentColor);
  font-size: 1.2rem;
  color: var(--textColor);
  border: none;
  cursor: pointer;
  transition: scale 0.1s ease-out;
  &:active {
    scale: 0.9;
  }
`;

const OverlayAnim = keyframes`
  0%,100% { transform: translateX(0); }
  50% { transform: translateX(-20px); }
`;

const KidneyAnim = keyframes`
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const ScaleAnim = keyframes`
  0%,100% { transform: translateX(-50%) scale(1); }
  50% { transform: translateX(-50%) scale(1.15); }
`;

export const OverlayPic = styled.img`
  position: absolute;
  top: -2%;
  right: 2%;
  max-width: 100%;
  z-index: -2;
  opacity: 0.4;
  animation: ${OverlayAnim} 4s linear infinite;

  @media screen and (min-width: 1480px) {
    right: 4%;
  }
`;

export const Kidney = styled(OverlayPic)`
  left: -10%;
  animation: ${KidneyAnim} 4s linear infinite;

  @media screen and (min-width: 1480px) {
    left: 4%;
  }
`;

export const Scale = styled(OverlayPic)`
  top: 58%;
  left: 50%;
  opacity: 1;
  animation: ${ScaleAnim} 2s linear infinite;
`;
