// hook
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// style
import { Container, Child } from "../Styles/compStyles/MobileNav.Styles";
import { List } from "../Styles/compStyles/Navbar.Styles";
// context
// icons
import Brand from "../assets/icons/primary-logo.png";
import CTAlogo from "../assets/icons/cta-icon.png";
import Arrow from "../assets/icons/carrow.png";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
// components
import { InputBox } from "./InputBox";
import Button from "./PrimaryButton";
// info
import { info } from "./HeaderInfo/MenuLinks";
// main
function MobileNav() {
  // state
  const [open, setOpen] = useState(null);
  // controller
  const handleOpen = (elm) => {
    if (!open && elm.dropDown) {
      setOpen(elm.id);
    } else {
      setOpen(null);
    }
  };

  // comp
  return (
    <Container>
      <Child>
        {/* head */}
        <div className="head">
          <img src={Brand} />
          <i>
            <FontAwesomeIcon icon={faTimes} />
          </i>
        </div>
        {/* search */}
        <div className="search">
          <InputBox />
        </div>
        {/* menu */}
        <List>
          {info.map((elm) => (
            <li key={elm.id}>
              <div className="option" onClick={() => handleOpen(elm)}>
                {elm.title}
                {elm?.dropDown && (
                  <i className="mainIcon">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </i>
                )}
              </div>
              {/* subMenu */}
              {elm?.subMenu && (
                <div
                  className={`subChild ${elm?.childClass} ${open ? "open" : ""} `}
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
                            Our mission is to empowers businesses off all size
                            in an businesses.
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
      </Child>
    </Container>
  );
}

export default React.memo(MobileNav);
