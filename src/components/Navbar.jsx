// hooks
import React, { useContext, useState } from "react";
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
import CTAlogo from "../assets/icons/cta-icon.png";
import Arrow from "../assets/icons/carrow.png";
import {
  faChevronDown,
  faMagnifyingGlass,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
// components
import MobileNav from "./MobileNav";
import Button from "./PrimaryButton";
// links
import { info } from "./HeaderInfo/MenuLinks";

// main
function Navbar() {
  // context
  const { size } = useContext(ScreenContext);
  // control mega menu
  const [active, setActive] = useState(null);
  // control mobile menu
  const [mobile, setMobile] = useState(false);
  // handle menu bar
  const handleMenu = () => {
    setMobile(true);
  };

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
                        {item?.iconClass && (
                          <i className="logoIcon">
                            <FontAwesomeIcon icon={item.iconClass} />
                          </i>
                        )}
                        {item.title}
                        {item?.status && (
                          <i className="linkIcon">
                            <FontAwesomeIcon icon={item.status} />
                          </i>
                        )}
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
                    {/* constat child */}
                    <div className="child">
                      <div className="content">
                        <img src={CTAlogo} />
                        <h1>
                          Need help?
                          <br /> Feel free contact us
                        </h1>
                        <p>
                          Our mission is to empowers businesses off all size in
                          an businesses.
                        </p>
                        <div className="action">
                          <img src={Arrow} />
                          <Button>Get in touch</Button>
                        </div>
                      </div>
                    </div>
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
          <Humberger onClick={handleMenu}>
            <h3>Menu</h3>
            <i>
              <FontAwesomeIcon icon={faQrcode} />
            </i>
          </Humberger>
        )}
      </FlexBox>
      {/* mobile nav */}
      {size < 990 && <MobileNav value={mobile} control={setMobile} />}
    </Container>
  );
}

export default React.memo(Navbar);
