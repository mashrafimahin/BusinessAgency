// hooks
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import {
  Container,
  Child,
  ContentChild,
  ImageWrapper,
  Image,
  PlayfulText,
  PlayText,
  PlayButton,
  OverlayPic,
  Kidney,
  Scale,
} from "../Styles/Hero.Styles";
import {
  Wrapper,
  Heading,
  Highlight,
  Paragraph,
  FlexBox,
} from "../Styles/Common.Styles";
const topDown = {
  marginTop: "20px",
};
// components
import Button from "../components/PrimaryButton";
// images
import hero from "../assets/images/hero-1.webp";
import text from "../assets/images/play-text.png";
import Kidne from "../assets/images/hero-1.png";
import Overle from "../assets/images/hero-2.png";
import Gemini from "../assets/images/hero-3.png";
// icons
import { faPlay } from "@fortawesome/free-solid-svg-icons";

// main
function Hero() {
  return (
    <Wrapper>
      <Container>
        {/* info */}
        <ContentChild>
          <Heading
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
            special={true}
          >
            Maximise growth qualified business{" "}
            <Highlight $special={true}>consulting</Highlight>
          </Heading>
          <Paragraph>
            Transform your business with expert consultancy services our team of
            seasoned consultants unparalleled.
          </Paragraph>
          <FlexBox style={topDown}>
            <Button>Free Consultation</Button>
          </FlexBox>
        </ContentChild>
        {/* image */}
        <Child>
          <ImageWrapper>
            <Image src={hero} />
            <PlayfulText>
              <PlayText src={text} />
              <PlayButton>
                <FontAwesomeIcon icon={faPlay} />
              </PlayButton>
            </PlayfulText>
          </ImageWrapper>
        </Child>
        {/* overlays */}
        <OverlayPic src={Overle} />
        <Kidney src={Kidne} />
        <Scale src={Gemini} />
      </Container>
    </Wrapper>
  );
}

export default Hero;
