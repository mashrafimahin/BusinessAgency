import styled from "styled-components";

export const Container = styled.footer`
  background: var(--primaryColor);
  height: 100dvh;
  padding: 10% 6% 12%;
  position: relative;
  z-index: -2;
`;

export const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  position: relative;
  overflow: hidden;
  margin-bottom: 75px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to left, transparent 20%, #051229 100%);
    height: 100%;
    width: 20%;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(to right, transparent 20%, #051229 100%);
    height: 100%;
    width: 20%;
    z-index: 1;
  }

  .child {
    background: rgb(255, 255, 255, 0.1);
    height: 80px;
    min-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      object-fit: cover;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  .child {
    height: 400px;
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    padding-top: 80px;

    .info {
      display: flex;
      flex-direction: column;
      row-gap: 0.3rem;

      a {
        margin-top: 4px;
        font-size: 1rem;
        color: #fff;
        text-decoration: none;
        font-family: brand, sans-serif;
      }
    }

    ul {
      font-family: brand, sans-serif;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      row-gap: 1.4rem;

      li {
        list-style: none;
        color: var(--paraColor);
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        span {
          padding: 2px 10px;
          background: var(--accentColor);
          color: #fff;
          border-radius: 100px;
          font-size: 0.8rem;
          margin-left: 6px;
        }

        &:hover {
          margin-left: 4px;
          color: var(--accentColor);
        }
      }
    }

    .inBox {
      display: flex;
      align-items: center;
      padding: 10px 4px 10px 30px;
      background: #1d293e;
      transition: all 0.3s ease-in-out;

      &:focus-within {
        outline: 1px solid var(--accentColor);
        transition: 0.3s ease-in-out;
      }

      input {
        border: none;
        outline: none;
        background: transparent;
        color: var(--btnBG);
        font-size: 1rem;

        &::placeholder {
          color: var(--paraColor);
        }
      }

      button {
        padding: 10px 16px;
        border: none;
        border-left: 1px solid #263550;
        background: transparent;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
  }

  .child:nth-child(1) {
    min-width: 320px;
  }

  .child:nth-last-child(1) {
    border-left: 1px solid #27354d;
    padding-left: 70px;
    padding-bottom: 450px;
    min-width: 350px;
    display: flex;
    align-items: center;
    row-gap: 2rem;
  }
`;

export const BottomBox = styled.div`
  position: absolute;
  bottom: -270px;
  left: 0;
  background: #1d293e;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  padding: 3% 6%;
  color: var(--paraColor);

  .sci {
    display: flex;
    align-items: center;
    gap: 10px;

    i {
      color: var(--primaryColor);
      padding: 8px 7px;
      background-color: gray;
      border-radius: 50%;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: var(--accentColor);
        color: #fff;
      }
    }
  }

  .link {
    ul {
      display: flex;
      align-items: center;
      gap: 24px;

      li:nth-child(1) {
        list-style: none;
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
          color: var(--btnBG);
        }
      }
    }
  }
`;
