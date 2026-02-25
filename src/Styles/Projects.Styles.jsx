import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.4rem;
  padding: 12% 0;
  background: var(--hoverColor);
`;

export const SlideWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2.5rem;
  height: 550px;
  width: 100%;
  padding: 1rem;
  overflow: hidden;

  @media screen and (min-width: 1380px) {
    gap: 1rem;
    width: 96%;
    padding: 0;
  }
  @media screen and (min-width: 2100px) {
    height: 700px;
  }
  @media screen and (max-width: 1340px) {
    gap: 1.5rem;
    height: 500px;
  }
  @media screen and (max-width: 1300px) {
    gap: 0.8rem;
    height: 400px;
  }
  @media screen and (max-width: 990px) {
    gap: 1.2rem;
    height: 500px;
  }
  @media screen and (max-width: 745px) {
    height: 400px;
  }
  @media screen and (max-width: 545px) {
    height: 500px;
  }
`;

export const Child = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 410px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    transition: scale 0.3s ease-in-out;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    row-gap: 1rem;
    min-height: 100%;
    width: 100%;
    background: linear-gradient(transparent, var(--primaryColor) 90%);
    z-index: 1;

    h2 {
      font-family: brand, sans-serif;
      color: #fff;
      font-size: 1.6rem;
      font-weight: 700;
      position: relative;

      span {
        opacity: 0;
        color: #fff;
        font-size: 1.2rem;
        margin-left: 2px;
        transition: 0.4s ease-in-out;
      }
    }

    .skill {
      display: flex;
      align-items: center;
      gap: 0.6rem;

      button {
        padding: 4px 16px;
        font-family: brand, sans-serif;
        font-size: 0.9rem;
        background: rgb(255, 255, 255, 0.1);
        border: none;
        border-radius: 100px;
        color: #b8b8b8;
      }
    }
  }

  &:hover {
    img {
      scale: 1.1;
    }

    .info {
      h2 {
        span {
          opacity: 1;
          margin-left: 8px;
        }
      }
    }
  }

  @media screen and (min-width: 1380px) {
    min-width: 25%;
  }
  @media screen and (max-width: 1300px) {
    min-width: 350px;
  }
  @media screen and (max-width: 990px) {
    min-width: 400px;
  }
  @media screen and (max-width: 850px) {
    min-width: 350px;
  }
  @media screen and (max-width: 745px) {
    min-width: 250px;
  }
  @media screen and (max-width: 545px) {
    min-width: 350px;
  }
  @media screen and (max-width: 384px) {
    min-width: 300px;
  }
`;

export const Controller = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  i {
    margin-top: 20px;
    font-size: 0.9rem;
    color: var(--defaultColor);
    border: 2px solid #7b818340;
    cursor: pointer;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #fff;
      background: var(--accentColor);
    }
  }
`;
