// hook
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// style
import {
  Container,
  Child,
  CustomList,
  Contact,
} from "../Styles/compStyles/MobileNav.Styles";
// context
// icons
import Brand from "../assets/icons/primary-logo.png";
import CTAlogo from "../assets/icons/cta-icon.png";
import Arrow from "../assets/icons/carrow.png";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
// components
import { InputBox } from "./InputBox";
import Button from "./PrimaryButton";
// icon
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// info
import { info } from "./HeaderInfo/MenuLinks";
const linkInfo = [
  {
    tag: "Email",
    title: "support@mail.com",
    link: "#",
  },
  {
    tag: "Phone",
    title: "0123 456 789",
    link: "#",
  },
  {
    tag: "Location",
    title: "Santa, United States",
    link: "#",
  },
];
const sciLink = [
  {
    link: "#",
    icon: faFacebookF,
  },
  {
    link: "#",
    icon: faInstagram,
  },
  {
    link: "#",
    icon: faLinkedinIn,
  },
  {
    link: "#",
    icon: faTwitter,
  },
];
// main
function MobileNav({ value, control }) {
  // state
  const [open, setOpen] = useState(null);
  // controller: toggle the submenu for the clicked item only
  const handleOpen = (elm) => {
    if (!elm?.dropDown) {
      // nothing to open for items without a dropdown
      setOpen(null);
      return;
    }

    // toggle: if the same id is already open, close it; otherwise open this one
    if (open === elm.id) {
      setOpen(null);
    } else {
      setOpen(elm.id);
    }
  };
  // handle menu bar
  const handleMenu = () => {
    control(false);
  };

  // comp
  return (
    <Container $open={value}>
      <Child>
        {/* head */}
        <div className="head">
          <img src={Brand} />
          <i onClick={handleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </i>
        </div>
        {/* search */}
        <div className="search">
          <InputBox />
        </div>
        {/* menu */}
        <CustomList>
          {info.map((elm) => (
            <li key={elm.id}>
              <div className="option" onClick={() => handleOpen(elm)}>
                {elm.title}
                {elm?.dropDown && (
                  <i className={`mainIcon ${open === elm.id ? "roll" : ""}`}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </i>
                )}
              </div>
              {/* subMenu */}
              {elm?.subMenu && (
                <div
                  className={`subChild ${elm?.childClass} ${open === elm.id ? "open" : ""} `}
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
        </CustomList>
        {/* contacts */}
        <Contact>
          {/* single link */}
          <div className="info">
            <h2>Contact info</h2>
            <div className="list">
              {linkInfo.map((elm, index) => (
                <div key={index}>
                  <span>{elm.tag}</span>
                  <a href={elm?.link | "#"}>{elm.title}</a>
                </div>
              ))}
            </div>
          </div>
          {/* social link */}
          <div className="info">
            <h2>Follow us</h2>
            <div className="sci">
              {sciLink.map((elm, i) => (
                <a href={elm?.link | "#"} key={i}>
                  <i>
                    <FontAwesomeIcon icon={elm.icon} />
                  </i>
                </a>
              ))}
            </div>
          </div>
        </Contact>
      </Child>
    </Container>
  );
}

export default React.memo(MobileNav);
