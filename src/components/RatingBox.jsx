// hook
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icons
import { faStar } from "@fortawesome/free-solid-svg-icons";
// main
function RatingBox({ amount = 5 }) {
  return (
    <Wrapper>
      <div className="stars">
        {[...Array(amount)].map((_, i) => (
          <i key={i}>
            <FontAwesomeIcon icon={faStar} />
          </i>
        ))}
      </div>
    </Wrapper>
  );
}

export default RatingBox;

// style
const Wrapper = styled.div`
  width: fit-content;

  .stars {
    display: flex;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 100px;

    background: var(--accentColor);

    i {
      font-size: 12px;
      margin-top: 2px;

      color: var(--textColor);
    }
  }

  .text {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: var(--paraColor);

    span {
      font-weight: 800;
      color: #111;
    }
  }

  @media (max-width: 767px) {
    align-items: flex-start;
  }
`;
