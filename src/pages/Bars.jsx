// hook
import styled from "styled-components";
// style
import { Wrapper, Heading, Paragraph } from "../Styles/Common.Styles";
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
          <Heading black={true}>Skill and experience</Heading>
          <Paragraph>
            In today's dynamic business environment, the key to success lies in
            strategic planning and operational
          </Paragraph>
          {/* progress bars */}
          {info.map((elm) => (
            <div className="bar" key={elm.id}>
              <div className="item">
                <div className="text">{elm.title}</div>
                <div className="progress" prog={elm.progress}>
                  <div className="load" prog={elm.progress}></div>
                </div>
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
  background: green;
  padding: 10% 5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .content {
    background: white;
    padding: 5%;

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
        }

        .progress {
          margin-top: 10px;
          height: 14px;
          width: 100%;
          background: var(--hoverColor);

          .load {
            background: var(--accentColor);
            height: 100%;
            width: calc(${(props) => (props.prog ? props.prog : "0")} + 1%);
          }

          &::before {
            content: ${(props) => (props.prog ? props.prog : "0")};
            position: absolute;
            top: -10px;
            left: calc(${(props) => (props.prog ? props.prog : "0")} - 2.5%);
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
            left: ${(props) => (props.prog ? props.prog : "0")};
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background: var(--textColor);
            border: 6px solid var(--accentColor);
          }
        }
      }
    }
  }
`;
