// hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// style
import {
  Container,
  Slider,
  Content,
  BottomBox,
} from "../Styles/compStyles/Footer.Styles";
import { CommonPara, Paragraph, SubHeading } from "../Styles/Common.Styles";
const hrStyle = {
  position: "absolute",
  marginLeft: "-6%",
  height: "1px",
  width: "100%",
  border: "none",
  background: "#27354D",
};
// images
import ImageOne from "../assets/images/brand-1.png";
import ImageTwo from "../assets/images/brand-2.png";
const arrayImage = [
  ImageOne,
  ImageTwo,
  ImageOne,
  ImageTwo,
  ImageOne,
  ImageTwo,
  ImageOne,
  ImageTwo,
];
// icon
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// main
function Footer() {
  return (
    <Container>
      <Slider>
        {arrayImage.map((elm, i) => (
          <div className="child" key={i}>
            <img src={elm} />
          </div>
        ))}
      </Slider>
      <hr style={hrStyle} />
      <Content>
        {/* box 1 */}
        <div className="child">
          <SubHeading $default={true}>Our offices</SubHeading>
          <div className="info">
            <CommonPara>Headquarters - USA</CommonPara>
            <Paragraph $small={true}>
              993 Renner Burg, West Rond, <br /> MT 94251-030
            </Paragraph>
            <a href="#">+123 456 7890</a>
          </div>
          <div className="info">
            <CommonPara>Operations - Canada</CommonPara>
            <Paragraph $small={true}>
              Suite 452 8082 Boner Parge, <br /> Elviraton, CA 48998
            </Paragraph>
          </div>
        </div>
        {/* box 2 */}
        <div className="child">
          <SubHeading $default={true}>Resourses</SubHeading>
          <ul>
            <li>Contact Us</li>
            <li>Privacy policy</li>
            <li>Recognitions</li>
            <li>
              Careers <span>new</span>
            </li>
            <li>Blog</li>
            <li>Feedback</li>
            <li>Error 404</li>
          </ul>
        </div>
        {/* box 3 */}
        <div className="child">
          <SubHeading $default={true}>Services</SubHeading>
          <ul>
            <li>Strategic planning</li>
            <li>Market research</li>
            <li>Business process</li>
            <li>Financial management</li>
            <li>Change management</li>
            <li>IT consulting</li>
            <li>Leadership</li>
          </ul>
        </div>
        {/* box 4 */}
        <div className="child">
          <SubHeading $default={true} $cardSize={true}>
            Subscribe to our newsletter
          </SubHeading>
          <div className="inBox">
            <input type="email" placeholder="Enter email" />
            <button type="submit">
              <i>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ color: "#0075FF" }}
                />
              </i>
            </button>
          </div>
        </div>
      </Content>
      <BottomBox>
        <div className="cpy">&copy; 2025 Solvior All right reserved.</div>
        <div className="sci">
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faFacebookF} />
            </i>
          </a>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faTwitter} />
            </i>
          </a>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </i>
          </a>
        </div>
        <div className="link">
          <ul>
            <li>Policy & privacy</li>
            <li>Terms & conditions</li>
          </ul>
        </div>
      </BottomBox>
    </Container>
  );
}

export default Footer;
