// hooks
import { styled, keyframes } from "styled-components";
// images
import Image from "../../assets/images/woman.webp";

export const Container = styled.nav`
  padding: 1.2% 4.2%;
  border-bottom: 1px solid #ffffff26;
  background: var(--primaryColor);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;

  @media screen and (min-width: 1700px) {
    padding: 0.6% 3%;
  }
  @media screen and (max-width: 1280px) {
    padding: 2% 2.2%;
  }
`;

export const Logo = styled.img`
  max-width: 12%;
  cursor: pointer;

  @media screen and (min-width: 1700px) {
    max-width: 6%;
  }
  @media screen and (max-width: 990px) {
    max-width: 20%;
  }
  @media screen and (max-width: 730px) {
    max-width: 24%;
  }
  @media screen and (max-width: 560px) {
    max-width: 32%;
  }
`;

// animation
const roll = keyframes`
  0%,100% {
    right: 10%
  } 50% {
    right: 20%;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  gap: 2.1rem;

  li {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: brand, sans-serif;
    color: var(--paraColor);
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.4px;
    cursor: pointer;
    transition: all 0.2s ease-out;
    position: relative;

    .mainIcon {
      font-size: 14px;
      font-weight: 800;
      transition: transform 0.3s ease-out;
    }

    &:hover {
      color: var(--accentColor);

      .mainIcon {
        transform: rotate(180deg);
      }
    }

    .subChild {
      position: absolute;
      top: 45px;
      left: -20px;
      background: var(--textColor);
      padding: 20px 0 10px;
      padding-bottom: 10px;
      transform: translateY(-20px);
      opacity: 0;
      z-index: -10;
      transition: all 0.3s ease-in-out;
    }

    .subChild.page {
      left: -480px;
      padding: 0;
    }

    .subChild.show {
      transform: translateY(0);
      opacity: 1;
      z-index: 10;
    }

    .serviceUL {
      ul {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        width: 350px;
        max-width: 360px;

        li {
          padding: 2px 20px 16px;
          list-style: none;
          font-size: 15px;
          border-bottom: 1px solid var(--hoverColor);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;

          .logoIcon {
            font-size: 1.2rem;
            padding: 14px;
            border-radius: 50%;
            background: var(--hoverColor);
            color: var(--accentColor);
          }

          .linkIcon {
            margin-left: 20px;
            opacity: 0;
            transition: all 0.2s ease-in-out;
          }

          &:hover {
            .linkIcon {
              opacity: 1;
              color: gray;
            }
          }
        }

        li:nth-last-child(1) {
          border-bottom: none;
        }
      }
    }

    .pageUl {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 0 40px;
      padding-right: 0;

      .child {
        padding: 30px 24px;
        padding-left: 30px;
        height: 100%;
        width: 270px;
        max-width: 300px;
        cursor: default;
        border-right: 1px solid var(--hoverColor);

        h2 {
          font-size: 1rem;
          color: var(--defaultColor);
          position: relative;
          padding-bottom: 10px;

          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 40px;
            background: var(--hoverColor);
          }

          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 26px;
            height: 2px;
            width: 6px;
            background: var(--textColor);
          }
        }

        ul {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          row-gap: 1.4rem;
          cursor: default;

          li {
            list-style: none;
            color: #777;
            cursor: pointer;
            font-size: 15px;
            position: relative;
            transition: all 0.2s ease-in-out;

            span {
              padding: 4px 8px;
              border-radius: 100px;
              font-size: 12px;
              color: #fff;
              margin-top: -4px;
              margin-left: 2px;
            }
            span.cool {
              background: var(--accentColor);
            }
            span.hot {
              background: red;
            }

            &::before {
              content: "";
              position: absolute;
              top: 50%;
              left: 0;
              height: 2px;
              width: 0;
              background: var(--accentColor);
              transition: all 0.25s ease-in-out;
            }

            &:hover {
              padding-left: 16px;
              color: var(--accentColor);

              &::before {
                width: 10px;
              }
            }
          }
        }

        .content {
          height: 100%;
          width: 100%;
          background:
            linear-gradient(#00000094 30%, #0077ff67 100%), url(${Image});
          background-position: center center;
          background-size: cover;
          display: flex;
          flex-direction: column;
          row-gap: 1rem;
          padding: 50px 20px 30px;

          img {
            height: 50px;
            width: 50px;
            max-width: 100%;
            object-fit: cover;
          }
          h1 {
            color: #fff;
            font-size: 1.8rem;
          }
          p {
            color: #eee;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 20px;
            font-weight: 400;
            font-size: 1rem;
          }

          .action {
            height: 100%;
            display: flex;
            align-items: flex-end;
            position: relative;

            img {
              position: absolute;
              top: 20%;
              right: 20%;
              height: 100px;
              width: 100px;
              max-width: 100%;
              animation: ${roll} 5s ease-in-out infinite;
            }
          }
        }
      }

      .child:nth-child(1) {
        padding-left: 0;
      }
      .child:nth-last-child(1),
      .child:nth-last-child(2) {
        border-right: none;
      }
      .child:nth-last-child(1) {
        min-width: 400px;
      }
    }

    .extend {
      ul {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        width: 200px;
        max-width: 200px;

        li {
          padding: 10px;
          padding-left: 24px;
          list-style: none;
          font-size: 15px;
          position: relative;
          transition: all 0.2s ease-in-out;

          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 16px;
            height: 2px;
            width: 0;
            background: var(--accentColor);
            transition: all 0.2s ease-in-out;
          }

          &:hover {
            padding-left: 40px;

            &::before {
              width: 16px;
            }
          }
        }
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 2px;
        width: 0;
        background: var(--accentColor);
        transition: all 1s ease-in-out;
      }

      &:hover {
        &::before {
          width: 100%;
        }
      }
    }

    /* media */
    @media screen and (max-width: 1280px) {
      .subChild.page {
        left: -450px;
      }
      .pageUl {
        .child {
          max-width: 250px;
        }
      }
    }
    @media screen and (max-width: 1220px) {
      .subChild.page {
        left: -400px;
      }
      .pageUl {
        .child {
          max-width: 220px;
        }
      }
    }
    @media screen and (max-width: 1130px) {
      .subChild.page {
        left: -370px;
      }
      .pageUl {
        .child {
          max-width: 200px;
        }
      }
    }
    @media screen and (max-width: 1060px) {
      .subChild.page {
        left: -340px;
      }
      .pageUl {
        .child:nth-last-child(1) {
          min-width: 360px;
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    gap: 1.2rem;
  }
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

export const SearchButton = styled.button`
  font-size: 0.9rem;
  color: var(--textColor);
  background: transparent;
  border: none;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: brand, sans-serif;
  font-weight: 600;
  letter-spacing: 0.6px;
  margin-right: 10px;
  cursor: pointer;
  transition: color 0.2s ease-out;

  i {
    font-size: 1.2rem;
  }

  &:hover {
    color: var(--accentColor);
  }
`;

export const Humberger = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 20px;
  cursor: pointer;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    font-family: brand, sans-serif;
    color: var(--textColor);
  }

  i {
    color: var(--textColor);
    font-size: 1.4rem;
  }
`;
