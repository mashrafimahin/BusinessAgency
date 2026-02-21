// hooks
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import {
  Container,
  Child,
  Shape,
  SubChild,
  Box,
  UserDiv,
  List,
  TopShape,
} from "../Styles/Service.Styles";
import {
  Tagline,
  Heading,
  CommonPara,
  FlexBox,
  UserIcon,
  CustomIcon,
} from "../Styles/Common.Styles";
const strech = {
  marginLeft: "-12px",
};
// component
import Button from "../components/PrimaryButton";
// icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// images
import Shape1 from "../assets/images/h2-shape-1.webp";
import Shape2 from "../assets/images/h2-shape-2.webp";
import User1 from "../assets/images/thumb-1.png";
import User2 from "../assets/images/thumb-2.png";
import User3 from "../assets/images/thumb-3.png";
// main
function Service() {
  return (
    <Container>
      <Shape src={Shape1} />
      <TopShape src={Shape2} />
      <Child>
        {/* info */}
        <Tagline>Our Company</Tagline>
        <Heading black={true}>
          Crafting success tailored solution for each & every challenges
        </Heading>
        <CommonPara>
          Our mission is to empowers businesses off all size to thrive in an our
          businesses ever changing marketplace. We are committed to the
          delivering exceptional in the value through our strategic inset,
          innovative approaches. Our mission is to empower businesses of all
          sizes to thrive.
        </CommonPara>
        {/* sub boxes */}
        <SubChild>
          {/* list */}
          <Box style={{ borderRight: "1px solid #c6c8ca" }}>
            <List>
              <li>Expertise and experience</li>
              <li>Client Centric approach</li>
              <li>Commitment excellences</li>
            </List>
            <Button special={true}>Read More</Button>
          </Box>
          {/* clients */}
          <Box>
            <UserDiv>
              <FlexBox>
                <UserIcon src={User1} gray={true} />
                <UserIcon src={User2} gray={true} style={strech} />
                <UserIcon src={User3} gray={true} style={strech} />
                <CustomIcon style={strech}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ marginLeft: "8px" }}
                  />
                </CustomIcon>
              </FlexBox>
              <FlexBox col={true}>
                <Heading black={true}>3K+</Heading>
                <CommonPara>Happy clients all over world now.</CommonPara>
              </FlexBox>
            </UserDiv>
          </Box>
        </SubChild>
      </Child>
    </Container>
  );
}

export default Service;
