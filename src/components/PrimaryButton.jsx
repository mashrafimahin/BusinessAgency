// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper } from "../Styles/compStyles/PrimaryButton.Styles";
// icons
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// main
function PrimaryButton({ children }) {
  return (
    <Wrapper>
      <span className="btn_inner">
        <span className="btn_icon">
          <span>
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
          </span>
        </span>

        <span className="btn_text">
          <span>{children}</span>
        </span>
      </span>
    </Wrapper>
  );
}

export default PrimaryButton;
