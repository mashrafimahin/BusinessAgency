import styled from "styled-components";

export const Container = styled.div`
  padding: 12% 8%;
  background: var(--btnBG);
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 0;
    height: 100px;
    width: 100%;
    background: inherit;
    z-index: -1;
    clip-path: ellipse(75% 100px at 50% 0);
  }

  @media screen and (min-width: 1820px) {
    padding: 12% 0;
  }
  @media screen and (max-width: 1300px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 767px) {
    padding: 12% 4% 32%;

    .flexible {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.5rem;
  row-gap: 2rem;

  .child {
    background: var(--hoverColor);
    padding: 1rem;
    display: flex;
    row-gap: 0.8rem;
    column-gap: 20px;
    position: relative;
    height: 220px;

    .image {
      min-width: 180px;
      height: 100%;

      img {
        height: 100%;
        max-width: 100%;
        object-fit: cover;
      }
    }

    .text {
      .deadline {
        display: flex;
        align-items: center;
        gap: 14px;
        font-family: Arial, Helvetica, sans-serif;
        flex-wrap: wrap;

        .tagDiv {
          padding: 6px 10px;
          border: 1px solid var(--paraColor);
          border-radius: 100px;
          color: var(--paraColor);
          font-size: 0.9rem;
          letter-spacing: 0.4px;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:hover {
            color: #fff;
            background: var(--accentColor);
            border: 1px solid var(--accentColor);
          }
        }

        ul {
          position: absolute;
          bottom: 20px;
          display: flex;
          gap: 26px;

          li {
            color: var(--paraColor);
            font-size: 15px;
            white-space: nowrap;
          }

          li:nth-child(1) {
            list-style: none;
          }
        }
      }
    }

    .heads {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      row-gap: 1rem;

      h1 {
        font-family: brand, sans-serif;
        font-size: 1.6rem;
      }
    }

    button {
      margin-top: 20px;
      color: var(--primaryColor);
      font-size: 1rem;
      font-weight: 500;
      border: none;
      background: transparent;
      cursor: pointer;
      position: relative;
      font-family: brand, sans-serif;
      display: flex;
      align-items: center;
      gap: 8px;

      &::before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 1px;
        width: 0;
        background-color: var(--defaultColor);
        transition: all 0.2s ease-in-out;
      }

      &:hover::before {
        width: 100%;
      }
    }

    @media screen and (min-width: 1200px) and (max-width: 1300px) {
      .text {
        h1 {
          font-size: 1.4rem;
        }
      }
    }
    @media screen and (max-width: 1199px) {
      .image {
        min-width: 200px;
        height: auto;
      }
    }
    @media screen and (max-width: 767px) {
      flex-direction: column;
      height: auto;
      padding-bottom: 6%;

      .image {
        min-width: 100%;
        height: 300px;

        img {
          min-width: 100%;
          object-fit: cover;
        }
      }

      .text {
        .deadline {
          ul {
            position: initial;
          }
        }
      }
    }
  }

  .child:nth-child(1) {
    flex-direction: column;
    grid-row: 1 / 4;
    height: auto;

    .image {
      height: auto;

      img {
        height: auto;
      }
    }

    .text {
      .deadline {
        ul {
          position: initial;
        }
      }
    }

    .heads {
      h1 {
        font-size: 2rem;
      }
    }

    @media screen and (min-width: 1200px) and (max-width: 1300px) {
      .text {
        h1 {
          font-size: 1.6rem;
        }
      }
    }
    @media screen and (max-width: 1199px) {
      .image {
        min-width: auto;
        height: auto;

        img {
          /* height: 100px; */
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 10%;
  }
  @media screen and (max-width: 840px) {
    padding: 0 6%;
  }
  @media screen and (max-width: 580px) {
    padding: 0;
  }
`;
