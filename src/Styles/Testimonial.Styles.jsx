import styled from "styled-components";

export const Container = styled.div`
  background: var(--btnBG);
  padding: 12% 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3rem;

  @media screen and (min-width: 1820px) {
    padding: 12% 0;
  }
  @media screen and (max-width: 1300px) {
    padding: 12% 2%;
  }
  @media screen and (max-width: 1024px) {
    padding: 10% 6%;
    row-gap: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 8% 4%;
    row-gap: 2rem;
  }
  @media screen and (max-width: 576px) {
    padding: 6% 3%;
    row-gap: 1.5rem;
  }
  @media screen and (max-width: 425px) {
    padding: 5% 2%;
    row-gap: 1.2rem;
  }
  @media screen and (max-width: 375px) {
    padding: 4% 2%;
    row-gap: 1rem;
  }
  @media screen and (max-width: 320px) {
    padding: 3% 2%;
    row-gap: 0.8rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .child {
  }
  .triggers {
    display: flex;
    gap: 10px;

    i {
      padding: 17px 16px;
      border-radius: 50%;
      color: var(--defaultColor);
      border: 2px solid var(--hoverColor);
      font-size: 16px;
      cursor: pointer;
      transition: 200ms ease-in-out;

      &:hover {
        color: #fff;
        background: var(--accentColor);
      }
    }
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
  @media screen and (max-width: 425px) {
    gap: 1rem;
  }
`;

export const Slider = styled.div`
  min-width: 50%;
  padding: 3rem 4rem 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  background-color: var(--hoverColor);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 69%;
    left: 0;
    height: 80px;
    width: 30px;
    background: var(--btnBG);
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

  .child {
    display: flex;
    gap: 2rem;

    i {
      font-size: 4rem;
      color: var(--accentColor);
    }

    .intro {
      display: flex;
      flex-direction: column;
      row-gap: 0.3rem;
      margin-top: 1.2rem;
    }

    img {
      height: 110px;
      width: 110px;
      margin-left: -10px;
      border-radius: 50%;
      object-fit: cover;
      filter: grayscale(100%);
      border: 10px solid var(--btnBG);
    }
  }

  @media screen and (min-width: 1820px) {
    padding: 3rem 2rem 3rem 1.5rem;
  }
  @media screen and (min-width: 2020px) {
    &::before {
      top: 67%;
    }
  }
  @media screen and (min-width: 2650px) {
    &::before {
      top: 64%;
    }
  }
  @media screen and (max-width: 1300px) {
    padding: 3rem 3rem 2rem 1.5rem;
    .child {
      gap: 1rem;
    }
  }
  @media screen and (max-width: 1024px) {
    min-width: 100%;
    padding: 2.5rem 3rem 2.5rem 1.5rem;
    &::before {
      top: 64%;
    }
    .child {
      gap: 1.5rem;
    }
    i {
      font-size: 3.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    min-width: 100%;
    padding: 2rem 2.5rem 2rem 1.5rem;
    &::before {
      top: 62%;
    }
    .child {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      background: transparent;
    }
    i {
      font-size: 3rem;
    }
    img {
      height: 90px;
      width: 90px;
      margin-left: 0;
      border: 8px solid var(--btnBG);
    }
  }
  @media screen and (max-width: 576px) {
    padding: 1.8rem 2rem 1.8rem 1.5rem;
    &::before {
      top: 64%;
    }
    .child {
      gap: 0.8rem;
    }
    i {
      font-size: 2.5rem;
    }
    img {
      height: 80px;
      width: 80px;
      border: 6px solid var(--btnBG);
    }
  }
  @media screen and (max-width: 485px) {
    padding: 1.5rem 1.8rem 1.5rem 1.2rem;
    &::before {
      top: 66%;
    }
    .child {
      gap: 0.6rem;
    }
    i {
      font-size: 2.2rem;
    }
    img {
      height: 70px;
      width: 70px;
      border: 5px solid var(--btnBG);
    }
  }
  @media screen and (max-width: 375px) {
    padding: 1.2rem 1.5rem 1.2rem 1rem;
    &::before {
      top: 69%;
    }
    .child {
      gap: 0.5rem;
    }
    i {
      font-size: 2rem;
    }
    img {
      height: 60px;
      width: 60px;
      border: 4px solid var(--btnBG);
    }
  }
  @media screen and (max-width: 320px) {
    padding: 1rem 1.2rem 1rem 0.8rem;
    .child {
      gap: 0.4rem;
    }
    i {
      font-size: 1.8rem;
    }
    img {
      height: 50px;
      width: 50px;
      border: 3px solid var(--btnBG);
    }
  }
`;
