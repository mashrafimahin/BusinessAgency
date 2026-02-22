// hooks
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// context
import { ScreenContext } from "../context/ScreenSizeContext";
// styles
import {
  Container,
  Logo,
  List,
  SearchButton,
  Humberger,
} from "../Styles/compStyles/Navbar.Styles";
import { FlexBox } from "../Styles/Common.Styles";
// icons
import BrandIcon from "../assets/icons/primary-logo.png";
import {
  faChevronDown,
  faMagnifyingGlass,
  faQrcode,
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
  // context
  const { size } = useContext(ScreenContext);

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
        {size > 990 && (
          <SearchButton>
            Explore
            <i>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </i>
          </SearchButton>
        )}
        {size > 767 && <Button $resize={true}>Get a quote</Button>}
        {size < 990 && (
          <Humberger>
            <h3>Menu</h3>
            <i>
              <FontAwesomeIcon icon={faQrcode} />
            </i>
          </Humberger>
        )}
      </FlexBox>
    </Container>
  );
}

export default Navbar;
