import styled from "styled-components";

export const Container = styled.main`
  padding: 0 8%;
`;

export const Heading = styled.h1`
  font-family: brand, sans-serif;
  font-weight: 700;
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
