// hooks
import { useRef } from "react";
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
// animation
import HeroAnim from "../anim/HeroAnim";
// text info
const headText = "Maximise growth qualified business".split("");
const headLastText = "consulting".split("");

// main
function Hero() {
  // ref
  const target = useRef();
  // anim
  HeroAnim(target);
  // main
  return (
    <Wrapper>
      <Container>
        {/* info */}
        <ContentChild ref={target}>
          <Heading
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)", width: "80%" }}
            $special={true}
          >
            {headText.map((letter, index) => (
              <div className="letter" key={index}>
                {letter === " " ? "\u00A0" : letter}
              </div>
            ))}
            <Highlight $special={true}>
              {headLastText.map((lett, i) => (
                <div className="letter letterTwo" key={i}>
                  {lett}
                </div>
              ))}
            </Highlight>
          </Heading>
          <Paragraph className={"para"}>
            Transform your business with expert consultancy services our team of
            seasoned consultants unparalleled.
          </Paragraph>
          <FlexBox style={topDown} className={"btn"}>
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
