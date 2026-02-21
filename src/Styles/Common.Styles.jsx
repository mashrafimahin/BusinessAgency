import styled from "styled-components";

export const Wrapper = styled.section`
  /* padding: 0 8%; */

  /* @media screen and (min-width: 1480px) { */
  /* padding: 0 20%; */
  /* } */
`;

export const Heading = styled.h1`
  font-family: brand, sans-serif;
  font-weight: 700;
  letter-spacing: ${(props) => (props.special ? "2px" : "0")};
  color: ${(props) =>
    props.black ? "var(--defaultColor)" : "var(--textColor)"};
  font-size: ${(props) => (props.special ? "3.3rem" : "2.8rem")};
  font-weight: 800;

  &::selection {
    background: #000;
    color: #fff;
  }

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const SubHeading = styled.h2`
  color: var(--defaultColor);
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.3px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Highlight = styled.span`
  position: relative;
  font-family: brand, sans-serif;
  font-size: 0.9rem;
  color: var(--accentColor);
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;

  &::selection {
    background: #000;
    color: #fff;
  }
`;

export const Tagline = styled(Highlight)`
  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: -20px;
    background: var(--accentColor);
    height: 5px;
    width: 5px;
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 7px;
    right: -18px;
    background: var(--accentColor);
    height: 5px;
    width: 5px;
    border-radius: 50%;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  color: var(--paraColor);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 28px;
  letter-spacing: 0.8px;

  &::selection {
    background: #000;
  }
`;

export const CommonPara = styled(Paragraph)`
  color: var(--extendPara);
  line-height: 24px;
  font-size: 1.05rem;

  @media screen and (max-width: 990px) {
    font-size: 1rem;
    width: 80%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  align-items: ${(props) => (props.col ? "flex-start" : "center")};
  justify-content: ${(props) => (props.yes ? "center" : "flex-start")};
`;

export const UserIcon = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  object-fit: contain;
  border: 4px solid white;
  filter: ${(props) => (props.gray ? "grayscale(100%)" : "")};
`;

export const CustomIcon = styled.i`
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-self: center;
  color: white;
  background: var(--primaryColor);
  border-radius: 50%;
  border: 4px solid white;
  font-weight: 800;
  z-index: 1;
`;
