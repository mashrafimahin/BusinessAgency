import styled from "styled-components";

export const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  line-height: 1;
  font-family: brand, sans-serif;
  font-weight: 600;
  color: var(--defaultColor);
  background-color: ${(props) =>
    props.special ? "var(--primaryColor)" : "var(--btnBG)"};
  padding: ${(props) => (props.$resize ? "2.6px 3.8px" : "5.5px")};
  border-radius: 50px;
  position: relative;
  z-index: 1;
  border: none;
  cursor: pointer;
  overflow: hidden;

  .btn_inner {
    position: relative;
    z-index: 1;
    padding: 15px 20px 15px 55px;
    width: 100%;
    text-align: center;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 45px;
      height: 100%;
      background-color: var(--accentColor);
      border-radius: 50px;
      transition: all 0.3s ease-in-out;
      z-index: 0;
    }
  }

  .btn_icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    min-width: 45px;
    height: 100%;
    z-index: 2;
    font-size: 18px;
    color: var(--textColor);

    span {
      overflow: hidden;
      position: relative;
      display: inline-flex;
    }

    i {
      transition: transform 0.4s ease-in-out;
    }

    i:last-child {
      position: absolute;
      transform: translateX(-150%);
    }
  }

  .btn_text {
    display: inline-flex;
    overflow: hidden;
    color: ${(props) =>
      props.special ? "var(--textColor)" : "var(--defaultColor)"};
    text-shadow: 0 23px 0 currentColor;
    white-space: nowrap;

    span {
      display: flex;
      align-items: center;
      backface-visibility: hidden;
      transform: translateY(0);
      transition: 0.5s;
    }
  }

  /* HOVER EFFECT */
  &:hover .btn_inner::before {
    width: 100%;
  }

  &:hover .btn_icon i:first-child {
    transform: translateX(150%);
  }

  &:hover .btn_icon i:last-child {
    transform: translateX(0);
  }

  &:hover .btn_text span {
    color: var(--textColor);
    transform: translateY(-23px);
  }

  /* MOBILE */
  @media (max-width: 576px) {
    padding: 4.5px;

    .btn_inner {
      padding: 12px 18px 12px 50px;
    }

    .btn_icon {
      min-width: 40px;
      font-size: 1.4em;
    }

    .btn_inner::before {
      width: 40px;
    }
  }
`;
