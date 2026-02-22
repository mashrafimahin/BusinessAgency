// hook
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icons
import { faStar } from "@fortawesome/free-solid-svg-icons";
// main
function RatingBox({ amount = [1, 2, 3, 4, 5] }) {
  return (
    <Wrapper>
      <div className="stars">
        {amount.map((elm) => (
          <i key={elm}>
            <FontAwesomeIcon icon={faStar} />
          </i>
        ))}
      </div>
      <div className="text">
        Customers review (<span>4.8</span>/5.0)
      </div>
    </Wrapper>
  );
}

export default RatingBox;

// style
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 1.1rem;

  .stars {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 4px 8px;
    background: var(--accentColor);
    border-radius: 100px;

    i {
      color: #fff;
      margin-top: 2px;
      font-size: 12px;
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

  @media screen and (max-width: 990px) {
    row-gap: 0.9rem;

    .stars {
      padding: 4px 10px;
    }

    .text {
      font-size: 0.94rem;
    }
  }

  @media screen and (max-width: 767px) {
    align-items: flex-start;
  }
`;
