// styles
import {
  Container,
  TextArea,
  CardWrapper,
  Card,
} from "../Styles/ServiceCard.Styles";
import {
  Wrapper,
  Heading,
  Tagline,
  FlexBox,
  Paragraph,
  CommonPara,
  SubHeading,
} from "../Styles/Common.Styles";
import { DraftDiv } from "../Styles/Service.Styles";
// icons
import IconOne from "../assets/icons/service-1.svg";
import IconTwo from "../assets/icons/service-2.svg";
import IconThree from "../assets/icons/service-3.svg";
// images
import ImageOne from "../assets/images/h1-service-1.webp";
import ImageTwo from "../assets/images/h1-service-2.webp";
import ImageThree from "../assets/images/h1-service-3.webp";
// components
import RatingBox from "../components/RatingBox";
import Button from "../components/PrimaryButton";
// info
const info = [
  {
    id: "1",
    icon: IconOne,
    image: ImageOne,
    title: "Strategic planning & execution",
    des: "In today's dynamic business environment, to know to success lies strategic planning and operationals business success execution.",
  },
  {
    id: "2",
    icon: IconTwo,
    image: ImageTwo,
    title: "Business process optimization",
    des: "In today's dynamic business environment, to know to success lies strategic planning and operationals business success execution.",
  },
  {
    id: "3",
    icon: IconThree,
    image: ImageThree,
    title: "Leadership executive coaching",
    des: "In today's dynamic business environment, to know to success lies strategic planning and operationals business success execution.",
  },
];
// main
function ServiceCard() {
  return (
    <Wrapper>
      <Container>
        {/* heading */}
        <TextArea>
          <FlexBox col={true}>
            <DraftDiv>
              <Tagline>Transformative solution</Tagline>
            </DraftDiv>
            <Heading black={true}>Get our exclusive service</Heading>
          </FlexBox>
          <RatingBox />
        </TextArea>
        {/* boxes */}
        <CardWrapper>
          {info.map((elm) => (
            <Card key={elm.id}>
              <div className="child">
                <div className="infoChild">
                  <Paragraph>
                    <span>{elm.id}</span>/3
                  </Paragraph>
                  <img src={elm.icon} />
                  <SubHeading $default={true} $cardSize={true}>
                    {elm.title}
                  </SubHeading>
                  <CommonPara $cardSize={true}>{elm.des}</CommonPara>
                  <div className="res">
                    <Button $wSize={true}>Get Started</Button>
                  </div>
                </div>
              </div>
              <div className="child">
                <img src={elm.image} />
              </div>
            </Card>
          ))}
        </CardWrapper>
      </Container>
    </Wrapper>
  );
}

export default ServiceCard;
