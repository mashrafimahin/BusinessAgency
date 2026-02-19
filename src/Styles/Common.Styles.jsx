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
  letter-spacing: 2px;
  color: ${(props) =>
    props.black ? "var(--defaultColor)" : "var(--textColor)"};
  font-size: 3.3rem;

  &::selection {
    background: #000;
  }
`;

export const Highlight = styled.span`
  font-family: inherit;
  color: var(--accentColor);

  &::selection {
    background: #000;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  color: var(--paraColor);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 28px;

  &::selection {
    background: #000;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.yes ? "center" : "flex-start")};
`;
