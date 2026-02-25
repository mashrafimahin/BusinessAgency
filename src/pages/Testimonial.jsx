// hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import {
  Wrapper,
  Heading,
  SubHeading,
  Tagline,
  CommonPara,
} from "../Styles/Common.Styles";
import {
  Container,
  Header,
  SliderWrapper,
  Slider,
} from "../Styles/Testimonial.Styles";
import { DraftDiv } from "../Styles/Service.Styles";
const headSize = { marginTop: "20px" };
const hrSize = { margin: "24px 0" };
const leftAlign = { alignItems: "flex-start" };
// icons
import {
  faArrowLeft,
  faArrowRight,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
// images
import CharOne from "../assets/images/char-1.webp";
import CharTwo from "../assets/images/char-2.webp";
import CharThree from "../assets/images/char-3.webp";
// info
const info = [
  {
    id: 1,
    des: "Their thorough market analysis and customized strategies helped us streamline our operations and improve our overall efficiency. We saw a significant increase in our bottom line and were able to make data-driven decisions that positively impacted our business. The consultants were not just advisors in our success",
    name: "Burdee Nicholas",
    title: "Business owener",
    profile: CharOne,
  },
  {
    id: 2,
    des: "Our experience with Solvior has been nothing short of exceptional. From day one, their team demonstrated a deep understanding of our industry and quickly identified key areas for improvement. Their recommendations were not only innovative but also practical, leading to a substantial operational efficiency.",
    name: "Ester Howard",
    title: "Business owener",
    profile: CharTwo,
  },
  {
    id: 3,
    des: "Our experience with Solvior has been nothing short of exceptional. From day one, their team demonstrated a deep understanding of our industry and quickly identified key areas for improvement. Their recommendations were not only innovative but also practical, leading to a substantial operational efficiency.",
    name: "Ester Howard",
    title: "Business owener",
    profile: CharThree,
  },
];
// main
function Testimonial() {
  return (
    <Wrapper>
      <Container>
        {/* header section */}
        <Header>
          <div className="child">
            <DraftDiv>
              <Tagline>Testimonials</Tagline>
            </DraftDiv>
            <Heading black={true} style={headSize}>
              Listening to our clients
            </Heading>
          </div>
          <div className="triggers">
            <i>
              <FontAwesomeIcon icon={faArrowLeft} />
            </i>
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
          </div>
        </Header>
        {/* slider */}
        <SliderWrapper>
          {info.map((elm) => (
            <Slider key={elm.id}>
              <div className="child">
                <i>
                  <FontAwesomeIcon icon={faQuoteRight} />
                </i>
                <CommonPara>
                  {elm.des}
                  <hr style={hrSize} />
                </CommonPara>
              </div>
              <div className="child">
                <img src={elm.profile} alt={elm.name} />
                <div className="intro">
                  <SubHeading black={true}>{elm.name}</SubHeading>
                  <CommonPara>{elm.title}</CommonPara>
                </div>
              </div>
            </Slider>
          ))}
        </SliderWrapper>
      </Container>
    </Wrapper>
  );
}

export default Testimonial;
