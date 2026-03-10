import styled from "styled-components";
import { List } from "./Navbar.Styles";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  min-height: 100dvh;
  width: ${(props) => (props.$open ? "100%" : "0%")};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: rgb(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  z-index: 999;
  overflow: hidden;
  transition: width 400ms ease-in-out;
`;

export const Child = styled.div`
  height: 100dvh;
  width: 50%;
  background: var(--primaryColor);
  box-shadow: 0 0 10px 0 var(--primaryColor);
  padding: 45px 40px;
  display: flex;
  flex-direction: column;
  row-gap: 2.8rem;
  overflow: scroll;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: 30px;
      max-width: 100%;
      object-fit: cover;
      cursor: pointer;
    }

    i {
      font-size: 1.6rem;
      color: #fff;
      cursor: pointer;
      font-weight: 200;
    }
  }

  @media screen and (max-width: 690px) {
    width: 60%;
  }
  @media screen and (max-width: 540px) {
    width: 70%;
  }
  @media screen and (max-width: 460px) {
    width: 100%;
  }
`;

export const CustomList = styled(List)`
  @media screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1.6rem;

    li {
      color: #eee;
      font-weight: 500;
      font-size: 1.05rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      &:hover {
        color: var(--textColor);

        .mainIcon {
          transform: rotate(0deg);
        }
      }

      .mainIcon.roll {
        transform: rotate(180deg);
      }

      .option {
        border-bottom: 1px solid #777777;
        padding-bottom: 12px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .subChild {
        opacity: 1;
        z-index: 1;
        position: relative;
        background: transparent;
        padding: 0;
        top: 0;
        left: 0;
        height: 0;
        overflow: hidden;
        transition: all 300ms ease-in-out;
      }

      .subChild.open {
        height: fit-content;
      }

      .subChild.page {
        left: 0px;
      }

      .serviceUL {
        ul {
          width: auto;
          margin-top: 40px;

          li {
            padding: 14px 10px;
            flex-direction: row;
            border-bottom: 1px solid #888;
          }

          li:nth-last-child(1) {
            border-bottom: 1px solid #888;
          }
        }
      }

      .pageUl {
        margin-top: 40px;
        padding: 0;
        width: auto;
        grid-template-columns: repeat(1, 1fr);

        .child {
          padding: 0;
          width: auto;
          border-right: none;
          max-width: 100%;
          margin-bottom: 50px;

          h2 {
            color: #eee;

            &::after {
              left: 28px;
              width: 6px;
              background: var(--primaryColor);
            }
          }
          ul li {
            color: #eee;
            width: 100%;
            border-bottom: 1px solid #777;
            padding-bottom: 10px;
            display: flex;

            span {
              position: absolute;
              top: 0;
              right: 0;
            }

            &::before {
              top: 28%;
            }
          }
        }
        .child:nth-last-child(1) {
          min-width: 350px;
        }
      }

      .extend {
        ul {
          margin-top: 50px;
          width: auto;

          li {
            padding-left: 0px;
          }
        }

        &::before {
          display: none;
        }
      }
    }

    li:nth-last-child(1) .option {
      border-bottom: none;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  h2 {
    color: #eee;
    font-size: 1.8rem;
    font-family: brand, sans-serif;
    padding-bottom: 20px;
    border-bottom: 1px solid #99999937;
  }

  .info {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    .list {
      div {
        display: flex;
        flex-direction: column;
        row-gap: 0.3rem;
        margin-bottom: 20px;

        span {
          color: #aaa;
          font-family: brand, sans-serif;
          font-size: 1rem;
        }
        a {
          color: #eee;
          font-size: 1.1rem;
          text-decoration: none;
          font-family: brand, sans-serif;
        }
      }
    }

    .sci {
      display: flex;
      align-items: center;
      gap: 12px;

      a {
        padding: 10px 9.5px;
        border-radius: 50%;
        font-size: 1.1rem;
        color: var(--primaryColor);
        background: #aaaaaa96;
        transition: 300ms ease-in-out;

        &:hover {
          background: var(--accentColor);
          color: #fff;
        }
      }
    }
  }
`;
