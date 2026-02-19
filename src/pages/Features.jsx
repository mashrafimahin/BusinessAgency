// hooks
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import { Container, Content, Box } from "../Styles/Features.Styles";
import {
  Heading,
  SubHeading,
  Tagline,
  CommonPara,
} from "../Styles/Common.Styles";
// icons
import {
  faCompassDrafting,
  faGavel,
  faPeopleCarryBox,
  faPeoplePulling,
} from "@fortawesome/free-solid-svg-icons";
// info
const info = [
  {
    ic: faPeopleCarryBox,
    title: "Quick solutions",
    des: "Our consultancy excels in providing quick solutions tailored to your business challenges",
  },
  {
    ic: faPeoplePulling,
    title: "Expert advice",
    des: "Our consultancy excels in providing quick solutions tailored to your business challenges",
  },
  {
    ic: faCompassDrafting,
    title: "Strategic planning",
    des: "Our consultancy excels in providing quick solutions tailored to your business challenges",
  },
  {
    ic: faGavel,
    title: "Efficient operations",
    des: "Our consultancy excels in providing quick solutions tailored to your business challenges",
  },
];
// main
function Features() {
  return (
    <Container>
      {/* info */}
      <Tagline>Number #1 Solver</Tagline>
      <Heading black={true}>Explore our core features</Heading>
      <CommonPara>
        Our mission is to empower businesses of thrive in solutions
      </CommonPara>
      {/* slides */}
      <Content>
        {info.map((elm, i) => (
          <Box key={i}>
            <i>
              <FontAwesomeIcon icon={elm.ic} />
            </i>
            <SubHeading>{elm.title}</SubHeading>
            <CommonPara>{elm.des}</CommonPara>
          </Box>
        ))}
      </Content>
    </Container>
  );
}

export default Features;
