import styled from "styled-components";

export const Container = styled.div`
  min-height: 100dvh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: rgb(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

export const Child = styled.div`
  min-height: 100dvh;
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
`;
