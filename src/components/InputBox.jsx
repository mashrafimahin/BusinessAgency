// hook
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icon
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// main
export function InputBox() {
  return (
    <Content>
      <Input type={"text"} placeholder={"Search here"} />
      <I>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </I>
    </Content>
  );
}

// styles
const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 24px;
  background: rgb(255, 255, 255, 0.1);
`;

const Input = styled.input`
  height: fit-content;
  width: 100%;
  color: #fff;
  font-family: brand, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  background: none;
  border: none;
  letter-spacing: 0.5px;

  &::placeholder {
    color: #aaa;
  }
`;

const I = styled.i`
  font-size: 1.2rem;
  color: #fff;
  pointer-events: none;
`;
