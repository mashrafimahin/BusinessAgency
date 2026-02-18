// hooks
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import {
  Container,
  Logo,
  List,
  SearchButton,
} from "../Styles/compStyles/Navbar.Styles";
import { FlexBox } from "../Styles/Common.Styles";
// icons
import BrandIcon from "../assets/icons/primary-logo.png";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
// components
import Button from "./PrimaryButton";

// links
const links = [
  {
    title: "Home",
    dropDown: false,
  },
  {
    title: "Services",
    dropDown: true,
  },
  {
    title: "Pages",
    dropDown: true,
  },
  {
    title: "Portfolio",
    dropDown: true,
  },
  {
    title: "Blog",
    dropDown: true,
  },
  {
    title: "Contact",
    dropDown: false,
  },
];

// main
function Navbar() {
  return (
    <Container>
      {/* logo */}
      <Logo src={BrandIcon} draggable={false} />
      {/* links */}
      <List>
        {links.map((elm, i) => (
          <li key={i}>
            {elm.title}
            {elm.dropDown && (
              <i>
                <FontAwesomeIcon icon={faChevronDown} />
              </i>
            )}
          </li>
        ))}
      </List>
      {/* features  */}
      <FlexBox>
        <SearchButton>
          Explore
          <i>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </i>
        </SearchButton>
        <Button $resize={true}>Get a quote</Button>
      </FlexBox>
    </Container>
  );
}

export default Navbar;
