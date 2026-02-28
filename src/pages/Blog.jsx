// hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import {
  Wrapper,
  Heading,
  Tagline,
  SubHeading,
  CommonPara,
} from "../Styles/Common.Styles";
import { Container, GridBox } from "../Styles/Blog.Styles";
import { Header } from "../Styles/Testimonial.Styles";
import { DraftDiv } from "../Styles/Service.Styles";
const topMarg = { marginTop: "1.2rem" };
// component
import Button from "../components/PrimaryButton";
// images
import ImageOne from "../assets/images/b-1.webp";
import ImageTwo from "../assets/images/b-2.webp";
import ImageThree from "../assets/images/b-3.webp";
import ImageFour from "../assets/images/b-4.webp";
// icons
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// info
const info = [
  {
    id: 1,
    image: ImageOne,
    title: "Strategies for today's top business challenges",
    des: "In today's dynamic business environment, the key to success lies in strategic planning and operational execution organisations.",
    tag: "Business",
    date: "June 30, 2024",
    comment: "02 Comments",
    btn: "Read more",
  },
  {
    id: 2,
    image: ImageTwo,
    title: "Innovative solutions for business success from now",
    tag: "Business",
    date: "June 30, 2024",
    comment: "02 Comments",
  },
  {
    id: 3,
    image: ImageThree,
    title: "Harnessing digital transformation a roadmap for businesses",
    tag: "Innovations",
    date: "June 30, 2024",
    comment: "02 Comments",
  },
  {
    id: 4,
    image: ImageFour,
    title: "Mastering change management kye lessons for businesses",
    tag: "Management",
    date: "June 30, 2024",
    comment: "02 Comments",
  },
];
// main
function Blog() {
  return (
    <Wrapper>
      <Container>
        {/* heading part */}
        <Header>
          <div>
            <DraftDiv>
              <Tagline>Latest news</Tagline>
            </DraftDiv>
            <Heading black={true} style={topMarg}>
              Tip and tricks for success
            </Heading>
          </div>
          <div className="flexible">
            <Button special={true}>Explore More</Button>
          </div>
        </Header>
        {/* grid boxes */}
        <GridBox>
          {info.map((elm) => (
            <div className="child" key={elm.id}>
              <div className="image">
                <img src={elm.image} />
              </div>
              <div className="text">
                <div className="deadline">
                  <div className="tagDiv">{elm.tag}</div>
                  <ul>
                    <li>{elm.date}</li>
                    <li>{elm.comment}</li>
                  </ul>
                </div>
                <div className="heads">
                  <h1>{elm.title}</h1>
                  {elm.des && <CommonPara>{elm.des}</CommonPara>}
                </div>
                {elm.btn && (
                  <button>
                    {elm.btn}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </GridBox>
      </Container>
    </Wrapper>
  );
}

export default Blog;
