import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3rem;
  background: var(--btnBG);
  padding: 12% 10%;

  @media screen and (max-width: 1100px) {
    padding: 12% 6%;
  }
  @media screen and (max-width: 990px) {
    padding: 12% 10%;
  }
  @media screen and (max-width: 520px) {
    padding: 12% 2%;
  }
`;

export const TextArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1.6rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  row-gap: 2rem;
`;

export const Card = styled.div`
  display: flex;
  background: var(--primaryColor);

  @media screen and (max-width: 990px) {
    flex-direction: column;
  }

  .child {
    flex: 1;
    overflow: hidden;

    .infoChild {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 1.6rem;
      padding: 10% 12% 6%;

      @media screen and (max-width: 990px) {
        padding: 6% 4.5%;
      }

      span {
        color: #fff;
        font-size: 20px;
      }

      img {
        margin-top: 2rem;
        max-width: 14%;
        object-fit: cover;
      }

      .res {
        scale: 0.9;
        margin-left: -10px;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 767px) {
    .child img {
      max-width: 100%;
    }
  }
`;
