// hook
import styled from "styled-components";
// style
import { Wrapper, Heading, Paragraph } from "../Styles/Common.Styles";
const Color = { color: "#e7e7e7" };
// image
import BG from "../assets/images/disc.webp";
// data
const info = [
  {
    id: 1,
    title: "Business consultants",
    progress: 90,
  },
  {
    id: 2,
    title: "Client communication",
    progress: 82,
  },
];
// main
function Bars() {
  return (
    <Wrapper>
      <Container>
        <div className="content">
          {/* info */}
          <Heading>Skill and experience</Heading>
          <Paragraph style={Color}>
            In today's dynamic business environment, the key to success lies in
            strategic planning and operational
          </Paragraph>
          {/* progress bars */}
          {info.map((elm) => (
            <div className="bar" key={elm.id}>
              <div className="item">
                <div className="text">{elm.title}</div>
                <ProgressBar prog={elm.progress}>
                  <ProgressLoad prog={elm.progress} />
                </ProgressBar>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
}

export default Bars;

// style
const Container = styled.div`
  background: url(${BG});
  background-color: #0000ff50;
  background-position: center center;
  background-size: cover;
  background-blend-mode: multiply;
  padding: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 1820px) {
    padding: 10% 0;
  }

  .content {
    background: rgb(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 4% 4.5% 5%;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    margin-top: 100px;
    max-width: 620px;

    @media screen and (max-width: 520px) {
      padding: 4% 4% 3%;
    }

    .bar {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      margin-top: 4%;

      .item {
        position: relative;
        width: 100%;

        .text {
          font-size: 1.2rem;
          font-family: Arial, Helvetica, sans-serif;
          color: var(--textColor);
        }
      }
    }
  }
`;

const ProgressBar = styled.div`
  margin-top: 10px;
  height: 14px;
  width: 100%;
  background: var(--hoverColor);
  position: relative;

  &::before {
    content: "${(props) => (props.prog ? props.prog : "0")}";
    position: absolute;
    top: -44px;
    left: calc(${(props) => (props.prog ? props.prog : "0")}% - 1%);
    padding: 6px 10px 12px;
    color: var(--textColor);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: var(--accentColor);
    clip-path: polygon(
      0 0,
      100% 0,
      100% 30%,
      100% 81%,
      64% 82%,
      51% 100%,
      37% 81%,
      0 81%
    );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: ${(props) => (props.prog ? props.prog : "0")}%;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: var(--textColor);
    border: 6px solid var(--accentColor);
  }
`;

const ProgressLoad = styled.div`
  background: var(--accentColor);
  height: 100%;
  width: ${(props) => (props.prog ? props.prog : "0") + 1}%;
`;
