// hooks
import styled from "styled-components";

// main
function Pointer() {
  return (
    <Wrapper>
      <div className="circle"></div>
    </Wrapper>
  );
}

export default Pointer;

// styles
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 2px solid var(--accentColor);
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;

  .circle {
    height: 6px;
    width: 6px;
    background-color: var(--accentColor);
    border-radius: 50%;
  }
`;
