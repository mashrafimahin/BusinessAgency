// hooks
import {
  faChevronDown,
  faChevronRight,
  faCircleCheck,
  faClock,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

// main
function TopBar() {
  return (
    <Container>
      <div className="message">
        <i>
          <FontAwesomeIcon icon={faCircleCheck} />
        </i>
        <p>Trusted partner in business excellence</p>
        <a href="#">
          Join us now
          <i>
            <FontAwesomeIcon icon={faChevronRight} />
          </i>
        </a>
      </div>
      <div className="info">
        <ul>
          <li>
            <i>
              <FontAwesomeIcon icon={faClock} />
            </i>
            <p>Mon-Friday: 9:00 - 18:00</p>
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            <p>
              <a href="#">support@mail.com</a>
            </p>
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faGlobe} />
            </i>
            <p>
              English
              <i style={{ cursor: "pointer" }}>
                <FontAwesomeIcon icon={faChevronDown} />
              </i>
            </p>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default TopBar;

// style
const Container = styled.div`
  padding: 8px 1%;
  background-color: var(--accentColor);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--textColor);
  font-size: 14px;
  font-family: brand, sans-serif;
  letter-spacing: 0.2px;
  font-weight: 400;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    row-gap: 8px;
  }

  @media screen and (min-width: 1800px) {
    padding: 8px 3%;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }

  i {
    font-size: 12px;
  }

  a {
    font-size: 14px;
  }

  .message {
    display: flex;
    align-items: center;
    gap: 4px;

    i {
      margin-right: 2px;
      font-size: 1.4em;
    }
    a {
      text-decoration: none;
      color: var(--textColor);
      font-weight: 600;
      position: relative;

      i {
        font-size: 12px;
      }

      &::before {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: var(--textColor);
        transition: 1s;
      }

      &:hover::before {
        width: 0;
      }
    }
  }

  .info {
    ul {
      display: flex;
      align-items: center;
      gap: 10px;

      li {
        list-style: none;
        white-space: nowrap;
        border-right: 1px solid var(--textColor);
        display: flex;
        align-items: center;
        gap: 5px;
        padding-right: 10px;

        a {
          text-decoration: none;
          color: inherit;
        }

        i {
          font-size: 14px;
        }
      }

      li:nth-last-child(1) {
        border-right: none;
      }
    }
  }
`;
