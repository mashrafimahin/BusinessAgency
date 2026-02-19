import styled from "styled-components";

export const Wrapper = styled.section`
  /* padding: 0 8%; */

  /* @media screen and (min-width: 1480px) {
    padding: 0 5%;
  } */
`;

export const Heading = styled.h1`
  font-family: brand, sans-serif;
  font-weight: 700;
  letter-spacing: ${(props) => (props.special ? "2px" : "0")};
  color: ${(props) =>
    props.black ? "var(--defaultColor)" : "var(--textColor)"};
  font-size: ${(props) => (props.special ? "3.3rem" : "2.5rem")};
  font-weight: 800;

  &::selection {
    background: #000;
    color: #fff;
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
  font-family: brand, sans-serif;
  color: var(--accentColor);
  font-family: 1.8rem;
  font-weight: 700;
  letter-spacing: 2px;

  &::selection {
    background: #000;
    color: #fff;
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
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.yes ? "center" : "flex-start")};
`;
