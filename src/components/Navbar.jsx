// hooks
import { useContext, useState } from "react";
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
import { info } from "./HeaderInfo/MenuLinks";

// main
function Navbar() {
  // context
  const { size } = useContext(ScreenContext);
  // control mega menu: track active menu item by id (null = none)
  const [active, setActive] = useState(null);

  return (
    <Container>
      {/* logo */}
      <Logo src={BrandIcon} draggable={false} />
      {/* links */}
      <List>
        {info.map((elm) => (
          <li
            key={elm.id}
            onMouseEnter={() => setActive(elm.id)}
            onMouseLeave={() => setActive(null)}
          >
            {elm.title}
            {elm?.dropDown && (
              <i className="mainIcon">
                <FontAwesomeIcon icon={faChevronDown} />
              </i>
            )}
            {/* subMenu */}
            {elm?.subMenu && (
              <div
                className={`subChild ${elm?.childClass} ${active === elm.id ? "show" : ""}`}
              >
                {!elm?.gridTemp ? (
                  <ul>
                    {elm.subMenu.map((item, i) => (
                      <li key={i}>
                        <i className="logoIcon">
                          <FontAwesomeIcon icon={item.iconClass} />
                        </i>
                        {item.title}
                        <i className="linkIcon">
                          <FontAwesomeIcon icon={item.status} />
                        </i>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="pageUl">
                    {elm.subMenu.map((menus, i) => (
                      <div key={i} className="child">
                        <h2>{menus.title}</h2>
                        <ul>
                          {menus.list.map((item, i) => (
                            <li key={i}>
                              {item.title}
                              {item.status ? (
                                <span className={item.status.class}>
                                  {item.status.text}
                                </span>
                              ) : (
                                ""
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
