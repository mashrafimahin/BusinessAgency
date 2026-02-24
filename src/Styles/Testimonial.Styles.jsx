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
`;

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  overflow: hidden;
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
    /* background: green; */
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
`;
