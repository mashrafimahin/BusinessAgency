// hooks
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import {
  Container,
  Child,
  ImageWrapper,
  Image,
  PlayfulText,
  PlayText,
  PlayButton,
} from "../Styles/Hero.Styles";
import {
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
// icons
import { faPlay } from "@fortawesome/free-solid-svg-icons";

// main
function Hero() {
  return (
    <Container>
      {/* info */}
      <Child>
        <Heading>
          Maximise growth qualified business <Highlight>consulting</Highlight>
        </Heading>
        <Paragraph>
          Transform your business with expert consultancy services our team of
          seasoned consultants unparalleled.
        </Paragraph>
        <FlexBox style={topDown}>
          <Button>Free Consultation</Button>
        </FlexBox>
      </Child>
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
    </Container>
  );
}

export default Hero;
