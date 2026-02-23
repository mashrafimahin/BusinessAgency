// hooks
// styles
import { Wrapper, Heading, Tagline, CommonPara } from "../Styles/Common.Styles";
import {
  Container,
  FlexBox,
  FlexChild,
  TextWrapper,
} from "../Styles/Progress.Styles";
import { DraftDiv } from "../Styles/Service.Styles";
// info
const info = [
  {
    id: 1,
    title: "93%",
    des: "Complete project",
  },
  {
    id: 2,
    title: "20M",
    des: "Reach worldwide",
  },
  {
    id: 3,
    title: "8.5x",
    des: "Faster growth",
  },
  {
    id: 4,
    title: "100",
    des: "Awards archived",
    sup: true,
    styleAdv: true,
  },
];
// main
function Progress() {
  return (
    <Wrapper>
      <Container>
        {/* heading */}
        <DraftDiv>
          <Tagline>Fun facts</Tagline>
        </DraftDiv>
        <TextWrapper>
          <Heading black={true}>
            Exploring fun tidbits and fascinating facts
          </Heading>
        </TextWrapper>
        {/* flex container */}
        <FlexBox>
          {info.map((elm) => (
            <FlexChild key={elm.id} $styleActive={elm?.styleAdv}>
              <Heading black={true}>
                {elm.title}
                {elm?.sup && <sup className="super">+</sup>}
              </Heading>
              <CommonPara>{elm.des}</CommonPara>
            </FlexChild>
          ))}
        </FlexBox>
      </Container>
    </Wrapper>
  );
}

export default Progress;
