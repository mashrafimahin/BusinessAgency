// hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// context
// import ScreenContext from "../context/ScreenSizeContext"
// styles
import {
  Container,
  SlideWrapper,
  Child,
  Controller,
} from "../Styles/Projects.Styles";
import { Tagline, Heading } from "../Styles/Common.Styles";
// images
import ImageOne from "../assets/images/slide-1.webp";
import ImageTwo from "../assets/images/slide-2.webp";
import ImageThree from "../assets/images/slide-3.webp";
import ImageFour from "../assets/images/slide-4.webp";
// icons
import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
// info
const info = [
  {
    id: 1,
    image: ImageOne,
    title: "Innovate consultancy",
    buttons: ["Strategy", "Growth"],
  },
  {
    id: 2,
    image: ImageTwo,
    title: "Strat edge solutions",
    buttons: ["Strategy", "Growth"],
  },
  {
    id: 3,
    image: ImageThree,
    title: "Prime strategy partners",
    buttons: ["Strategy", "Growth"],
  },
  {
    id: 4,
    image: ImageFour,
    title: "Elevate ennterprise",
    buttons: ["Strategy", "Growth"],
  },
];
// main
function Projects() {
  return (
    <Container>
      <Tagline>Our projects</Tagline>
      <Heading black={true}>Breakthrough projects</Heading>
      <SlideWrapper>
        {info.map((elm) => (
          <Child key={elm.id}>
            <img src={elm.image} />
            <div className="info">
              <h2>
                {elm.title}
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </h2>
              <div className="skill">
                {elm.buttons.map((btn) => (
                  <button key={elm.id}>{btn}</button>
                ))}
              </div>
            </div>
          </Child>
        ))}
      </SlideWrapper>
      {/* will be visible at 767px */}
      <Controller>
        <i>
          <FontAwesomeIcon icon={faChevronLeft} />
        </i>
        <i>
          <FontAwesomeIcon icon={faChevronRight} />
        </i>
      </Controller>
    </Container>
  );
}

export default Projects;
