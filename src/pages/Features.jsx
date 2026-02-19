// hooks
// styles
import { Container, Content, Box } from "../Styles/Features.Styles";
import {
  Heading,
  SubHeading,
  Highlight,
  CommonPara,
} from "../Styles/Common.Styles";
// icons
// info
const info = [
  {
    ic: "",
    title: "Quick solutions",
    des: "Our consultancy excels in providing quick solutions tailored to your business challenges",
  },
  {
    ic: "",
    title: "Expert advice",
    des: "Our consultancy excels in providing quick solutions tailored to your business challenges",
  },
  {
    ic: "",
    title: "Strategic planning",
    des: "Our consultancy excels in providing quick solutions tailored to your business challenges",
  },
  {
    ic: "",
    title: "Efficient operations",
    des: "Our consultancy excels in providing quick solutions tailored to your business challenges",
  },
];
// main
function Features() {
  return (
    <Container>
      {/* info */}
      <Highlight>Number #1 Solver</Highlight>
      <Heading black={true}>Explore our core features</Heading>
      <CommonPara>
        Our mission is to empower businesses of thrive in solutions
      </CommonPara>
      {/* slides */}
      <Content>
        {info.map((elm, i) => (
          <Box key={i}>
            <SubHeading>{elm.title}</SubHeading>
            <CommonPara>{elm.des}</CommonPara>
          </Box>
        ))}
      </Content>
    </Container>
  );
}

export default Features;
