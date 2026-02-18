import { styled, keyframes } from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0rem;
  margin-top: 10%;
`;

export const Child = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 50%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 40%;
    left: 10%;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: var(--primaryColor);
  }

  &::after {
    content: "";
    position: absolute;
    top: 43.4%;
    left: 8.5%;
    height: 80px;
    width: 24px;
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
`;

export const Image = styled.img`
  height: 82%;
  width: 82%;
  object-fit: cover;
`;

export const PlayfulText = styled.div`
  position: absolute;
  top: 39.5%;
  left: 9.5%;
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
  height: 65px;
  width: 65px;
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
